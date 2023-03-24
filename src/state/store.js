import { configureStore } from '@reduxjs/toolkit';
import pets from './features/pets/petSlice';
import petDetails from './features/details/detailSlice';
import errorSlice from './features/error/errorSlice';
import top from './features/top/topSlice';
import users from './features/users/userSlice'; 
import comments from './features/comments/commentsSlice'

export const store = configureStore({
  reducer: {
    users,
    pets,
    petDetails,
    error: errorSlice,
    top,
    comments
  }
});
