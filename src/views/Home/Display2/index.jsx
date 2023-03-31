import { useDispatch, useSelector } from 'react-redux';
import { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getTopList } from '../../../state/features/top/topSlice';
import { Card } from '../../../components/Card';
import { PetsNotFound } from '../../../components/PetsNotFound';

export const Display2 = () => {
  const dispatch = useDispatch();
  const topList = useSelector((state) => state.top);
  const top = topList.list;

  useEffect(() => {
    dispatch(getTopList());
  }, [dispatch]);
  return (
    <div className='w-full h-full bg-[#FFFEFD] px-5 flex flex-col items-center space-y-6 py-2'>
      <p className='text-[#7C58D3] text-[1.2rem] font-bold md:text-[1.5rem]'>Mascotas disponibles para adopción</p>
      <h1 className='text-[1.4rem] md:text-[3rem]'>Encuentra un nuevo amigo peludo</h1>
      <span className='text-center'>Las mascotas adoptables se actualizan continuamente. Visitanos con frecuencia para encontrar tu pareja perfecta</span>
      <div>
        {
          top.length
            ? <div className='grid grid-cols-1 gap-6 lg:grid-cols-2 w-full gap-x-[5rem]'>
              {
              top.map((t, i) => (
                <Fragment key={i}>
                  <Link to={`/detalles/${t._id}`}>
                    <Card
                      name={t.name}
                      genres={t.genre}
                      size={t.size}
                      age={t.age}
                      image={t.image}
                      history={t.history}
                    />
                  </Link>
                </Fragment>
              ))
            } </div>
            : <PetsNotFound />
        }

      </div>
      <Link to='/listado'>
        <button className='w-44 h-14 bg-[#7C58D3] text-[#FFFFFF] rounded-md hover:bg-[#5930b9] font-bold transition-colors duration-500'>Ver más</button>
      </Link>
    </div>
  );
};
