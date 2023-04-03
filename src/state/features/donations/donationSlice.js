import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getDonations = () => {
  return async function (dispatch) {
    try {
      const response = await axios.get('/payment');
      const donations = response.data.allPayments;
      const requests = donations.map(async (donation) => {
        const userResponse = await axios.get(`/user/${donation.idUser}`);
        return { ...donation, idUser: userResponse.data.user.name };
      });
      const donationsWithUserName = await Promise.all(requests);
      dispatch(setDonations(donationsWithUserName));
    } catch (error) {
      console.log(error);
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
