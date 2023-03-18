import { configureStore } from '@reduxjs/toolkit';
import pets from './features/pets/petSlice';
import petDetails from './features/details/detailSlice';
import errorSlice from './features/error/errorSlice';

export const store = configureStore({
  reducer: { // unifica los reducer que cada estado en un solo lugar
    pets,
    petDetails,
    error: errorSlice
  }
});
