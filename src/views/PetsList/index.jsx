import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getAllPets } from '../../state/features/pets/petSlice';
import dog from '../../assets/PetsList/Dog.svg';
import linea from '../../assets/PetsList/Shape.svg';
import { Cards } from '../../components/Cards';
import { Link } from 'react-router-dom';
import { Pagination } from '../../components/Pagination';
import { CheckBox } from './Filters';

const INITIAL_STATE = {
  size: '',
  type: '',
  genre: '',
  order: '',
  totalPages: 1,
  currentPage: 1,
  sort: ''
};

export const PetsList = () => {
  const [filters, setFilters] = useState(INITIAL_STATE);
  const pets = useSelector((state) => state.pets);
  console.log(pets);
  const dispatch = useDispatch();
  const pagination = useSelector(state => state.pets.pagination);

  const handleFilter = (e, type) => {
    if (!e) {
      setFilters(INITIAL_STATE);
      dispatch(getAllPets(INITIAL_STATE));
      return;
    }
    const newValue = filters[type] === e.target.value ? '' : e.target.value;
    setFilters(prev => ({
      ...prev,
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
    // console.log(pageNumber)
    setFilters(prev => ({
      ...prev,
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
      <span className='flex justify-start items-center space-x-2 h-[4.875rem] w-full bg-[#FBF9FF]'>
        <Link
          to='/'
          className='font-bold ml-[12.813rem] text-[#7C58D3] text-[0.9rem]'
        >
          Inicio
        </Link>
        <div className=' rounded-[50%] bg-[#FF47A2] h-[0.4rem] w-[0.4rem]' />
        <Link
          to='/completeList'
          className='font-bold ml-[12.813rem] text-[#7C58D3] text-[0.9rem]'
        >
          Adoptar
        </Link>
      </span>
      <section className='bg-[#FBF9FF] w-full h-[25.8rem] relative overflow-hidden'>
        <div className='w-[79%] m-auto flex'>
          <div className='flex flex-col justify-evenly'>
            <div className='w-[48%]'>
              <h1 className='text-7xl font-bold'>Mascotas</h1>
              <p>
                Adoptar puede cambiar la vida de un animal necesitado y
                brindarte una compañía incondicional y amorosa.
              </p>
            </div>
          </div>

          <div className='mt-12'>
            <img src={dog} alt='imagen de un perro' />
          </div>
        </div>

        <img
          src={linea}
          alt='imagen de la linea divisoria'
          className='absolute bottom-0'
        />
      </section>

      <section className='h-full w-[80%] m-auto my-10 rounded-md relative'>
        <div className='flex justify-between'>
          <Cards pets={pets} />
          <div className='w-[15%] h-[30rem] border-[1px] border-[#EBE5F7] rounded-md flex flex-col items-center sticky top-8 py-2 space-y-4'>
            <h1 className='text-xl font-bold'>Filtros</h1>

            <CheckBox title='Ordenar' param='sort' optionOne='A - Z' optionTwo='Z - A' handleFilter={handleFilter} filters={filters} />
            <CheckBox title='Géneros' param='genre' optionOne='Hembra' optionTwo='Macho' handleFilter={handleFilter} filters={filters} />
            <CheckBox title='Tamaños' param='size' optionOne='Grande' optionTwo='Mediano' optionThree='Chico' handleFilter={handleFilter} filters={filters} />
            <CheckBox title='Tipos' param='type' optionOne='Gato' optionTwo='Perro' handleFilter={handleFilter} filters={filters} />

            <button onClick={() => handleFilter()} className='bg-[#7C58D3] text-[white] w-32 h-8 rounded-md hover:bg-[#FFDA47] hover:text-[#0E081E]'>Limpiar filtros</button>
          </div>

        </div>
      </section>
      <div>
        <Pagination
          currentPage={pagination.currentPage}
          totalPages={pagination.totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};
