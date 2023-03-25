import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const formSlice = createSlice({
  name: 'form',
  initialState: {
    list: []
  },
  reducers: {

  }
});

// export const {} = formSlice.reducer;

export default formSlice.reducer;

export const PostForm = (payload) => {
  return async function () {
    try {
      const formAxios = await axios.post('/form', payload);
      return formAxios;
    } catch (error) {
      console.warn("Error al enviar datos en función 'PostPet'");
      return error;
    }
  };
};
