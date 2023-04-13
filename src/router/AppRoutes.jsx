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
import { profileUpdate } from '../components/Login/Profile/profile-update';
import { passwordUpdate } from '../components/Login/Profile/password-update';
import { profileComment } from '../components/Login/Profile/profile-comment';

export function AppRoutes ({ setShowLayout }) {
  const user = useSelector((state) => state.login?.user);
  const isAuth = user?.user?.token;
  console.log({ isAuth });
  const isAdmin = user?.roles?.[0]?.name !== 'client';
  console.log({ isAdmin });
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
      public: true
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
      public: isAdmin || isAuth
    },
    {
      path: '/registro',
      component: RegisterUser,
      public: isAdmin || isAuth
    },
    {
      path: '/dashboard-admin',
      component: Analytics,
      public: isAdmin
    },
    {
      path: '/dashboard-admin/calendar',
      component: Calendar,
      public: isAdmin
    },
    {
      path: '/dashboard-admin/Profile',
      component: ProfileUser,
      public: isAdmin
    },
    {
      path: '/dashboard-admin/mascotas/lista-mascotas',
      component: ListadeMascotas,
      public: isAdmin
    },
    {
      path: '/dashboard-admin/mascotas/agregar-mascota',
      component: AgregarMascota,
      public: isAdmin
    },
    {
      path: '/dashboard-admin/usuarios/lista-usuarios',
      component: ListaUsuarios,
      public: isAdmin
    },
    {
      path: '/dashboard-admin/usuarios/agregar-usuarios',
      component: AgregarUsuario,
      public: isAdmin
    },
    {
      path: '/dashboard-admin/donaciones/pagos',
      component: DonacionesPagos,
      public: isAdmin
    },
    {
      path: '/dashboard-admin/adopciones/lista-adopciones',
      component: Adopciones,
      public: isAdmin
    },
    {
      path: '/dashboard-admin/settings',
      component: Settings,
      public: isAdmin
    },
    {
      path: '/perfil/actualizar',
      component: profileUpdate,
      public: true
    },
    {
      path: '/perfil/actualizar-contraseña',
      component: passwordUpdate,
      public: true
    },
    {
      path: '/perfil/comentario',
      component: profileComment,
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
