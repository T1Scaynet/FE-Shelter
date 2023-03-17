import { CardDetail } from './CardDetail';

import imageTraces from '../../assets/traces.svg';
import genre from '../../assets/genre.svg';
import rule from '../../assets/rule.svg';
import cake from '../../assets/cake.svg';

export const Card = ({ name, genres, size, age, image }) => {
  return (
    <div className='bg-[#FFFEFD] w-[33rem] h-[15.4rem] flex rounded-lg border-2 border-[#EBE5F7]'>

      <section className='w-[40%] h-full overflow-hidden'>
        <div className='w-[14.4rem]'>
          <img src={image} alt='Photo de dogs' />
        </div>
      </section>

      <section className='w-[60%] h-full px-4 py-5 space-y-3 flex flex-col'>

        <div className=' space-y-2 w-[95%]'>
          <h1 className='text-[1rem] font-bold'>{name}</h1>
          <p className='text-[0.9rem]'>Thea is house-broken and very toy-motivated. She absolutely loves people and craves attention! Thea was born in February 2014</p>
        </div>

        <div className='relative text-sm font-[Nunito] flex flex-col gap-1'>

          <CardDetail icon={genre} name='Género' value={genres} />
          <CardDetail icon={rule} name='Tamaño' value={size} />
          <CardDetail icon={cake} name='Edad' value={age} />

          <img src={imageTraces} alt='traces' className='absolute right-0' />
        </div>

      </section>

    </div>
  );
};
