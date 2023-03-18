import { Route, Routes } from 'react-router-dom';
import { Home } from '../views/Home';
import { PetsList } from '../views/PetsList';
import { Error404 } from '../views/Error404';

export function AppRoutes () {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/completeList' element={<PetsList />} />
      <Route path='/error' element={<Error404 />} />
    </Routes>
  );
};
