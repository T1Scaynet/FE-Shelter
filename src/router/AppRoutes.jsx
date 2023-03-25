import { Route, Routes } from 'react-router-dom';
import { DetailScreen } from '../views/DetailScreen';
import { CreatePetScreen } from '../views/CreatePetScreen';
import { Home } from '../views/Home';
import { PetsList } from '../views/PetsList';
import { Error404 } from '../views/Error404';
import { DonationsScreen } from '../views/DonationsScreen';
import { CartScreen } from '../views/CartScreen';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/listado" element={<PetsList />} />
      <Route path="/creacion-de-mascota" element={<CreatePetScreen />} />
      <Route path="/detalles/:id" element={<DetailScreen />} />
      <Route path="/donaciones" element={<DonationsScreen />} />
      <Route path="/carrito" element={<CartScreen />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
}
