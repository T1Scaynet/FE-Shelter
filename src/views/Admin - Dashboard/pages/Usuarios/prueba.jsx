// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { getAllUsers } from '../../../../state/features/users/userSlice';
// import DefaultLayout from '../../layout/DefaultLayout';
// // import Breadcrumb from '../../components/Breadcrumb';
// import css from '../../../Admin - Dashboard/pages/Usuarios/Listado.module.css';

// export const ListaUsuarios = () => {
//   const dispatch = useDispatch();
//   const users = useSelector((state) => state.users.list);
//   console.log('Esto es lo que recibo de users', users);
//   // const allUsers = users.allUsers;

//   /// ////////////////////PAGINADO//////////////////////////////////
//   // const [currentPage, setCurrentPage] = useState(1);
//   // const [itemsPerPage, setItemsPerPage] = useState(5);
//   // const [sortOrder, setSortOrder] = useState('asc');
//   // const [searchTerm, setSearchTerm] = useState('');

//   // const sortUsers = (users) => {
//   //   return users.sort((a, b) => {
//   //     if (sortOrder === 'asc') {
//   //       return a.name.localeCompare(b.name);
//   //     } else {
//   //       return b.name.localeCompare(a.name);
//   //     }
//   //   });
//   // };
//   // const getUsersForPage = () => {
//   //   const sortedUsers = sortUsers(allUsers);
//   //   const startIndex = (currentPage - 1) * itemsPerPage;
//   //   const endIndex = startIndex + itemsPerPage;
//   //   const filteredUsers = sortedUsers.filter((user) =>
//   //     user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//   //     user.roles.join(', ').toLowerCase().includes(searchTerm.toLowerCase()) ||
//   //     user.email.toLowerCase().includes(searchTerm.toLowerCase())
//   //   );
//   //   return filteredUsers.slice(startIndex, endIndex);
//   // };

//   // const totalPages = Math.ceil(allUsers?.length / itemsPerPage);

//   // const handlePageChange = (newPage) => {
//   //   setCurrentPage(newPage);
//   // };
//   // const handleSearchChange = (event) => {
//   //   setSearchTerm(event.target.value);
//   // };

//   useEffect(() => {
//     dispatch(getAllUsers());
//   }, []);

//   return (
//     <DefaultLayout>
//       <div>
//         {users.map(user => {
//           return (
//             <div key={user._id}>
//               <span>{user._id}</span>
//               <span>{user.name}</span>
//             </div>
//           );
//         })}
//       </div>
//       {/* <div className={css.searchbar}>
//         <input
//           type='text'
//           value={searchTerm}
//           onChange={handleSearchChange}
//           placeholder='Buscar por nombre, rol o email'
//         />
//       </div>
//       <div className='flex justify-between items-center'>
//         <h1 className='text-2xl font-bold text-gray-800'>Lista de Usuarios</h1>
//       </div>

//       <div className={css.tableContainer}>
//         <table className={css.table}>
//           <thead className={css.thead}>
//             <tr className={css.th}>
//               <th>ID</th>
//               <th>
//                 <button
//                   className={css.sortButton}
//                   onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
//                 >
//                   Nombre
//                   {sortOrder === 'asc' ? ' ▲' : ' ▼'}
//                 </button>
//               </th>

//               <th>Rol</th>
//               <th>Email</th>
//               <th>Teléfono</th>
//               <th>Estado</th>
//               <th>Fecha de creación</th>
//               <th>Acciones</th>
//             </tr>
//           </thead>
//           <tbody>
//             {getUsersForPage().map((user) => (
//               <tr className={css.td} key={user._id}>
//                 <td>{user._id}</td>
//                 <td>{user.name}</td>
//                 <td>{user.roles.join(', ')}</td>
//                 <td>{user.email}</td>
//                 <td>{user.phone}</td>
//                 <td>{user.status}</td>
//                 <td>{user.created}</td>
//                 <td>
//                   <button className={`${css.button} ${css.editButton}`}>Editar</button>
//                   <button className={`${css.button} ${css.deleteButton}`}>Eliminar</button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       <div className={css.pagination}>
//         <button
//           onClick={() => handlePageChange(currentPage - 1)}
//           disabled={currentPage === 1}

//         >
//           {'<'}
//         </button>
//         {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
//           <button
//             key={page}
//             onClick={() => handlePageChange(page)}
//             className={currentPage === page ? 'active' : ''}
//           >
//             {page}
//           </button>
//         ))}
//         <button
//           onClick={() => handlePageChange(currentPage + 1)}
//           disabled={currentPage === totalPages}
//         >
//           {'>'}
//         </button>
//       </div> */}

//     </DefaultLayout>
//   );
// };







      {/* <div>
        {users.map(user => {
          return (
            <div key={user._id}>
              <span>{user._id}</span>
              <span>{user.name}</span>
            </div>
          );
        })}
      </div> */}
