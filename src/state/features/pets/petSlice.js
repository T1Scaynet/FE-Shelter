// Las slice es una parte que puedo tener del estado

import { createSlice } from '@reduxjs/toolkit';
// import axios from 'axios';

export const petSlice = createSlice({
  name: 'pets',
  initialState: {
    list: []
  },
  reducers: {
    // Acá van los reducers
  }
});

export default petSlice.reducer;

/// Acá abajo van lo que vendrian a ser las funciones del action (funciones asíncronas)
