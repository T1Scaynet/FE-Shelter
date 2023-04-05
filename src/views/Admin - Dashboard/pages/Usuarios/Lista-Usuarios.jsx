import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsers } from '../../../../state/features/users/userSlice';
import DefaultLayout from '../../layout/DefaultLayout';
import Breadcrumb from '../../components/Breadcrumb';
import { RowTitles } from '../../components/RowTitles';
import css from '../../../Admin - Dashboard/pages/Usuarios/Listado.module.css';
import { RowUsers } from '../../components/RowUsers';
import Paginate from './Paginate';
import { Select, Input } from 'antd';

const { Option } = Select;

export const ListaUsuarios = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.list);
  const [sortedUsers, setSortedUsers] = useState(users);
  const [selectedRole, setSelectedRole] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');

  const titlesUsers = ['ID', 'NOMBRE', 'ROL', 'EMAIL', 'TELEFONO','CREADO', 'ACCIÓN'];

  const handleRoleChange = (value) => {
    setSelectedRole(value);
    setCurrentPage(1);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  const filteredUsers = selectedRole === 'all' ? users : users.filter(user => user.roles[0].name === selectedRole);

  const filteredUsersBySearch = filteredUsers.filter(user => {
    const searchLowerCase = searchQuery.toLowerCase();
    return (
      user.name.toLowerCase().includes(searchLowerCase) ||
      user.email.toLowerCase().includes(searchLowerCase)
    )
  });

  const itemsPerPage = 5; // Cambia esto al número de elementos que quieres mostrar por página
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredUsersBySearch.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumbers) => {
    setCurrentPage(pageNumbers);
  };

  useEffect(() => {
    dispatch(getAllUsers());
  }, []);



  return (
    <DefaultLayout>
      <Breadcrumb pageName="Lista de Usuarios" />
      <div className={css.filterRol}>
        <span className={css.filterSpan}>Filtrar por rol:</span>
        <Select defaultValue="all" className={css.select} onChange={handleRoleChange}>
          <Option value="all">Todos</Option>
          <Option value="admin">Admin</Option>
          <Option value="client">Cliente</Option>
          <Option value="moderator">Moderador</Option>
        </Select>
      </div>
      <div className={css.filterRol}>
        <Input
          placeholder="Buscar por nombre o correo electrónico"
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>
      <RowTitles titles={titlesUsers} />
      <RowUsers info={currentItems}/>
      <div>
        <Paginate
          paginate={paginate}
          totalItems={filteredUsersBySearch.length}

          itemsPerPage={itemsPerPage}
        />
      </div>
    </DefaultLayout>
  );
};
