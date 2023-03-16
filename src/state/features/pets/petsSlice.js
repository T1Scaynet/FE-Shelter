// Las slice es una parte que puedo tener del estado

import { createSlice } from '@reduxjs/toolkit';
// import axios from 'axios';

export const petSlice = createSlice({
  name: 'pets',
  initialState: {
    list: []
  },
  reducers: {}
});

export default petSlice.reducer;

// funciones que ejecutan operaciones asincronas

// export const getAllPets = () => {
//   return () => {
//     axios('linkExample')
//   };
// };
