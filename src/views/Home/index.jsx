import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Swal from 'sweetalert2';
import { setFilters } from '../../state/features/pets/petSlice';

import { Display1 } from './Display1';
import { Display2 } from './Display2';
import { Display3 } from './Display3';
import { Display4 } from './Display4';
import { Display5 } from './Display5';
import { clearCart } from '../../state/features/cartSlice';
import '../../App.css';
import { loginSuccessful } from '../../state/features/login/loginSlice';
import axios from 'axios';

export const Home = () => {
  const { search } = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const query = new URLSearchParams(search);
  const status = query.get('collection_status');
  if (status === 'rejected') {
    Swal.fire({
      icon: 'error',
      title: 'La transacción ha sido rechazada',
      timer: '2000'
    });
  } else if (status === 'approved') {
    Swal.fire({
      icon: 'success',
      title: 'La transacción ha sido exitosa',
      timer: '2000'
    });
    dispatch(clearCart());
  }

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(setFilters({
      size: '',
      type: '',
      genre: '',
      sort: '',
      totalPages: 1,
      currentPage: 1,
      search: ''
    }));
  }, []);

  // Logeo con Google
  const token = query.get('sesion');
  useEffect(() => {
    const loginGoogle = async () => {
      const instance = axios.create();
      instance.defaults.headers.common['x-access-token'] = token;
      const user = await instance.get('/user/profile', {
        timeout: 5000
      });
      dispatch(loginSuccessful({ token, user: user.data.user }));
      navigate('/');
    };
    if (token) {
      loginGoogle();
    }
  }, [search]);
  // fin logeo Google

  return (
    <div>
      <Display1 />
      <Display2 />
      <Display3 />
      <Display4 />
      <Display5 />
    </div>
  );
};
