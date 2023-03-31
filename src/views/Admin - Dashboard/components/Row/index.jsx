import { Fragment } from 'react';
const style = 'py-3 px-3 border-[1px] border-solid border-[#f0f0f0]';

export const Row = ({ info }) => {
  console.log(info);
  return (
    <div className='grid grid-cols-7 bg-white'>
      {
        info.length
          ? info.map((inf, i) => (
            <Fragment key={i}>
              <p className={`${style} w-full truncate`}>{inf._id}</p>
              <p className={`${style}`}>{inf.name}</p>
              <p className={`${style}`}>{inf.genre}</p>
              <p className={`${style}`}>{inf.size}</p>
              <p className={`${style}`}>{inf.type}</p>
              <p className={`${style}`}>{inf.state}</p>
              <p className={`${style}`}>Deleted</p>
            </Fragment>
          ))
          : <h1>No se encontró</h1>
      }
    </div>
  );
};
// <p  key={i}>{t}</p>
