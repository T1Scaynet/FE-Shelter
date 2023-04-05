import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPets, setFilters } from '../../state/features/pets/petSlice';
import dog from '../../assets/PetsList/Dog.png';
import linea from '../../assets/PetsList/Shape.svg';
import { Cards } from '../../components/Cards';
import { Link } from 'react-router-dom';
import { Pagination } from '../../components/Pagination';
import { CheckBox } from './CheckBox';
import { Search } from '../../components/Search';
import { ButtonResetFilters } from '../../components/ButtonResetFilters';
import { Menu } from '../../components/Menu';
import Loader from '../../utils/Loader';

const INITIAL_STATE = {
  size: '',
  type: '',
  genre: '',
  sort: '',
  totalPages: 1,
  currentPage: 1
};

export const PetsList = () => {
  const filters = useSelector(state => state.pets.filters);
  const pets = useSelector((state) => state.pets);
  const dispatch = useDispatch();
  const pagination = useSelector(state => state.pets.pagination);

  const handleFilter = (e, type) => {
    if (!e) {
      dispatch(setFilters(INITIAL_STATE));
      dispatch(getAllPets(INITIAL_STATE));
      return;
    }
    console.log('event', e.target.value);
    console.log('type', type);
    const newValue = filters[type] === e.target.value ? '' : e.target.value;
    console.log({ newValue });
    dispatch(setFilters({
      ...filters,
      [type]: newValue,
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
    <div className='w-full h-full'>
      <div className='grid justify-center m-2'>
        {
          filters.search && <p>{`Mostrando resultados de ${filters.search}`}</p>
        }
      </div>
      <span className='flex justify-start items-center space-x-2 h-[4.875rem] w-full bg-[#FBF9FF]'>
        <Link
          to='/'
          className='font-bold ml-[12.813rem] text-[#7C58D3] text-[0.9rem]'
        >
          Inicio
        </Link>
        <div className=' rounded-[50%] bg-[#FF47A2] h-[0.4rem] w-[0.4rem]' />
        <Link
          to='/listado'
          className='font-bold ml-[12.813rem] text-[#7C58D3] text-[0.9rem]'
        >
          Listado
        </Link>
      </span>
      <section className='bg-[#FBF9FF] w-full h-[25.8rem] relative overflow-hidden'>
        <div className='w-[80%] h-[90%] m-auto flex flex-col md:flex-row'>
          <div className='flex flex-col justify-evenly'>
            <div className='w-full md:w-[48%] space-y-5 md:space-y-3'>
              <h1 className='text-5xl md:text-7xl font-bold'>Mascotas</h1>
              <p>
                Adoptar puede cambiar la vida de un animal necesitado y
                brindarte una compañía incondicional y amorosa.
              </p>
            </div>
          </div>
          <Menu />
          <div className='mt-7'>
            <img src={dog} alt='imagen de un perro' />
          </div>
        </div>

        <img
          src={linea}
          alt='imagen de la linea divisoria'
          className='absolute bottom-0'
        />
      </section>
      {!pets
        ? (
          <div className='flex justify-center'>
            <Loader />
          </div>
          )
        : (
          <section className='mt-12 h-full w-[90%] 2xl:w-[80%] m-auto'>
            <Search />
            <div>
              <div className='md:flex md:justify-between'>
                <Cards pets={pets} />
                <div className='w-[97%] bg-[#EBE5F7] pl-3 md:p-0 md:bg-transparent m-auto md:m-0 md:w-[15%] md:h-[30rem] border-[1px] border-[#EBE5F7] rounded-md flex flex-col items-center justify-center sticky md:top-8 space-y-4'>
                  <h1 className='text-xl font-bold mb-[-1.5rem] md:mb-[-0.5rem]'>Filtros</h1>
                  <div className='w-full grid grid-cols-4 gap-2 md:gap-0 space-y-4 md:flex md:flex-col items-center'>

                    <CheckBox title='Ordenar' param='sort' optionOne='A - Z' optionTwo='Z - A' handleFilter={handleFilter} filters={filters} />
                    <CheckBox title='Géneros' param='genre' optionOne='Hembra' optionTwo='Macho' handleFilter={handleFilter} filters={filters} />
                    <CheckBox title='Tamaños' param='size' optionOne='Grande' optionTwo='Mediano' optionThree='Chico' handleFilter={handleFilter} filters={filters} />
                    <CheckBox title='Tipos' param='type' optionOne='Gato' optionTwo='Perro' handleFilter={handleFilter} filters={filters} />
                  </div>

                  <ButtonResetFilters handleFilter={handleFilter} />
                </div>

              </div>

            </div>
            <div>
              <Pagination
                currentPage={pagination.currentPage}
                totalPages={pagination.totalPages}
                onPageChange={handlePageChange}
              />
            </div>
          </section>
          )}
    </div>
  );
};
