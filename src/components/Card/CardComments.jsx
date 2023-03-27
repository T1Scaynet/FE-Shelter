import starsIcon from '../../assets/Comments/star.svg';

const Cards = ({ idPet, idUser, stars, comments, image }) => {
  const starRating = [];
  for (let i = 0; i < stars; i++) {
    starRating.push(
      <img src={starsIcon} key={i} alt='star' className='w-4 h-4' />
    );
  }

  return (
    <div className='w-[28rem] h-[15rem] rounded-lg border border-gray-300 overflow-hidden flex mb-5'>
      <div className='w-[60%]'>
        <img src={image} alt='comments' className='h-full object-cover' />
      </div>
      <div className='w-full flex justify-center flex-col px-5 space-y-4'>
        <div>
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
