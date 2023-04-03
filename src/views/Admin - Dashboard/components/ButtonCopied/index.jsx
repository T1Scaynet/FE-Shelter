import React, { useState } from 'react';
import copy from '../../../../assets/Dashboard/copy.svg';

export const ButtonCopied = ({ idPet }) => {
  const [copied, setCopied] = useState(false);

  const handleClick = (id) => {
    setCopied(true);
    window.navigator.clipboard.writeText(id);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };
  return (
    <button onClick={() => handleClick(idPet)} className='w-6 h-6 p-1 right-1 hover:bg-[#f6f1f1] active:bg-[#e1d8ea] active:opacity-80 active:transition-all hover:rounded-md absolute bottom-3'>
      {
        copied && <p className='text-[0.6rem] bg-[#e1d8ea] absolute bottom-[23px] right-[-0.8rem] px-2 rounded-md'>Copiado</p>
      }
      <img src={copy} />
    </button>
  );
};
