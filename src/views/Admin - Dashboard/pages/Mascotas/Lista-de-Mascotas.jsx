import { useDispatch, useSelector } from 'react-redux';
import Breadcrumb from '../../components/Breadcrumb';
import DefaultLayout from '../../layout/DefaultLayout';
import { RowTitles } from '../../components/RowTitles';
import { Row } from '../../components/Row';
import { Pagination } from '../../../../components/Pagination';
import { titlesPet } from '../../constants/titlePet';
import { getAllPetsAdmin, setFilters, deletePet } from '../../../../state/features/pets/petSlice';
import { Filters } from '../../components/Filters';
import { filtersValues } from '../../constants/filtersValues';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';
import { Modal } from '../../components/Modal';
import { Search } from '../../../../components/Search';
import { Result } from '../../components/Result';

const INITIAL_STATE = {
  size: '',
  type: '',
  genre: '',
  sort: '',
  state: '',
  totalPages: 1,
  currentPage: 1
};

export const ListadeMascotas = () => {
  const dispatch = useDispatch();
  const pets = useSelector((state) => state.pets);
  const filters = useSelector((state) => state.pets.filters);
  const pagination = useSelector(state => state.pets.pagination);
  const [modal, setModal] = useState(false);
  const [dataEdit, setDataEdit] = useState({});

  const handleFilter = (e, type) => {
    if (!e) {
      dispatch(setFilters(INITIAL_STATE));
      dispatch(getAllPetsAdmin(INITIAL_STATE));
      return;
    }
    const newValue = filters[type] === e.target.value ? '' : e.target.value;
    dispatch(setFilters({
      ...filters,
      [type]: newValue,
      currentPage: 1
    }));
    dispatch(getAllPetsAdmin({
      ...filters,
      [type]: newValue,
      currentPage: 1
    }));
  };

  const handlePageChange = (pageNumber) => {
    dispatch(setFilters({
      ...filters,
      currentPage: pageNumber
    }));
    dispatch(getAllPetsAdmin({
      ...filters,
      currentPage: pageNumber
    }));
  };

  const handleDelete = (id) => {
    dispatch(deletePet(id));
    toast.success('Mascota eliminada correctamente');
  };

  const handleEdit = (data) => {
    setDataEdit(data);
    setModal(true);
  };

  useEffect(() => {
    dispatch(getAllPetsAdmin(filters));
    window.scrollTo(0, 0);
  }, [dispatch]);

  return (
    <DefaultLayout>
      <Breadcrumb pageName='Lista de Mascotas' />
      <div>
        <Search />
        <Result filters={filters} handleFilter={handleFilter} />
      </div>
      <Filters filtersValues={filtersValues} handleFilter={handleFilter} filters={filters} />
      <RowTitles titles={titlesPet} />
      <Row info={pets.list} handleDelete={handleDelete} handleEdit={handleEdit} />
      <Modal data={dataEdit} setModal={setModal} modal={modal} />
      <Pagination
        isDashboard
        currentPage={pagination.currentPage}
        totalPages={pagination.totalPages}
        onPageChange={handlePageChange}
      />
    </DefaultLayout>
  );
};
