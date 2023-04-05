import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'sonner';

export const getDonations = () => {
  return async function (dispatch) {
    try {
      const response = await axios.get('/payment');
      const donations = response.data.allPayments;
      dispatch(setDonations(donations));
    } catch (error) {
      toast.error('Ocurrio un problema, intente nuevamente');
      dispatch(setDonations([]));
    }
  };
};

export const donationsSlice = createSlice({
  name: 'donations',
  initialState: {
    donations: [],
    filteredDonations: [],
    searchQuery: '',
    selectedDate: null
  },
  reducers: {
    setDonations: (state, action) => {
      state.donations = action.payload;
      state.filteredDonations = action.payload;
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
      state.filteredDonations = state.donations.filter(
        (donation) =>
          donation.idUser.includes(state.searchQuery) ||
          donation.title.toLowerCase().includes(state.searchQuery.toLowerCase())
      );
      if (state.selectedDate) {
        state.filteredDonations = state.filteredDonations.filter(
          (donation) => donation.date === state.selectedDate
        );
      }
    },
    setSelectedDate: (state, action) => {
      state.selectedDate = action.payload;
      state.filteredDonations = state.donations.filter(
        (donation) => donation.date === state.selectedDate
      );
    }
  }
});

export const { setDonations, setSearchQuery, setSelectedDate } = donationsSlice.actions;

export default donationsSlice.reducer;
