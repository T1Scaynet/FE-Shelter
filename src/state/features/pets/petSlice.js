// Las slice es una parte que puedo tener del estado

import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
// import axios from 'axios';

export const petSlice = createSlice({
  name: 'pets',
  initialState: {
    list: []
  },
  reducers: {
    // Acá van los reducers
    setPetsList: (state, action) => {
      state.list = action.payload;
    }
  }
});

export const { setPetsList, setPetByGenreList, setPetByTypeList } = petSlice.actions;

export default petSlice.reducer;

/// Acá abajo van lo que vendrian a ser las funciones del action (funciones asíncronas)
export const getAllPets = ({ size, type, genre, sort }) => {
  return async function (dispatch) {
    axios.get(`http://localhost:3001/pet?size=${size}&type=${type}&genre=${genre}&sort=${sort}`)
      .then(r => r.data)
      .then(response => {
        dispatch(setPetsList(response.filteredPets));
      })
      .catch((error) => console.log(error));
  };
};
