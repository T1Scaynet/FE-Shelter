export const Result = ({ filters, handleFilter }) => {
  return (
    <>{filters.search && <span className='flex space-x-2'><p>Mostrando resultados de:</p><div className='bg-[#BDF5D3] text-[#187d44] px-3 rounded-md relative'>{filters.search}<button onClick={() => handleFilter()} className='absolute right-[-0.4rem] top-[-0.5rem] rounded-full w-4 h-4 flex justify-center items-center bg-[#187d44] text-[#BDF5D3] hover:bg-[#BDF5D3] hover:text-[#187d44] pl-[0.5px] pb-[2px]'>x</button></div></span>}</>
  );
};
