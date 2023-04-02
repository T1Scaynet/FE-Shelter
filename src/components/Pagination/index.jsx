import arrowLeft from '../../assets/arrow-left.svg';
import arrowRight from '../../assets/arrow-right.svg';

export const Pagination = ({ currentPage, totalPages, onPageChange, isDashboard }) => {
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className={`${isDashboard ? 'flex justify-end my-5' : 'flex justify-center my-12'} w-full`}>
      <ul className={`${isDashboard ? 'space-x-2' : 'space-x-3'} pagination flex justify-between`}>
        <li
          className={`${
            currentPage === 1 ? 'disabled' : ''
          } ${isDashboard ? 'bg-[#dcdcdc] hover:bg-black hover:transition-all hover:duration-[0.8s] duration-[0.5s] w-[2rem] h-[2rem] rounded-full' : 'bg-[#7C58D3] w-[3.1rem] h-[3.1rem] rounded-lg'} flex justify-center items-center cursor-pointer`}
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
                  ? `active ${isDashboard ? 'bg-black' : 'bg-[#7C58D3]'}`
                  : `disabled ${isDashboard ? 'border-[#f0f0f0]' : 'border-[#EBE5F7]'} text-black bg-transparent border-solid border-2 `
              } ${isDashboard ? 'w-[2rem] h-[2rem] rounded-full text-sm' : 'w-[3.1rem] h-[3.1rem] rounded-lg text-lg '} flex justify-center items-center text-[#FFFEFD] font-extrabold cursor-pointer`}
              onClick={() => onPageChange(pageNumber)}
            >
              {pageNumber}
            </li>
          );
        })}
        <li
          className={`${
            currentPage === totalPages
              ? 'disabled bg-transparent pointer-events-none'
              : ''
          } ${isDashboard ? 'bg-[#dcdcdc] hover:bg-black hover:transition-all hover:duration-[0.8s] duration-[0.5s] w-[2rem] h-[2rem] rounded-full' : 'w-[3.1rem] h-[3.1rem] rounded-lg bg-[#7C58D3]'} flex justify-center items-center cursor-pointer`}
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
