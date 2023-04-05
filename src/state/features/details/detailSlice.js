import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const detailSlice = createSlice({
  name: 'petDetails',
  initialState: {
    value: undefined,
    loading: true
  },
  reducers: {
    // Acá van los reducers
    setDetailList: (state, action) => {
      return {
        ...state,
        value: action.payload
      };
    },
    clearDetailList: state => {
      return {
        ...state,
        value: undefined
      };
    },
    setLoading: (state, action) => {
      return {
        ...state,
        loading: action.payload
      };
    }
  }
});

export const { setDetailList, clearDetailList, setLoading } = detailSlice.actions;

export default detailSlice.reducer;

/// Acá abajo van lo que vendrian a ser las funciones del action (funciones asíncronas)
export const getDetailById = (id) => {
  const urlDetail = `/pet/${id}`;
  return async function (dispatch) {
    if (id) {
      try {
        const r = await axios.get(urlDetail);
        const data = r.data.pet;
        await dispatch(setDetailList(data));
        await dispatch(setLoading(false));
      } catch (error) {
        dispatch(setDetailList(null));
        await dispatch(setLoading(false));
      }
    } else {
      dispatch(setDetailList());
      await dispatch(setLoading(false));
    }
  };
};
