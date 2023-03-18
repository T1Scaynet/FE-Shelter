import { Route, Routes } from 'react-router-dom';
import { CreatePetScreen } from '../views/CreatePetScreen';
import { Home } from '../views/Home';
import { PetsList } from '../views/PetsList';
import { Error404 } from '../views/Error404';

export function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/completeList' element={<PetsList />} />
      <Route path='/*' element={<Error404 />} />
      <Route path="/createPet" element={<CreatePetScreen />} />
    </Routes>
  );
}
