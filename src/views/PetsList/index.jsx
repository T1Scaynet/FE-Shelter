import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPets, getPetNames } from '../../state/features/pets/petSlice';
import dog from '../../assets/PetsList/Dog.svg';
import puntito from '../../assets/PetsList/PuntitoRosa.svg';
import linea from '../../assets/PetsList/Shape.svg';
import { Cards } from '../../components/Cards';
import SearchBar from '../../components/SearchBar';



const INITIAL_STATE = {
  size: '',
  type: '',
  genre: '',
  order: ''
};

export const PetsList = () => {
  const [filters, setFilters] = useState(INITIAL_STATE);
  const pets = useSelector((state) => state.pets);
  const dispatch = useDispatch();


  const handleFilter = (e, type) => {
    if (!e) {
      setFilters(INITIAL_STATE);
      dispatch(getAllPets(INITIAL_STATE));
      return;
    }
    setFilters(prev => ({
      ...prev,
      [type]: e.target.value
    }));
    dispatch(getAllPets({
      ...filters,
      [type]: e.target.value
    }));
  
  };

  useEffect(() => {
    dispatch(getPetNames());
},[dispatch])

  const isActive = (selectedType, x) => {
    return filters[selectedType] === x ? 'bg-[#FFDA47] border-[#FFDA47] text-[#0e081e]' : 'border-[#7C58D3]';
  };

  useEffect(() => {
    dispatch(getAllPets(filters));
    window.scrollTo(0, 0);
  }, [dispatch]);

  return (
    <div className='w-full h-full'>

      <section className='bg-[#FBF9FF] w-full h-[25.8rem] relative overflow-hidden'>
        <div className='w-[79%] m-auto flex'>
           
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

          <div className='mt-12'>
            <img src={dog} alt='imagen de un perro' />
          </div>
        </div>

        <img src={linea} alt='imagen de la linea divisoria' className='absolute bottom-0' />
      </section>

      <section className='h-full w-[80%] m-auto my-10 rounded-md relative'>
        <div className='flex justify-between'>
          <Cards pets={pets} />
          <div className='w-[12rem] h-[30.7rem] border-[1px] border-[#EBE5F7] rounded-md text-center flex flex-col justify-center items-center sticky top-8'>
            <h1 className=' text-xl font-bold'>Filtros</h1>
            <div>
              
            <SearchBar/>

              <h1 className='font-bold text-[#7C58D3] my-2'>Géneros:</h1>
              <span className='flex justify-center space-x-4'>
                <button onClick={e => handleFilter(e, 'genre')} value='Macho' className={`h-8 w-16 border-2 border-[#7C58D3] rounded-md hover:bg-[#FFDA47] hover:border-none hover:text-[white] ${isActive('genre', 'Macho')}`}>Macho</button>
                <button onClick={e => handleFilter(e, 'genre')} value='Hembra' className={`h-8 w-20 border-2 border-[#7C58D3] rounded-md hover:bg-[#FFDA47] hover:border-none hover:text-[white] ${isActive('genre', 'Hembra')}`}>Hembra</button>
              </span>
            </div>

            <div>
              <h1 className='font-bold text-[#7C58D3] my-2'>Tamaño:</h1>
              <span className='space-x-2'>
                <button onClick={e => handleFilter(e, 'size')} value='Grande' className={`h-8 w-16 border-2 border-[#7C58D3] rounded-md hover:bg-[#FFDA47] hover:border-none hover:text-[white] ${isActive('size', 'Grande')}`}>Grande</button>
                <button onClick={e => handleFilter(e, 'size')} value='Mediano' className={`h-8 w-20 border-2 border-[#7C58D3] rounded-md hover:bg-[#FFDA47] hover:border-none hover:text-[white] ${isActive('size', 'Mediano')}`}>Mediano</button>
                <button onClick={e => handleFilter(e, 'size')} value='Chico' className={`h-8 w-20 border-2 mt-2 border-[#7C58D3] rounded-md hover:bg-[#FFDA47] hover:border-none hover:text-[white] ${isActive('size', 'Chico')}`}>Chico</button>
              </span>
            </div>

            <div>
              <h1 className='font-bold text-[#7C58D3] my-2'>Tipos:</h1>
              <span className='flex justify-center space-x-4'>
                <button onClick={e => handleFilter(e, 'type')} value='Perro' className={`h-8 w-16 border-2 border-[#7C58D3] rounded-md hover:bg-[#FFDA47] hover:border-none hover:text-[white] ${isActive('type', 'Perro')}`}>Perro</button>
                <button onClick={e => handleFilter(e, 'type')} value='Gato' className={`h-8 w-20 border-2 border-[#7C58D3] rounded-md hover:bg-[#FFDA47] hover:border-none hover:text-[white] ${isActive('type', 'Gato')}`}>Gato</button>
              </span>
            </div>

            <div>
              <h1 className='font-bold text-[#7C58D3] my-2'>Ordenar:</h1>
              <span className='flex justify-center space-x-4'>
                <button onClick={e => handleFilter(e, 'order')} value='alphabetical' className={`h-8 w-16 border-2 border-[#7C58D3] rounded-md hover:bg-[#FFDA47] hover:border-none hover:text-[white] ${isActive('order', 'alphabetical')}`}>A - Z</button>
                <button onClick={e => handleFilter(e, 'order')} value='alphabetical_desc' className={`h-8 w-20 border-2 border-[#7C58D3] rounded-md hover:bg-[#FFDA47] hover:border-none hover:text-[white] ${isActive('order', 'alphabetical_desc')}`}>Z - A</button>
              </span>
            </div>
            <button onClick={() => handleFilter()} className='bg-[#7C58D3] text-[white] w-32 h-8 rounded-md mt-4 hover:bg-[#FFDA47] hover:text-[#0E081E]'>Limpiar filtros</button>
          </div>
        </div>
      </section>
    </div>
  );
};
