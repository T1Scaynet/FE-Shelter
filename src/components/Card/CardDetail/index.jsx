export const CardDetail = ({ icon, name, value }) => {
  return (
    <div className='flex space-x-1'>
      <img src={icon} alt='icono de genero' />
      <p className='text-[#7C58D3] font-bold'>
        {name}: <span className='text-[#0E081E]'>{value}</span>
      </p>
    </div>
  );
};
