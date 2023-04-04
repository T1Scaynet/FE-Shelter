/* eslint-disable prefer-const */
/* eslint-disable multiline-ternary */
import { ButtonCopied } from '../ButtonCopied';
import pencil from '../../../../assets/Dashboard/pencil.svg';
import trash from '../../../../assets/Dashboard/trash.svg';
import arrowBlue from '../../../../assets/arrowBlue.png';
import { Button, Collapse } from '@mui/material';
import { useState } from 'react';
const style = 'py-3 px-3 border-[1px] border-solid border-[#f0f0f0] w-full truncate';

export const RowAdoption = ({ info }) => {
  // console.log(info)
  let obj = {};

  info.forEach(valor => {
    obj[valor._id] = false;
  });

  // console.log(obj);

  const [showInput, setShowInput] = useState(obj);

  function handleChange (dataName) {
    setShowInput({ ...showInput, [dataName]: !showInput[dataName] });
  };

  return (
    <div>
      {
        info.length
          ? info.map((data, i) => (
            <div key={i} className={`${i % 2 === 0 ? 'bg-white' : 'bg-[#f8f8f8]'} grid grid-cols-4 `}>
              <div className='flex border-[1px] border-solid border-[#f0f0f0] relative'>
                <p className='py-3 px-3 w-full truncate mr-3'>{data._id}</p>
                <ButtonCopied idPet={data._id} />
              </div>
              <Button style={{ fontWeight: 'bold', color: '#017AFE' }} onClick={() => handleChange(data._id)}>DATOS<img src={arrowBlue} className={`w-[10px] ml-2 rotate-90 transition-all ${showInput[data._id] ? '-rotate-90' : 'rotate-90'}`} /></Button>
              <div className={`${style}`}>
                <p className={`${data.state === 'Disponible' ? 'bg-[#BDF5D3] text-[#187d44]' : 'bg-[#ffc4cd] text-[#e00b2b]'} md:text-[1rem] text-[12px] w-fit px-2 m-auto rounded-md`}>{data.state}</p>
              </div>
              <div className={`${style} flex justify-center space-x-2`}>
                <button className='bg-[#BDF5D3] w-7 px-1 rounded-md'>
                  <img src={pencil} alt='Lapiz para editar' />
                </button>
                <button className='bg-[#ffc4cd] w-7 px-1 rounded-md'>
                  <img src={trash} alt='Tacho de basura para eliminar' />
                </button>
              </div>
              <div className='w-[22.4rem] md:w-[61rem]'>
                <Collapse in={showInput[data._id]}>
                  <div className='w-full md:h-[18rem] md:border-x-2 px-3 py-3 md:border-b-2 border-[#f0f0f0]'>
                    <h3 className='border-b-2 border-black font-bold text-xl text-center mb-3'>Datos Pesonales</h3>
                    <div className='flex md:flex-row gap-5 flex-col w-full justify-between'>
                      <div>
                        <b className='border-b-2 border-black md:text-[1rem] text-[0.875rem]'>ID</b>
                        <p className='mt-3 md:text-[1rem] text-[0.75rem]'><b>ID_Usuario: </b>{data.idUser}</p>
                        <p className='mt-[0.25rem] md:text-[1rem] text-[0.75rem]'><b>ID_Usuario: </b>{data.idUser}</p>
                      </div>
                      <div>
                        <b className='border-b-2 border-black md:text-[1rem] text-[0.875rem]'>INFO</b>
                        <p className='mt-3 md:text-[1rem] text-[0.75rem]'><b>Nombre: </b>{data.name}</p>
                        <p className='mt-[0.25rem] md:text-[1rem] text-[0.75rem]'><b>Apellido: </b>{data.lastName}</p>
                        <p className='mt-[0.25rem] md:text-[1rem] text-[0.75rem]'><b>Dirección: </b>{data.address}</p>
                        <p className='mt-[0.25rem] md:text-[1rem] text-[0.75rem]'><b>E-mail: </b>{data.email}</p>
                        <p className='mt-[0.25rem] md:text-[1rem] text-[0.75rem]'><b>Teléfono: </b>{data.phone}</p>
                        <p className='mt-[0.25rem] md:text-[1rem] text-[0.75rem]'><b>Fecha de solicitud: </b>{data.createAt}</p>
                      </div>
                      <div>
                        <b className='border-b-2 border-black md:text-[1rem] text-[0.875rem]'>DETALLES DEL HOGAR</b>
                        <p className='mt-3  md:text-[1rem] text-[0.75rem]'><b>Otras mascotas: </b>{data.otherPets ? 'Si' : 'No'}</p>
                        <p className='mt-[0.25rem] md:text-[1rem] text-[0.75rem]'><b>Patio: </b>{data.garden ? 'Si' : 'No'}</p>
                        <p className='mt-[0.25rem] md:text-[1rem] text-[0.75rem]'><b>Chicos: </b>{data.children ? 'Si' : 'No'}</p>
                      </div>
                    </div>
                  </div>
                </Collapse>
              </div>
            </div>
          ))
          : <h1>No se encontró</h1>
      }
    </div>
  );
};
// <p  key={i}>{t}</p>
