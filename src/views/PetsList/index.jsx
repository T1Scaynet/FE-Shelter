import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getAllPets } from '../../state/features/pets/petSlice';
import dog from '../../assets/PetsList/Dog.png';
import puntito from '../../assets/PetsList/PuntitoRosa.svg';
import linea from '../../assets/PetsList/Shape.svg';
import { Cards } from '../../components/Cards';
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

  // const isActive = (selectedType, x) => {
  //   return filters[selectedType] === x ? 'bg-[#FFDA47] border-[#FFDA47] text-[#0e081e]' : 'border-[#7C58D3]';
  // };

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

      <section className='bg-[#FBF9FF] w-full h-[25.8rem] relative overflow-hidden'>
        <div className='w-[79%] h-[90%] m-auto flex'>

          <div className='flex flex-col justify-evenly'>
            <span className='flex justify-start space-x-2'>
              <p>Inicio</p>
              <img src={puntito} alt='Imagen de un punto de separación color rosa' />
              <p>Adoptar</p>
            </span>
            <div className='w-[48%]'>
              <h1 className='text-7xl font-bold'>Mascotas</h1>
              <p>Adoptar puede cambiar la vida de un animal necesitado y brindarte una compañía incondicional y amorosa.</p>
            </div>
          </div>

          <div className='mt-7'>
            <img src={dog} alt='imagen de un perro' />
          </div>
        </div>

        <img src={linea} alt='imagen de la linea divisoria' className='absolute bottom-0' />
      </section>

      <section className='h-full w-full rounded-md relative'>
        <div className='h-full w-[89%] 2xl:w-[80%] m-auto flex my-10 justify-between'>
          <div className='w-4/5'>
            <Cards pets={pets} />
          </div>

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
