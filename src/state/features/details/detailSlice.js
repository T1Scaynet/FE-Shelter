import { createSlice } from '@reduxjs/toolkit';

export const detailSlice = createSlice({
  name: 'petDetails',
  initialState: {
    value: {}
  },
  reducers: {
    // Acá van los reducers
  }
});

export default detailSlice.reducer;

/// Acá abajo van lo que vendrian a ser las funciones del action (funciones asíncronas)
