import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import pets from './features/pets/petSlice';
import petDetails from './features/details/detailSlice';
import errorSlice from './features/error/errorSlice';
import top from './features/top/topSlice';
import users from './features/users/userSlice';

const persistConfig = {
  key: 'root',
  storage
};

const rootReducer = combineReducers({
  users,
  pets,
  petDetails,
  error: errorSlice,
  top
});

const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
    }
  })
});
export const persistor = persistStore(store);
