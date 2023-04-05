import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const petSlice = createSlice({
  name: 'pets',
  initialState: {
    list: [],
    pagination: {
      totalPage: 1,
      currentPage: 1
    },
    filters: {
      size: '',
      type: '',
      genre: '',
      sort: '',
      totalPages: 1,
      currentPage: 1,
      search: ''
    }
  },
  reducers: {
    // Acá van los reducers
    setPetsList: (state, action) => {
      state.list = action.payload;
    },

    setPagination: (state, action) => {
      state.pagination = action.payload;
    },

    setFilters: (state, action) => {
      state.filters = action.payload;
    }
  }
});

export const { setPetsList, setPagination, setFilters } = petSlice.actions;

export default petSlice.reducer;

/// Acá abajo van lo que vendrian a ser las funciones del action (funciones asíncronas)
export const getAllPets = ({
  size = '',
  type = '',
  genre = '',
  sort = '',
  state = '',
  currentPage = '',
  search = ''
}) => {
  return async function (dispatch) {
    axios
      .get(
        `/pet?search=${search}&page=${currentPage}&size=${size}&type=${type}&genre=${genre}&sort=${sort}&state=${state}`
      )
      .then((r) => r.data)
      .then((response) => {
        dispatch(setPetsList(response.pets));
        dispatch(
          setPagination({
            totalPages: response.totalPages,
            currentPage: response.currentPage
          })
        );
      })
      .catch(() => dispatch(setPetsList({})));
  };
};

export const getAllPetsAdmin = ({
  size = '',
  type = '',
  genre = '',
  sort = '',
  state = '',
  currentPage = '',
  search = ''
}) => {
  return async function (dispatch) {
    axios
      .get(
        `/pet/admin/getPets?search=${search}&page=${currentPage}&size=${size}&type=${type}&genre=${genre}&sort=${sort}&state=${state}`
      )
      .then((r) => r.data)
      .then((response) => {
        dispatch(setPetsList(response.pets));
        dispatch(
          setPagination({
            totalPages: response.totalPages,
            currentPage: response.currentPage
          })
        );
      })
      .catch(() => dispatch(setPetsList({})));
  };
};

export const PostPet = (payload) => {
  return async function () {
    try {
      const sendaxios = await axios.post(
        '/pet/create',
        payload
      );
      return sendaxios;
    } catch (error) {
      console.warn("Error al enviar datos en función 'PostPet'");
      return error;
    }
  };
};

export const deletePet = (id) => {
  return async function (dispatch, getState) {
    try {
      const pets = getState().pets.list;
      await axios.delete(`pet/delete/${id}`);
      const newList = pets.filter(p => p._id !== id);
      dispatch(setPetsList(newList));
    } catch (error) {
      console.warn("Error al enviar datos en función 'DeletePet'");
      return error;
    }
  };
};
