import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPets, setFilters } from '../../state/features/pets/petSlice';
import dog from '../../assets/PetsList/Dog.png';
import linea from '../../assets/PetsList/Shape.svg';
import { Cards } from '../../components/Cards';
import { Link } from 'react-router-dom';
import { Pagination } from '../../components/Pagination';
import { CheckBox } from './CheckBox';
import { Search } from '../../components/Search';
import { Collapse } from '@mui/material';

const INITIAL_STATE = {
  size: '',
  type: '',
  genre: '',
  sort: '',
  totalPages: 1,
  currentPage: 1
};

export const PetsList = () => {
  const filters = useSelector((state) => state.pets.filters);
  const pets = useSelector((state) => state.pets);
  const dispatch = useDispatch();
  const pagination = useSelector((state) => state.pets.pagination);
  const [showFilter, setShowFilter] = useState(false);

  const toggleShowFilter = () => {
    setShowFilter(!showFilter);
  };

  const handleFilter = (e, type) => {
    if (!e) {
      dispatch(setFilters(INITIAL_STATE));
      dispatch(getAllPets(INITIAL_STATE));
      return;
    }
    const newValue = filters[type] === e.target.value ? '' : e.target.value;
    dispatch(
      setFilters({
        ...filters,
        [type]: newValue,
        currentPage: 1
      })
    );
    dispatch(
      getAllPets({
        ...filters,
        [type]: newValue,
        currentPage: 1
      })
    );
  };

  const handlePageChange = (pageNumber) => {
    dispatch(
      setFilters({
        ...filters,
        currentPage: pageNumber
      })
    );
    dispatch(
      getAllPets({
        ...filters,
        currentPage: pageNumber
      })
    );
  };

  useEffect(() => {
    dispatch(getAllPets(filters));
    // window.scrollTo(0, 0);
    function handleResize () {
      const width = window.innerWidth;
      if (width <= 768) {
        setShowFilter(false);
      }
    }
    window.addEventListener('resize', handleResize); // Agregamos un escuchador de eventos resize
    handleResize(); // establecer el estado inicial según el tamaño actual de la pantalla
    return () => {
      window.removeEventListener('resize', handleResize); // Removemos el escuchador de eventos resize
    };
  }, [dispatch]);

  return (
    <div className='h-full w-full'>
      <div className='m-2 grid justify-center'>
        {filters.search && <p>{`Mostrando resultados de ${filters.search}`}</p>}
      </div>
      <span className='flex h-[4.875rem] w-full items-center justify-start space-x-2 bg-[#FBF9FF]'>
        <Link
          to='/'
          className='ml-[2.5rem] text-[0.77rem] font-bold text-[#7C58D3] md:ml-[12.813rem] md:text-[0.9rem]'
        >
          Inicio
        </Link>
        <div className='h-[0.4rem] w-[0.4rem] rounded-[50%] bg-[#FF47A2]' />
        <Link
          to='#'
          className='text-[0.77rem] font-bold text-[#7C58D3] md:text-[0.9rem]'
        >
          Listado
        </Link>
      </span>
      <section className='relative w-full overflow-hidden bg-[#FBF9FF] md:h-[25.8rem]'>
        <div className='m-auto flex h-[11rem] w-[79%] md:h-[90%]'>
          <div className='flex flex-col justify-evenly'>
            <div className='md:w-[35rem]'>
              <h1 className='mb-[2.02rem] text-[2.5rem] font-extrabold md:text-7xl'>
                Mascotas
              </h1>
              <p className='text-[0.875rem] md:text-[1rem]'>
                Adoptar puede cambiar la vida de un animal necesitado y
                brindarte una compañía incondicional y amorosa.
              </p>
            </div>
          </div>

          <div className='mt-7 hidden md:block'>
            <img src={dog} alt='imagen de un perro' />
          </div>
        </div>

        <img
          src={linea}
          alt='imagen de la linea divisoria'
          className='absolute bottom-0'
        />
      </section>
      <section className='mt-12 h-full w-[100%] 2xl:w-[90%]'>
        <div>
          <div className='flex flex-col-reverse items-center justify-center md:w-full md:flex-row-reverse md:items-start md:justify-around md:gap-10'>
            <div className='items-center md:flex md:flex-col'>
              <div className='flex flex-row items-center justify-between md:block'>
                <Search />
                <button
                  className='h-[2rem] w-[5rem] rounded-md bg-[#7C58D3] text-[0.875rem] font-bold text-white md:hidden flex items-center justify-center'
                  onClick={toggleShowFilter}
                >
                  Filtros
                </button>
              </div>
              <Collapse in={showFilter}>
                <h1 className='text-xl font-bold'>Filtros</h1>
                <div className='flex flex-row'>
                  <CheckBox
                    title='Ordenar'
                    param='sort'
                    optionOne='A - Z'
                    optionTwo='Z - A'
                    handleFilter={handleFilter}
                    filters={filters}
                  />
                  <CheckBox
                    title='Géneros'
                    param='genre'
                    optionOne='Hembra'
                    optionTwo='Macho'
                    handleFilter={handleFilter}
                    filters={filters}
                  />
                </div>
                <div className='flex flex-row'>
                  <CheckBox
                    title='Tamaños'
                    param='size'
                    optionOne='Grande'
                    optionTwo='Mediano'
                    optionThree='Chico'
                    handleFilter={handleFilter}
                    filters={filters}
                  />
                  <CheckBox
                    title='Tipos'
                    param='type'
                    optionOne='Gato'
                    optionTwo='Perro'
                    handleFilter={handleFilter}
                    filters={filters}
                  />
                </div>
                <div className='flex w-full justify-center mb-9'>
                  <button
                    onClick={() => handleFilter()}
                    className='h-8 w-32 rounded-md bg-[#7C58D3] text-[14px] font-bold text-[white] md:hover:bg-[#FFDA47] md:hover:text-[#0E081E]'
                  >
                    Limpiar filtros
                  </button>
                </div>
              </Collapse>
              <Cards pets={pets} />
              <div>
                <Pagination
                  currentPage={pagination.currentPage}
                  totalPages={pagination.totalPages}
                  onPageChange={handlePageChange}
                />
              </div>
            </div>
            <div className='sticky top-8 mb-[9.1rem] mt-[5rem] hidden h-[30rem] w-[15%] flex-col items-center space-y-4 rounded-md border-[1px] border-[#EBE5F7] py-2 md:flex'>
              <h1 className='text-xl font-bold'>Filtros</h1>

              <CheckBox
                title='Ordenar'
                param='sort'
                optionOne='A - Z'
                optionTwo='Z - A'
                handleFilter={handleFilter}
                filters={filters}
              />
              <CheckBox
                title='Géneros'
                param='genre'
                optionOne='Hembra'
                optionTwo='Macho'
                handleFilter={handleFilter}
                filters={filters}
              />
              <CheckBox
                title='Tamaños'
                param='size'
                optionOne='Grande'
                optionTwo='Mediano'
                optionThree='Chico'
                handleFilter={handleFilter}
                filters={filters}
              />
              <CheckBox
                title='Tipos'
                param='type'
                optionOne='Gato'
                optionTwo='Perro'
                handleFilter={handleFilter}
                filters={filters}
              />

              <button
                onClick={() => handleFilter()}
                className='h-8 w-32 rounded-md bg-[#7C58D3] text-[white] hover:bg-[#FFDA47] hover:text-[#0E081E]'
              >
                Limpiar filtros
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
