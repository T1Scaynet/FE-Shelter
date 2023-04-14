import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'sonner';
import { setFilters } from '../pets/petSlice';

// export const getDonations = () => {
//   return async function (dispatch) {
//     try {
//       const response = await axios.get('/payment');
//       const donations = response.data.allPayments;
//       dispatch(setDonations(donations));
//     } catch (error) {
//       toast.error('Ocurrio un problema, intente nuevamente');
//       dispatch(setDonations([]));
//     }
//   };
// };

export const donationsSlice = createSlice({
  name: 'donations',
  initialState: {
    list: [],
    pagination: {
      totalPages: 1,
      currentPage: 1
    },
    filters: {
      title: '',
      status: '',
      sort: '',
      date: ''
    }
  },
  reducers: {
    setDonations: (state, action) => {
      state.list = action.payload;
    },
    setPagination: (state, action) => {
      state.pagination = { ...state.pagination, ...action.payload };
    }
    // setFilters1: (state, action) => {
    //   state.filters = action.payload;
    //   state.filters.date = state.list.filter(donation => donation.date === state.filters.date);
    // }
  }
});

export const { setDonations, setPagination, setFilters1 } = donationsSlice.actions;

export default donationsSlice.reducer;

export const getDonations = ({ currentPage }) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/payment?page=${currentPage}&`);
      dispatch(setDonations(data.payments));
      dispatch(setPagination({
        currentPage: data.currentPage,
        totalPages: data.totalPages
      }));
      dispatch(setFilters({}));
    } catch (error) {
      toast.error('Ocurrio un problema, intente nuevamente');
    }
  };
};
