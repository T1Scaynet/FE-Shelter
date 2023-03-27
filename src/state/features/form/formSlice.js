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
  return async function (_dispatch, getState) {
    const currentState = getState().login;
    try {
      const instance = axios.create();
      instance.defaults.headers.common['x-access-token'] = currentState.token;
      const formAxios = await instance.post('/form', payload);
      return formAxios;
    } catch (error) {
      console.warn("Error al enviar datos en función 'PostPet'");
      return error;
    }
  };
};
