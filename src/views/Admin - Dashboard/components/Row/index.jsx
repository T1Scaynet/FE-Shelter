import { ButtonCopied } from '../ButtonCopied';
import pencil from '../../../../assets/Dashboard/pencil.svg';
import trash from '../../../../assets/Dashboard/trash.svg';
import dog from '../../../../assets/Dashboard/dog.svg';
import cat from '../../../../assets/Dashboard/cat.svg';
const style = 'py-3 px-3 border-[1px] border-solid border-[#f0f0f0] w-full truncate';

export const Row = ({ info }) => {
  return (
    <div>
      {
        info.length
          ? info.map((data, i) => (
            <div key={i} className={`${i % 2 === 0 ? 'bg-white' : 'bg-[#f8f8f8]'} grid grid-cols-7 `}>
              <div className='flex border-[1px] border-solid border-[#f0f0f0] relative'>
                <p className='py-3 px-3 w-full truncate mr-3'>{data._id}</p>
                <ButtonCopied idPet={data._id} />
              </div>
              <p className={`${style}`}>{data.name}</p>
              <p className={`${style}`}>{data.genre}</p>
              <p className={`${style}`}>{data.size}</p>
              <div className={`${style} flex space-x-2`}>
                <img className='w-6' src={data.type === 'Perro' ? dog : cat} alt={`imagen de un ${data.type}`} />
                <p>{data.type}</p>
              </div>
              <div className={`${style}`}>
                <p className={`${data.state === 'Disponible' ? 'bg-[#BDF5D3] text-[#187d44]' : 'bg-[#ffc4cd] text-[#e00b2b]'} w-fit px-2 rounded-md`}>{data.state}</p>
              </div>
              <div className={`${style} flex justify-center space-x-2`}>
                <button className='bg-[#BDF5D3] w-7 px-1 rounded-md'>
                  <img src={pencil} alt='Lapiz para editar' />
                </button>
                <button className='bg-[#ffc4cd] w-7 px-1 rounded-md'>
                  <img src={trash} alt='Tacho de basura para eliminar' />
                </button>
              </div>
            </div>
          ))
          : <h1>No se encontró</h1>
      }
    </div>
  );
};
// <p  key={i}>{t}</p>
