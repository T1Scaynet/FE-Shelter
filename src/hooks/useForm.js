import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { PostPet } from '../state/features/pets/petSlice';

export const useForm = (initialForm, validateForm) => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  // const [loading, setLoading] = useState(false);
  // const [response, setResponse] = useState(null);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
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
    if (Object.keys(errors).length !== 0) {
      window.alert(
        'Existen errores. Por favor introduzca los datos correctamente',
      );
    } else {
      dispatch(PostPet(form));
    }
    navigate('/');
  };

  return {
    form,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    // loading,
    // response,
  };
};
