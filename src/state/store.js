import { configureStore } from '@reduxjs/toolkit';
import pets from './features/pets/petSlice';
import petDetails from './features/details/detailSlice';
import errorSlice from './features/error/errorSlice';
import top from './features/top/topSlice';
import productSlice from './features/products/productSlice';
import { productsApi } from './features/products/productsApi';
import cartSlice from './features/cartSlice';

export const store = configureStore({
  reducer: {
    pets,
    petDetails,
    error: errorSlice,
    top,
    products: productSlice,
    cart: cartSlice,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});
