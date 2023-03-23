import { configureStore } from '@reduxjs/toolkit';
import pets from './features/pets/petSlice';
import petDetails from './features/details/detailSlice';
import errorSlice from './features/error/errorSlice';
import top from './features/top/topSlice';
import login from './features/login/loginSlice';
import users from './features/users/userSlice';

export const store = configureStore({
  reducer: {
    users,
    pets,
    petDetails,
    error: errorSlice,
    top,
    login
  }
});
