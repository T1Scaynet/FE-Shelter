import noFount from '../../assets/Home/gatoCaja.svg';

export const PetsNotFound = () => {
  return (
    <div className='w-full h-[75vh] m-auto flex flex-col justify-center'>
      <img src={noFount} alt='Imagen de gato en una caja' className=' h-[20rem]' />
      <h1 className='text-center text-5xl font-bold'>No se encontró ninguna mascota</h1>
    </div>
  );
};
