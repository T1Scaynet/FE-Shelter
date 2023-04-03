import { AgregarMascota } from '../../pages/Mascotas/Agregar-Mascota';
export const Modal = ({ data, setModal, modal }) => {
  if (!modal) return;
  return (
    <div className='absolute w-full top-0 right-0 left-0 bottom-0 h-screen z-9999 '>
      <button onClick={() => setModal(false)} className=' absolute top-8 right-8 z-999999'>X</button>
      <AgregarMascota updateData={data} />
    </div>
  );
};
