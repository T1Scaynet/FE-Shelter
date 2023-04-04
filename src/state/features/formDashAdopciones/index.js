import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const formDashAdopciones = createSlice({
  name: 'formRequest',
  initialState: {
    list: []
  },
  reducers: {
    // Acá van los reducers
    setDataRequest: (state, action) => {
      state.list = action.payload;
    },
    setDataList: (state, action) => {
      state.list = [];
    }
  }
});

export const { setDataRequest, setDataList } = formDashAdopciones.actions;

export default formDashAdopciones.reducer;

/// Acá abajo van lo que vendrian a ser las funciones del action (funciones asíncronas)
export const getAdoptionRequest = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get('/form');
      dispatch(setDataRequest(data.forms));
    } catch {
      dispatch(setDataList());
    }
  };
};
