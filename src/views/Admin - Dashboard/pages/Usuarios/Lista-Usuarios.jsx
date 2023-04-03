import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsers } from '../../../../state/features/users/userSlice';
import DefaultLayout from '../../layout/DefaultLayout';
import Breadcrumb from '../../components/Breadcrumb';
import { titlesUsers } from '../../constants/titleUsers';
import { RowTitles } from '../../components/RowTitles';
import css from '../../../Admin - Dashboard/pages/Usuarios/Listado.module.css';
import { RowUsers } from '../../components/RowUsers';
import Pagination from './Paginate';

export const ListaUsuarios = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.list);
  console.log("aca vienen los usuarios",users)
  const [sortedUsers, setSortedUsers] = useState(users);
  const [sortOrder, setSortOrder] = useState('ascendente');
  const [searchTerm, setSearchTerm] = useState('');

  /////////////////////////////////////////////////////////////
  const [currentPage, setCurrentPage] = useState(1);
const itemsPerPage = 5; // Cambia esto al número de elementos que quieres mostrar por página
const indexOfLastItem = currentPage * itemsPerPage;
const indexOfFirstItem = indexOfLastItem - itemsPerPage;
const currentItems = sortedUsers.slice(indexOfFirstItem, indexOfLastItem);
console.log("aca esta el fucking paginado",currentItems)

const paginate = (pageNumber) => {
  setCurrentPage(pageNumber);
};

  useEffect(() => {
    dispatch(getAllUsers());
  }, []);

  useEffect(() => {
    const filteredUsers = users.filter((user) => {
      const lowerCaseSearchTerm = searchTerm.toLowerCase();
      const name = user.name ? user.name.toLowerCase() : '';
      const role = user.roles[0] ? user.roles[0].toLowerCase() : '';
      const email = user.email ? user.email.toLowerCase() : '';

      return (
        name.includes(lowerCaseSearchTerm) ||
        role.includes(lowerCaseSearchTerm) ||
        email.includes(lowerCaseSearchTerm)
      );
    });

    setSortedUsers(filteredUsers);
  }, [searchTerm, users]);



  const handleSortByName = () => {
    const sorted = [...sortedUsers].sort((a, b) => {
      const nameA = a.name ? a.name.toLowerCase() : '';
      const nameB = b.name ? b.name.toLowerCase() : '';

      if (nameA < nameB) {
        return sortOrder === 'ascendente' ? -1 : 1;
      }
      if (nameA > nameB) {
        return sortOrder === 'ascendente' ? 1 : -1;
      }
      return 0;
    });
    setSortedUsers(sorted);
    setSortOrder(sortOrder === 'ascendente' ? 'descendente' : 'ascendente');
  };


  const handleSearchInputChange = (event) => {
    setSearchTerm(event.target.value);
  };



  return (
    <DefaultLayout>

            <div>
              <input
                  type="text"
                  placeholder="Buscar por nombre, rol o email"
                  value={searchTerm}
                  onChange={handleSearchInputChange}
                />
            </div>
      <Breadcrumb pageName="Lista de Usuarios" />
      <div>
        <button className={css.buttonOrder} onClick={handleSortByName}>
          Ordenar
        </button>
      </div>

      <RowTitles titles={titlesUsers} />
      <RowUsers info={currentItems} />

      <Pagination
            itemsPerPage={itemsPerPage}
            totalItems={sortedUsers.length}
            paginate={paginate}
          />
    </DefaultLayout>
  );
};
