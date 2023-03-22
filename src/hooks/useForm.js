import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { PostPet } from '../state/features/pets/petSlice';

export const useForm = (initialForm, validateForm) => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  // const [response, setResponse] = useState(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const showModal = (res = 'success') => {
    if (res === 'success') {
      Swal.fire({
        icon: 'success',
        title: 'Mascota creada con éxito',
        timer: '3000',
      });
    } else if (res === 'errorform') {
      Swal.fire({
        icon: 'error',
        title: 'Ingrese los datos correctamente',
      });
    } else if (res === 'errorserver') {
      Swal.fire({
        icon: 'error',
        title: 'Ooops',
        text: 'Servidor no responde, contacte con el equipo de desarrollo',
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
    setErrors(validateForm(form));
  };
  const handleBlur = (e) => {
    handleChange(e);
    setErrors(validateForm(form));
  };
  const handleReset = () => {
    setForm(initialForm);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setErrors(validateForm(form));
    if (Object.keys(errors).length === 0) {
      dispatch(PostPet(form)).then((res) => {
        if (res.status === 200 || res.status === 201) {
          showModal();
          console.log(res.data);
          handleReset();
          navigate('/');
        } else {
          console.log(res);
          showModal('errorserver');
          navigate('/');
        }
      });
    } else {
      showModal('errorform');
    }
    setLoading(false);
  };

  return {
    form,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    loading,
  };
};
