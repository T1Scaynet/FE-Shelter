import starsIcon from '../../assets/Comments/star.svg';

const Cards = ({ name, lastName, stars, comments, avatar }) => {
  const starRating = [];
  for (let i = 0; i < stars; i++) {
    starRating.push(
      <img src={starsIcon} key={i} alt='star' className='w-4 h-4' />
    );
  }

  return (
    <div className='w-[28rem] h-[15rem] rounded-lg border border-gray-300 overflow-hidden flex mb-5'>
      <div className='w-64 h-64 bg-gray-100 flex items-center justify-center'>
        <img src={avatar} alt='comments' className='object-contain rounded-full' />
      </div>
      <div className='w-full flex justify-center flex-col px-5 space-y-4'>
        <div>
          <div>
            <span className='text-gray-700 text-base font-medium'>{name + ' ' + (lastName || '')}</span>
          </div>
          <div className='flex pb-5'>
            {starRating}
          </div>
          <span className='text-gray-700 text-base font-medium'>{comments}</span>
        </div>
      </div>
    </div>
  );
};

export default Cards;
