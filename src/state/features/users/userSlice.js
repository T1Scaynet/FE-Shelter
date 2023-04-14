import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const userSlice = createSlice({
  name: 'users',
  initialState: {
    list: [],
    pagination: {
      totalPage: 1,
      currentPage: 1
    },
    filters: {
      active: '',
      roles: '',
      sort: '',
      totalPages: 1,
      currentPage: 1,
      search: ''
    }
  },
  reducers: {
    setAllUsers: (state, action) => {
      state.list = action.payload;
    },
    setPagination: (state, action) => {
      state.pagination = action.payload;
    },
    setFilters: (state, action) => {
      state.filters = action.payload;
    },
    setUpdateUser: (state, action) => {
      state.list = { ...state.list, ...action.payload };
    }
  }
});
export const { setAllUsers, setPagination, setFilters, setUpdateUser } = userSlice.actions;

export default userSlice.reducer;

export const getAllUsers = ({
  active = '',
  roles = '',
  sort = '',
  currentPage = 1,
  search = ''
}) => {
  return async function (dispatch) {
    axios.get(`/user?search=${search}&page=${currentPage}&roles=${roles}&active=${active}&sort=${sort}`)
      .then(r => (r.data))
      .then(response => {
        dispatch(setFilters({ active, roles, sort, search, currentPage }));
        dispatch(setAllUsers(response.forms));
        dispatch(
          setPagination({
            totalPages: response.totalPages,
            currentPage: response.currentPage
          })
        );
      })
      .catch(() => dispatch(setFilters({})));
  };
};
