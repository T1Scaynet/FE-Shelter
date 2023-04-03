import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDonations } from '../../../../state/features/donations/donationSlice';
import Breadcrumb from '../../components/Breadcrumb';
import DefaultLayout from '../../layout/DefaultLayout';
// import './donations.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
//import { saveAs } from 'file-saver';
import { BsEyeFill, BsDownload } from 'react-icons/bs';

export const DonacionesPagos = () => {
  const dispatch = useDispatch();
  const donationsList = useSelector((state) => state.donations.donations);
  // FILTRO POR ESTADO//
  const [selectedStatus, setSelectedStatus] = useState('all');
  const handleStatusChange = (event) => {
    setSelectedStatus(event.target.value);
  };
  // filtro por fecha//
  const [selectedDate, setSelectedDate] = useState('');
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  /// /SEARCHBAR//
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
  useEffect(() => {
    dispatch(getDonations());
  }, [dispatch]);
  // paginado//
  const [currentPage, setCurrentPage] = useState(1); // Inicializamos currentPage con useState de React
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
  /// para ver y descargar//
  // const handleDateChange = (date) => {
  //   setSelectedDate(date);
  // };
  const handleDownload = (url) => {
    saveAs(url, 'donation.pdf');
  };
  return (
    <DefaultLayout>
      <Breadcrumb pageName='Donaciones' />
      <div className='flex justify-between items-center'>
        <div className='relative'>
          <input
            id='search'
            // className='border rounded-lg py-2 px-3 pr-8 bg-white w-70 text-gray-900 m-3 placeholder-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300'
            type='text'
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder='Busca por nombre/producto'
          />
        </div>
        <div>
          <label>
            Filtrar por estado:
            <select value={selectedStatus} onChange={handleStatusChange}>
              <option value='all'>Todos</option>
              <option value='approved'>Aprobado</option>
              <option value='pendding'>Pendiente</option>
              <option value='canceled'>Cancelado</option>
            </select>
          </label>
        </div>
        <div>
          <label>
            Filtrar por fecha:
            <DatePicker selected={selectedDate} onChange={handleDateChange} dateFormat='dd/MM/yyyy' />
          </label>
        </div>
      </div>
      <div className='table-responsive'>
        <table className='table-auto w-full'>
          <thead id='fila1'>
            <tr>
              <th className='px-4 py-2'>ID</th>
              <th className='px-4 py-2'>Usuario</th>
              <th className='px-4 py-2'>Cantidad</th>
              <th className='px-4 py-2'>Precio</th>
              <th className='px-4 py-2'>Descripcion</th>
              <th className='px-4 py-2'>Estado</th>
              <th className='px-4 py-2'>Fecha</th>
              <th className='px-4 py-2'>Acciones</th>
            </tr>
          </thead>
          <tbody className='bg-white divide-y divide-gray-100'>
            {getDonationsForPage().map((donation) => (
              <tr key={donation._id} className='text-sm border'>
                <td className='px-4 py-2'>{donation._id}</td>
                <td className='px-4 py-2'>{donation.idUser}</td>
                <td className='px-4 py-2'>{donation.title.split(',').length}</td>
                <td className='px-4 py-2'>
                  ${donation.amount && donation.amount.toLocaleString('es-AR')},00
                </td>
                <td className='px-4 py-2'>{donation.title}</td>
                <td className='px-4 py-2'>{donation.status}</td>
                <td className='px-4 py-2'>{new Date(donation.createAt).toLocaleString('es-AR')}</td>
                <td className='border px-4 py-2'>
                  <a href={donation.url} target='_blank' rel='noopener noreferrer' title='View'>
                    <BsEyeFill className='text-blue-500 hover:text-blue-700 mr-2 cursor-pointer' />
                  </a>
                  <a onClick={() => handleDownload(donation.url)} title='Download'>
                    <BsDownload className='text-blue-500 hover:text-blue-700 cursor-pointer' />
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className='pagination'>
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          {'<'}
        </button>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            className={currentPage === page ? 'active' : ''}
          >
            {page}
          </button>
        ))}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          {'>'}
        </button>
      </div>
    </DefaultLayout>
  );
};
