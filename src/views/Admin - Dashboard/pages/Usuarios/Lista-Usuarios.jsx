import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsers } from '../../../../state/features/users/userSlice';
import DefaultLayout from '../../layout/DefaultLayout';
import Breadcrumb from '../../components/Breadcrumb';
import { RowTitles } from '../../components/RowTitles';
import { RowUsers } from '../../components/RowUsers';
import { Pagination } from '../../../../components/Pagination';
import { titlesUsers } from '../../constants/titleUsers';
import { Filters } from '../../components/Filters';
import { filtersUser } from '../../constants/filtersUser';

const INITIAL_STATE = {
  active: '',
  roles: '',
  sort: '',
  totalPages: 1,
  currentPage: 1,
  search: ''
};

export const ListaUsuarios = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  const filters = useSelector((state) => state.users.filters);
  const pagination = useSelector((state) => state.users.pagination);

  const handleFilter = (e, type) => {
    if (!e) {
      dispatch(getAllUsers(INITIAL_STATE));
      return;
    }
    const newValue = filters[type] === e.target.value ? '' : e.target.value;
    dispatch(getAllUsers({
      ...filters,
      [type]: newValue,
      currentPage: 1
    }));
  };

  const handlePageChange = (pageNumber) => {
    console.log({ pageNumber });
    dispatch(getAllUsers({
      ...filters,
      currentPage: pageNumber
    }));
  };

  useEffect(() => {
    dispatch(getAllUsers(filters));
  }, [dispatch]);

  return (
    <DefaultLayout>
      <Breadcrumb pageName='Lista de Usuarios' />
      <Filters filtersValues={filtersUser} handleFilter={handleFilter} filters={filters} />
      <RowTitles titles={titlesUsers} />
      <RowUsers info={users.list} />
      <Pagination
        isDashboard
        currentPage={pagination.currentPage}
        totalPages={pagination.totalPages}
        onPageChange={handlePageChange}
      />
    </DefaultLayout>
  );
};
