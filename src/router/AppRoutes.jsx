import { Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Home } from '../views/Home';
import { PetsList } from '../views/PetsList';
import { DetailScreen } from '../views/DetailScreen';
import Error404 from '../views/Error404';
import { CreatePetScreen } from '../views/CreatePetScreen';
import { Contact } from '../views/Contact';

export function AppRoutes () {
  const user = useSelector(state => state.users);
  // const isAuth = user.user.token;
  const isAdmin = user?.isAdmin;
  const routes = [
    {
      path: '/',
      component: Home,
      public: true
    },
    {
      path: '/contacto',
      component: Contact,
      public: true
    },
    {
      path: '/listado',
      component: PetsList,
      // public: !isAuth
      public: true
    },
    {
      path: '/detalles/:id',
      component: DetailScreen,
      public: true
    },
    {
      path: '/creacion-de-mascota',
      component: CreatePetScreen,
      public: isAdmin
    }
  ];

  return (
    <Routes>
      {
        routes.map(r => (
          r.public &&
            <Route key={r.path} path={r.path} element={<r.component />} />
        ))
      }
      <Route path='*' element={<Error404 />} />
    </Routes>
  );
};
