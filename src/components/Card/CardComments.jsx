import starsIcon from '../../assets/Comments/star.svg';
import quotes from '../../assets/Comments/quotes.svg';
import quotesPink from '../../assets/Comments/quotesPink.svg';

const Cards = ({ name, lastName, stars, comments, avatar, indx }) => {
  const starRating = [];
  for (let i = 0; i < stars; i++) {
    starRating.push(
      <img src={starsIcon} key={i} alt='star' className='w-4 h-4' />
    );
  }

  return (
    <div className='bg-[#FFFEFD] w-[26rem] h-[15rem] 2xl:w-[28rem] 2xl:h-[15rem] rounded-lg border border-[#EBE5F7] overflow-hidden grid grid-rows-5 mb-5 2xl:py-2'>
      <section className='w-full h-full row-span-2'>
        <div className='w-full h-full px-7 bg-gray-100 flex items-center justify-between'>
          <div className='w-full flex items-center space-x-4'>
            <picture className='w-15'>
              <img src={avatar} alt='comments' className='object-contain rounded-full' />
            </picture>
            <div className='space-y-2'>
              <span className='text-gray-700 text-base font-bold'>{name + ' ' + (lastName || '')}</span>
              <div className='flex space-x-1'>{starRating}</div>
            </div>
          </div>
          <img src={indx % 2 === 0 ? quotes : quotesPink} alt='imagen de comillas' />
        </div>
      </section>
      <section className='px-7 2xl:pb-3 w-full h-full row-span-3 flex items-start 2xl:items-center'>
        <span className='text-gray-700 text-base font-medium line-clamp-5'>{comments}</span>
      </section>
    </div>
  );
};

export default Cards;
