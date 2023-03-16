import { configureStore } from '@reduxjs/toolkit';
import pets from './features/pets/petsSlice';

export const store = configureStore({
  reducer: { // unifica los reducer que cada estado en un solo lugar
    pets
  }
});
