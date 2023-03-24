import starsIcon from '../../assets/Comments/star.svg';

const Cards = ({ idPet, idUser, stars, comments, image }) => {
  const starRating = [];
  for (let i = 0; i < stars; i++) {
    starRating.push(
      <img src={starsIcon} key={i} alt='star' className='w-4 h-4 mr-1' />
    );
  }

  return (
    <div className='bg-white w-96 h-56 rounded-lg border border-gray-300 overflow-hidden flex'>
      <img src={image} alt='comments' className='w-1/3 h-full object-cover flex-shrink-0' />
      <div className='w-2/3 p-4 flex flex-col'>
        <h1 className='text-lg font-bold mb-2 flex-grow'>{idPet}</h1>
        <h2 className='text-gray-700 text-base font-medium mb-2 flex-grow'>{idUser}</h2>
        <div className='flex items-center mb-2'>
          {starRating}
        </div>
        <div className='flex-grow'>
          <span className='text-gray-700 text-base font-medium'>{comments}</span>
        </div>
      </div>
    </div>
  );
};

export default Cards;

// import React, { useState } from 'react';
// import { FaStar } from 'react-icons/fa';
// import classNames from 'classnames';
// import truncate from 'lodash/truncate';

// import styles from './Card.module.css';

// const Card = ({ idPet, idUser, stars, comments, image }) => {
//   const [isExpanded, setIsExpanded] = useState(false);

//   const toggleExpand = () => {
//     setIsExpanded(!isExpanded);
//   };

//   const starRating = Array.from({ length: stars }, (_, index) => (
//     <FaStar key={index} className={styles.star} />
//   ));

//   const cardBodyClasses = classNames({
//     [styles.cardBody]: true,
//     [styles.expanded]: isExpanded,
//   });

//   return (
//     <div className={styles.card}>
//       <div className={styles.imageContainer}>
//         <img src={image} alt="Pet" className={styles.image} />
//       </div>
//       <div className={cardBodyClasses}>
//         <h1 className={styles.title}>{idPet}</h1>
//         <h2 className={styles.subtitle}>{idUser}</h2>
//         <div className={styles.starRating}>{starRating}</div>
//         <div className={styles.comments}>
//           <span className={styles.commentText}>
//             {isExpanded ? comments : truncate(comments, { length: 100 })}
//           </span>
//           {comments.length > 100 && (
//             <button
//               className={styles.readMoreButton}
//               onClick={toggleExpand}
//               aria-label={isExpanded ? 'Leer menos' : 'Leer más'}
//             >
//               {isExpanded ? 'Leer menos' : 'Leer más'}
//             </button>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Card;





