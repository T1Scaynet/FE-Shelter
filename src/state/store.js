import { configureStore } from '@reduxjs/toolkit';
import pets from './features/pets/petSlice';
import petDetails from './features/details/detailSlice';
import errorSlice from './features/error/errorSlice';
import top from './features/top/topSlice';
import login from './features/login/loginSlice';
import users from './features/users/userSlice';
import comments from './features/comment/commentSlice';

export const store = configureStore({
  reducer: {
    users,
    pets,
    petDetails,
    comments,
    error: errorSlice,
    top,
    login
  }
});
