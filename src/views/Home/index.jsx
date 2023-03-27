import '../../App.css';

import { Display1 } from './Display1';
import { Display2 } from './Display2';
import { Display3 } from './Display3';
import { Display5 } from './Display5';
import { useEffect } from 'react';
import { DisplayFour } from './DisplayFour';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';

export const Home = () => {
  const { search } = useLocation();
  const dispatch = useDispatch();

  const query = new URLSearchParams(search);
  const status = query.get('collection_status');
  if (status === 'rejected') {
    Swal.fire({
      icon: 'error',
      title: 'La transacción ha sido rechazada',
      timer: '2000',
    });
  } else if (status === 'approved') {
    Swal.fire({
      icon: 'success',
      title: 'La transacción ha sido exitosa',
      timer: '2000',
    });
    dispatch(clearCart());
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Display1 />
      <Display2 />
      <Display3 />
      <DisplayFour />
      <Display5 />
    </div>
  );
};
