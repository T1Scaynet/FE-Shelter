// Las slice es una parte que puedo tener del estado

import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
// import axios from 'axios';

export const petSlice = createSlice({
  name: 'pets',
  initialState: {
    list: [],
    namesList: []
  },
  reducers: {
    // Acá van los reducers
    setPetsList: (state, action) => {
      state.list = action.payload;
    },
    setPetNamesList: (state, action) => { // nuevo reducer para actualizar la lista de nombres
      state.namesList = action.payload;
    }
  }
});

export const { setPetsList, setPetByGenreList, setPetByTypeList, setPetNamesList } = petSlice.actions;

export default petSlice.reducer;

/// Acá abajo van lo que vendrian a ser las funciones del action (funciones asíncronas)
export const getAllPets = ({ size, type, genre, order }) => {
  return async function (dispatch) {
    axios.get(`http://localhost:3001/pet?size=${size}&type=${type}&genre=${genre}&sort=${order}`)
      .then(r => r.data)
      .then(response => {
        dispatch(setPetsList(response.filteredPets));
      })
      .catch((error) => console.log(error));
  };
};

// esta es la actions para la search bar
export const getPetNames = (name) => {  
  return async function (dispatch) {
    axios.get(`http://localhost:3001/pets?name=${name}`)
      .then(r => r.data)
      .then(response => {
        dispatch(setPetNamesList(response.petName));
        console.log("este es elconsole log q trae los nombres", response)
      })
      .catch((error) => console.log(error));
  };
};



