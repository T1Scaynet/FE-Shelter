import { useDispatch, useSelector } from 'react-redux';
import Breadcrumb from '../../components/Breadcrumb';
import DefaultLayout from '../../layout/DefaultLayout';
import { RowTitles } from '../../components/RowTitles';
import { Row } from '../../components/Row';
import { Pagination } from '../../../../components/Pagination';
import { titlesPet } from '../../constants/titlePet';
import { getAllPets, setFilters } from '../../../../state/features/pets/petSlice';
import { Filters } from '../../components/Filters';
import { filtersValues } from '../../constants/filtersValues';
import { useEffect } from 'react';

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

  const handleFilter = (e, type) => {
    if (!e) {
      dispatch(setFilters(INITIAL_STATE));
      dispatch(getAllPets(INITIAL_STATE));
      return;
    }
    console.log('type', type);
    const newValue = filters[type] === e.target.value ? '' : e.target.value;
    console.log('newValue', newValue);
    dispatch(setFilters({
      ...filters,
      [type]: newValue, // genre: macho
      currentPage: 1
    }));
    dispatch(getAllPets({
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
    dispatch(getAllPets({
      ...filters,
      currentPage: pageNumber
    }));
  };

  useEffect(() => {
    dispatch(getAllPets(filters));
    window.scrollTo(0, 0);
  }, [dispatch]);

  return (
    <DefaultLayout>
      <Breadcrumb pageName='Lista de Mascotas' />
      <Filters filtersValues={filtersValues} handleFilter={handleFilter} filters={filters} />
      <RowTitles titles={titlesPet} />
      <Row info={pets.list} />
      <Pagination
        isDashboard
        currentPage={pagination.currentPage}
        totalPages={pagination.totalPages}
        onPageChange={handlePageChange}
      />
    </DefaultLayout>
  );
};
