import { Route, Routes } from 'react-router-dom';
import { DetailScreen } from '../views/DetailScreen';
import { Home } from '../views/Home';
import { PetsList } from '../views/PetsList';

export function AppRoutes () {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/completeList' element={<PetsList />} />
      <Route path='/detalles/:id' element={<DetailScreen />} />
    </Routes>
  );
};
