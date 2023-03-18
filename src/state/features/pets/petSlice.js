/* eslint-disable quotes */
// Las slice es una parte que puedo tener del estado

import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
// import axios from 'axios';

export const petSlice = createSlice({
  name: 'pets',
  initialState: {
    list: [],
  },
  reducers: {
    // Acá van los reducers
    setPetsList: (state, action) => {
      state.list = action.payload;
    },
  },
});

export const { setPetsList, setPetByGenreList, setPetByTypeList } =
  petSlice.actions;

export default petSlice.reducer;

/// Acá abajo van lo que vendrian a ser las funciones del action (funciones asíncronas)
export const getAllPets = ({ size, type, genre, sort }) => {
  return async function (dispatch) {
    axios.get(`http://localhost:3001/pet?size=${size}&type=${type}&genre=${genre}&sort=${sort}`)
      .then(r => r.data)
      .then(response => {
        dispatch(setPetsList(response.pets));
      })
      .catch((error) => console.log(error));
  };
};

export const PostPet = (payload) => {
  return async function () {
    try {
      console.log('enviando');
      console.log(payload);
      const sendInfo = await axios.post(
        'http://localhost:3001/pet/create',
        payload,
      );
      console.log('enviado');
      console.log(sendInfo);
    } catch (error) {
      window.alert("Error al enviar datos en función 'PostPet'");
    }
  };
};
