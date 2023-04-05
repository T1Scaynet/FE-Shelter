import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const formDashAdopciones = createSlice({
  name: 'formRequest',
  initialState: {
    list: [],
    pagination: {
      totalPage: 1,
      currentPage: 1
    }
  },
  reducers: {
    // Acá van los reducers
    setDataRequest: (state, action) => {
      state.list = action.payload;
    },

    setDataList: (state, action) => {
      state.list = [];
    },

    setPagination: (state, action) => {
      state.pagination = action.payload;
    }
  }
});

export const { setDataRequest, setDataList, setPagination } = formDashAdopciones.actions;

export default formDashAdopciones.reducer;

/// Acá abajo van lo que vendrian a ser las funciones del action (funciones asíncronas)
export const getAdoptionRequest = (currentPage) => {
  // console.log(currentPage);
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/form?page=${currentPage}`);
      // console.log(data.form);
      dispatch(setDataRequest(data.forms));
      dispatch(
        setPagination({
          totalPages: data.totalPages,
          currentPage: data.currentPage || 1
        })
      );
    } catch {
      dispatch(setDataList());
    }
  };
};

export const deleteRequestAdoption = (id) => {
  return async (dispatch, getState) => {
    try {
      const listR = getState().formRequest.list;
      const r = axios.delete(`form/delete/${id}`);
      const newList = listR.filter(p => p._id !== id);
      dispatch(setDataRequest(newList));
      return r;
    } catch (error) {
      console.warn("Error al enviar datos en función 'deleteRequest'");
      return error;
    }
  };
};

export const putStateAdoption = (id, s) => {
  console.log(id);
  return async (dispatch, getState) => {
    try {
      const listR = getState().formRequest.list;
      const r = axios.put(`form/stateForm/${id}`, s);
      const newList = listR.map(p => {
        if (p._id === id) {
          return { ...p, state: s };
        } else {
          return p;
        }
      });
      dispatch(setDataRequest(newList));
      return r;
    } catch (error) {
      console.warn("Error al cambiar datos en función 'putStateAdoption'");
      return error;
    }
  };
};
