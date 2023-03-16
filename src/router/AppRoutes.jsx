import { Route, Routes } from 'react-router-dom';
import { Home } from '../views/Home';
import { Prueba } from '../views/Prueba';

export function AppRoutes () {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/prueba' element={<Prueba />} />
    </Routes>
  );
}
