import { createSlice } from '@reduxjs/toolkit';

export const byAgeSlice = createSlice({
  name: 'petsByAge',
  initialState: {
    value: []
  },
  reducers: {
    // Acá van los reducers
  }
});

export default byAgeSlice.reducer;

/// Acá abajo van lo que vendrian a ser las funciones del action (funciones asíncronas)
