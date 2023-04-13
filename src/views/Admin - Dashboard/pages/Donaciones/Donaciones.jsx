import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDonations } from '../../../../state/features/donations/donationSlice';
import Breadcrumb from '../../components/Breadcrumb';
import DefaultLayout from '../../layout/DefaultLayout';
import { RowTitles } from '../../components/RowTitles';
import { titlesDonations } from '../../constants/titlesDonations';
import { RowDonations } from '../../components/RowDonations';
import { FiltersDonations } from '../../components/FiltersDonations';

export const DonacionesPagos = () => {
  const dispatch = useDispatch();
  const donationsList = useSelector((state) => state.donations.donations);
  useEffect(() => {
    dispatch(getDonations());
  }, [dispatch]);
  const [selectedStatus, setSelectedStatus] = useState('all');
  const handleStatusChange = (event) => {
    setSelectedStatus(event.target.value);
  };

  const [selectedDate, setSelectedDate] = useState('');
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const [searchText, setSearchText] = useState('');

  const filterDonations = () => {
    return donationsList.filter((donation) => {
      const searchRegex = new RegExp(searchText, 'i');
      return searchRegex.test(donation.idUser) || searchRegex.test(donation.title);
    }).filter((donation) => {
      if (selectedStatus === 'all') {
        return true;
      } else {
        return donation.status === selectedStatus;
      }
    }).filter((donation) => {
      if (selectedDate === '') {
        return true;
      } else {
        return new Date(donation.createAt).toLocaleDateString('es-AR') === selectedDate.toLocaleDateString('es-AR');
      }
    });
  };

  // paginado//
  const [currentPage, setCurrentPage] = useState(1); // Inicializamos currentPage con useState de React
  // eslint-disable-next-line no-unused-vars
  const [itemsPerPage, setItemsPerPage] = useState(5); // Inicializamos itemsPerPage con useState de React
  const totalPages = Math.ceil(filterDonations().length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const getDonationsForPage = () => {
    const filteredDonations = filterDonations();
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return filteredDonations.slice(startIndex, endIndex);
  };
  return (
    <DefaultLayout>
      <Breadcrumb pageName='Donaciones' />
      <FiltersDonations
        searchText={searchText} setSearchText={setSearchText} selectedStatus={selectedStatus}
        handleStatusChange={handleStatusChange} selectedDate={selectedDate} handleDateChange={handleDateChange}
      />
      <RowTitles titles={titlesDonations} />
      <RowDonations info={getDonationsForPage()} />
      <div className='flex justify-end'>
        <div className='pagination rounded-full'>
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className='hover:bg-blue-700 text-black font-bold rounded-full px-3 py-1 mr-1 border border-gray-300 border-1'
          >
            {'<'}
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={`bg-${currentPage === page ? 'blue-700' : 'gray-400'} hover:bg-${
          currentPage === page ? 'blue-700' : 'gray-600'
        } text-black font-bold rounded-full px-3 py-1 mr-1 border border-gray-300 border-1`}
            >
              {page}
            </button>
          ))}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className='hover:bg-blue-700 text-black font-bold rounded-full px-3 py-1 mr-1 border border-gray-300 border-1'
          >
            {'>'}
          </button>
        </div>
      </div>

    </DefaultLayout>
  );
};
