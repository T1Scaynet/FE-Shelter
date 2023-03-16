import { configureStore } from '@reduxjs/toolkit';
import pets from './features/pets/petSlice';
import petDetails from './features/details/detailSlice';
import petsByAge from './features/petsByAge/byAgeSlice';
import petsByGenre from './features/petsByGenre/byGenreSlice';
import petsByType from './features/petsByType/byTypeSlice';
import petsBySize from './features/petsBySize/bySizeSlice';

export const store = configureStore({
  reducer: { // unifica los reducer que cada estado en un solo lugar
    pets,
    petDetails,
    petsByAge,
    petsByGenre,
    petsBySize,
    petsByType
  }
});
