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
import Calendar from '../views/Admin - Dashboard/pages/Calendar';
import Analytics from '../views/Admin - Dashboard/pages/Dashboard/Analytics';
import { ProfileUser } from '../views/Admin - Dashboard/pages/Profile';
import { ListadeMascotas } from '../views/Admin - Dashboard/pages/Mascotas/Lista-de-Mascotas';
import { AgregarMascota } from '../views/Admin - Dashboard/pages/Mascotas/Agregar-Mascota';
import { ListaUsuarios } from '../views/Admin - Dashboard/pages/Usuarios/Lista-Usuarios';
import { AgregarUsuario } from '../views/Admin - Dashboard/pages/Usuarios/Agregar-Usuario';
import { DonacionesPagos } from '../views/Admin - Dashboard/pages/Donaciones/Donaciones';
import { Adopciones } from '../views/Admin - Dashboard/pages/Adopciones/Adopciones';
import Settings from '../views/Admin - Dashboard/pages/Settings';

export function AppRoutes ({ setShowLayout }) {
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
    },
    {
      path: '/ingresar',
      component: LoginPage,
      public: true
    },
    {
      path: '/registro',
      component: RegisterUser,
      public: true
    },
    {
      path: '/dashboard-admin',
      component: Analytics,
      public: true
    },
    {
      path: '/dashboard-admin/calendar',
      component: Calendar,
      public: true
    },
    {
      path: '/dashboard-admin/Profile',
      component: ProfileUser,
      public: true
    },
    {
      path: '/dashboard-admin/mascotas/lista-mascotas',
      component: ListadeMascotas,
      public: true
    },
    {
      path: '/dashboard-admin/mascotas/agregar-mascota',
      component: AgregarMascota,
      public: true
    },
    {
      path: '/dashboard-admin/usuarios/lista-usuarios',
      component: ListaUsuarios,
      public: true
    },
    {
      path: '/dashboard-admin/usuarios/agregar-usuarios',
      component: AgregarUsuario,
      public: true
    },
    {
      path: '/dashboard-admin/donaciones/pagos',
      component: DonacionesPagos,
      public: true
    },
    {
      path: '/dashboard-admin/adopciones/lista-adopciones',
      component: Adopciones,
      public: true
    },
    {
      path: '/dashboard-admin/settings',
      component: Settings,
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
      <Route path='*' element={<Error404 setShowLayout={setShowLayout} />} />
    </Routes>
  );
}
