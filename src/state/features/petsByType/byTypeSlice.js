import { createSlice } from '@reduxjs/toolkit';

export const byTypeSlice = createSlice({
  name: 'petsByType',
  initialState: {
    value: [{ name: 'Firulais' }]
  },
  reducers: {
    // Acá van los reducers
  }
});

export default byTypeSlice.reducer;

/// Acá abajo van lo que vendrian a ser las funciones del action (funciones asíncronas)
