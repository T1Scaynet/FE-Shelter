import {
  combineReducers,
  configureStore,
  getDefaultMiddleware
} from '@reduxjs/toolkit';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import pets from './features/pets/petSlice';
import petDetails from './features/details/detailSlice';
import errorSlice from './features/error/errorSlice';
import top from './features/top/topSlice';
import users from './features/users/userSlice';
import comments from './features/comments/commentsSlice';
import login from './features/login/loginSlice';
import products from './features/products/productSlice';
import cartSlice from './features/cartSlice';
import { productsApi } from './features/products/productsApi';
import formRequest from './features/formDashAdopciones';

const persistConfig = {
  key: 'root',
  storage
};

const rootReducer = combineReducers({
  users,
  pets,
  petDetails,
  error: errorSlice,
  top,
  comments,
  login,
  products,
  cart: cartSlice,
  formRequest,
  [productsApi.reducerPath]: productsApi.reducer
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
