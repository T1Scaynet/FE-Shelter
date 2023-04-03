export const ButtonResetFilters = ({ handleFilter, isDashboard }) => {
  return (
    <button onClick={() => handleFilter()} className={`${isDashboard ? 'bg-[#dcdcdc] text-[black] w-32 h-8 rounded-md hover:bg-black hover:text-[#FFFEFD] hover:transition-all hover:duration-[0.8s] duration-[0.5s]' : 'bg-[#7C58D3] text-[white] w-32 h-8 rounded-md hover:bg-[#FFDA47] hover:text-[#0E081E]'}`}>Limpiar filtros</button>
  );
};
