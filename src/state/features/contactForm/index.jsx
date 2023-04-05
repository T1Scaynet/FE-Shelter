import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const contactSent = createSlice({
  name: 'contact',
  initialState: {
    value: {}
  },
  reducers: {
    // Acá van los reducers
  }
});

export default contactSent.reducer;

/// Acá abajo van lo que vendrian a ser las funciones del action (funciones asíncronas)
export const PostContat = (data) => {
  const urlPost = '/form/contact';
  return async function (dispatch) {
    const r = axios.post(urlPost, data);
    return r;
  };
};
