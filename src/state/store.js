import { configureStore } from '@reduxjs/toolkit';
import pets from './features/pets/petSlice';
import petDetails from './features/details/detailSlice';
import errorSlice from './features/error/errorSlice';
import top from './features/top/topSlice';

export const store = configureStore({
  reducer: {
    pets,
    petDetails,
    error: errorSlice,
    top
  }
});
