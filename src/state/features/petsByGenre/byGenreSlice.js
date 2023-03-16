import { createSlice } from '@reduxjs/toolkit';

export const byGenreSlice = createSlice({
  name: 'petsByGenre',
  initialState: {
    value: []
  },
  reducers: {
    // Acá van los reducers
  }
});

export default byGenreSlice.reducer;

/// Acá abajo van lo que vendrian a ser las funciones del action (funciones asíncronas)
