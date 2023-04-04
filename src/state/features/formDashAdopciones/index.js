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
    }
  }
});

export const { setDataRequest } = formDashAdopciones.actions;

export default formDashAdopciones.reducer;

/// Acá abajo van lo que vendrian a ser las funciones del action (funciones asíncronas)
export const getAdoptionRequest = () => {
  const url = '/form';
  return async function (dispatch) {
    try {
      const r = await axios.get(url);
      const data = await r.data;
      const response = data.forms;
      console.log(response);
      await dispatch(setDataRequest(response));
    } catch {
      await dispatch(setDataRequest('Error de peticion'));
    }
  };
};
