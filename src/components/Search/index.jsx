export const Search = ({ handleChange, handleSubmit, value, searchBy }) => {
  console.log({ value });
  return (
    <div className='my-5 w-full'>
      <form onSubmit={handleSubmit} className='flex w-full'>
        <input type='text' placeholder={searchBy} value={value} onChange={handleChange} className='bg-[#fbf9ff] md:text-[1rem] text-[0.875rem] appearance-none border-2 border-[#e1dee7] rounded-md w-[15rem] py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 md:w-[16rem]' />
        <button className='px-3 ml-3 bg-[#dcdcdc] text-[black] rounded-md hover:bg-black hover:text-[#FFFEFD] hover:transition-all hover:duration-[0.8s] duration-[0.5s]' type='submit'>Buscar</button>
      </form>
    </div>
  );
};
