import { Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Home } from '../views/Home';
import { PetsList } from '../views/PetsList';
import { Error404 } from '../views/Error404';
import LoginPage from '../components/Login/index';
import RegisterUser from '../components/Login/LoginRegister/index';
import Profile from '../components/Login/Profile';
import { DetailScreen } from '../views/DetailScreen';
import { CreatePetScreen } from '../views/CreatePetScreen';
import { Contact } from '../views/Contact';
import { AdoptionForm } from '../views/AdoptionForm';
import { CartScreen } from '../views/CartScreen';
import { DonationsScreen } from '../views/DonationsScreen';

export function AppRoutes () {
  const token = useSelector((state) => state.login?.token);
  // const isAuth = user.user.token;
  const isAdmin = token;
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
      public: true
    },
    {
      path: '/adopta-una-mascota',
      component: AdoptionForm,
      public: true
    },
    {
      path: '/perfil',
      component: Profile,
      public: isAdmin
    },
    {
      path: '/carrito',
      component: CartScreen,
      public: true
    },
    {
      path: '/donaciones',
      component: DonationsScreen,
      public: true
    }
  ];

  return (
    <Routes>
      {routes.map(
        (r) =>
          r.public && (
            <Route key={r.path} path={r.path} element={<r.component />} />
          )
      )}
      <Route path='*' element={<Error404 />} />
      <Route path='/ingresar' element={<LoginPage />} />
      <Route path='/registro' element={<RegisterUser />} />
    </Routes>
  );
}
