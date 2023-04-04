import React, { useState } from 'react';
import css from '../../../Admin - Dashboard/pages/Usuarios/Paginate.module.css';

const Pagination = ({ itemsPerPage, totalItems, paginate }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    paginate(pageNumber);
  };

  const handlePrevClick = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      paginate(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    if (currentPage < pageNumbers.length) {
      setCurrentPage(currentPage + 1);
      paginate(currentPage + 1);
    }
  };

  return (
    <nav className={css.pagination}>
      <ul className="pagination">
        <li className="page-item">
          <a
            href="#"
            className="page-link"
            onClick={handlePrevClick}
          >
            {'<'}
          </a>
        </li>
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <a
              href="#"
              className="page-link"
              onClick={() => handlePageChange(number)}
            >
              {number}
            </a>
          </li>
        ))}
        <li className="page-item">
          <a
            href="#"
            className="page-link"
            onClick={handleNextClick}
          >
            {'>'}
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
