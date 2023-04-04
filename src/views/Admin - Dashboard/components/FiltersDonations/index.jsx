import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export const FiltersDonations = ({ searchText, setSearchText, selectedStatus, handleStatusChange, selectedDate, handleDateChange }) => {
  return (
    <div className='flex flex-col md:flex-row md:items-center justify-between'>
      <div className='relative mb-4 md:mb-0'>
        <input
          id='search'
          className='border border-gray-400 rounded-full py-2 px-6 pr-8 bg-white w-full text-gray-900 placeholder-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300'
          type='text'
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder='Buscar por nombre/producto'
        />
        <div className='absolute inset-y-0 right-0 flex items-center pr-3'>
          <svg className='h-5 w-5 text-gray-400' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M15 19l-4-4m0 0l-4-4m4 4l4-4m-4 4h12' />
          </svg>
        </div>
      </div>
      <div className='flex flex-col md:flex-row md:items-center justify-between'>
        <label className='md:mr-2 mb-2 md:mb-0'>
          Filtrar por estado:
        </label>
        <select className='w-full md:w-[10rem] py-2 px-3 border border-gray-400 rounded-md mb-4 md:mb-0 focus:outline-none focus:border-blue-500'>
          <option value='all'>Todos</option>
          <option value='approved'>Aprobado</option>
          <option value='pending'>Pendiente</option>
          <option value='canceled'>Cancelado</option>
        </select>
      </div>
      <div className='flex flex-col md:flex-row md:items-center justify-between'>
        <label className='md:mr-2 mb-2 md:mb-0'>
          Filtrar por fecha:
        </label>
        <DatePicker
          className='w-full md:w-[10rem] py-2 px-3 border border-gray-400 rounded-md focus:outline-none focus:border-blue-500'
          selected={selectedDate}
          onChange={handleDateChange}
          dateFormat='dd/MM/yyyy'
        />
      </div>
    </div>

  );
};
