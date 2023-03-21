import { Route, Routes } from 'react-router-dom';
import { DetailScreen } from '../views/DetailScreen';
import { CreatePetScreen } from '../views/CreatePetScreen';
import { Home } from '../views/Home';
import { PetsList } from '../views/PetsList';
import { Error404 } from '../views/Error404';

export function AppRoutes () {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/listado' element={<PetsList />} />
      <Route path='/creacion-de-mascota' element={<CreatePetScreen />} />
      <Route path='/detalles/:id' element={<DetailScreen />} />
      <Route path='*' element={<Error404 />} />
    </Routes>
  );
}
