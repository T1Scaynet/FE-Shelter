import arrowLeft from '../../assets/arrow-left.svg';
import arrowRight from '../../assets/arrow-right.svg';

export const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  // console.log({ currentPage, totalPages, onPageChange });
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className='w-full flex justify-center mb-6 mt-24'>
      <ul className=' w-[300px] pagination flex justify-between '>
        <li
          className={`${
            currentPage === 1 ? 'disabled' : ''
          } w-[3.1rem] h-[3.1rem] bg-[#7C58D3] flex justify-center items-center rounded-lg`}
        >
          <img
            src={arrowLeft}
            alt={arrowLeft}
            onClick={() => onPageChange(currentPage - 1)}
          />
        </li>
        {pageNumbers.map((pageNumber, i) => {
          return (
            <li
              key={pageNumber}
              className={`${
                pageNumber === currentPage
                  ? 'active bg-[#7C58D3]'
                  : 'disabled text-black bg-transparent border-solid border-2 border-[#EBE5F7] '
              } w-[3.1rem] h-[3.1rem] flex justify-center items-center rounded-lg text-[#FFFEFD] text-lg font-extrabold`}
            >
              <button onClick={() => onPageChange(pageNumber)}>
                {pageNumber}
              </button>
            </li>
          );
        })}
        <li
          className={`${
            currentPage === totalPages
              ? 'disabled bg-transparent pointer-events-none'
              : ''
          } w-[3.1rem] h-[3.1rem] bg-[#7C58D3] flex justify-center items-center rounded-lg`}
        >
          <img
            src={arrowRight}
            alt={arrowRight}
            onClick={() => onPageChange(currentPage + 1)}
          />
        </li>
      </ul>
    </nav>
  );
};
