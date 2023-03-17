import { Route, Routes } from 'react-router-dom';
import { Home } from '../views/Home';
import { PetsList } from '../views/PetsList';

export function AppRoutes () {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/completeList' element={<PetsList />} />
    </Routes>
  );
};
