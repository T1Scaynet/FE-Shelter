import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPets, setFilters } from '../../state/features/pets/petSlice';

export const Search = () => {
  const filters = useSelector(state => state.pets.filters);
  console.log(filters);
  const [value, setValue] = useState('');
  const dispatch = useDispatch();

  const handleChange = ({ target }) => {
    setValue(target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (value.trim().length <= 0) return;
    dispatch(setFilters({ ...filters, search: value, currentPage: 1 }));
    dispatch(getAllPets({ ...filters, search: value, currentPage: 1 }));
    setValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type='text' placeholder='Buscar por Género, Tamaño o Tipo' value={value} onChange={handleChange} className='bg-[#fbf9ff] appearance-none border-2 border-[#fbf9ff] rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500' />
    </form>
  );
};
