import { createSlice } from '@reduxjs/toolkit';

export const bySizeSlice = createSlice({
  name: 'petsBySize',
  initialState: {
    value: [{ Size: 1.79 }]
  },
  reducers: {
    // Acá van los reducers
  }
});

export default bySizeSlice.reducer;

/// Acá abajo van lo que vendrian a ser las funciones del action (funciones asíncronas)
