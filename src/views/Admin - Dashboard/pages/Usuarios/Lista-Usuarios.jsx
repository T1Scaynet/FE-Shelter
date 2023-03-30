import Breadcrumb from '../../components/Breadcrumb';
import DefaultLayout from '../../layout/DefaultLayout';

export const ListaUsuarios = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName='Lista de Usuarios' />
      <div>Lista Usuarios</div>
    </DefaultLayout>
  );
};
