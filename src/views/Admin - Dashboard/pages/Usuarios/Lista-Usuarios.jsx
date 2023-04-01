import Breadcrumb from '../../components/Breadcrumb';
import DefaultLayout from '../../layout/DefaultLayout';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsers } from '../../../../state/features/users/userSlice';

export const ListaUsuarios = () => {
  const users = useSelector((state) => state.users);
  console.log(users.list);
  const dispatch = useDispatch();
  const allUsers = users.allUsers;
  console.log('Este es el console.log que no trae una mierda', allUsers);

  useEffect(() => {
    dispatch(getAllUsers());
  }, []);

  return (
    <DefaultLayout>
      <Breadcrumb pageName='Lista de Usuarios' />
      <div>Aca voy a agregar los usuarios</div>
    </DefaultLayout>
  );
};

// const handleGetAllUsers = async () => {
//   const response = await getAllUsers({}); // Llama a la función getAllUsers
//   if (response && response.data && response.data.users) { // Comprueba si la propiedad users existe en la respuesta
//     console.log(response.data.users); // Imprime la lista de usuarios en la consola
//   } else {
//     console.log('La respuesta no contiene una lista de usuarios.');
//   }
// };

// handleGetAllUsers().catch(error => {
//   console.error(error);
// });
