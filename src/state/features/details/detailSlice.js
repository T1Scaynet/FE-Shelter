import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const detailSlice = createSlice({
  name: 'petDetails',
  initialState: {
    value: undefined
  },
  reducers: {
    // Acá van los reducers
    setDetailList: (state, action) => {
      return {
        ...state.value,
        value: action.payload
      };
    },
    clearDetailList: state => {
      return {
        ...state.value,
        value: undefined
      };
    }
  }
});

export const { setDetailList, clearDetailList } = detailSlice.actions;

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
      } catch (error) {
        dispatch(setDetailList(null));
      }
    } else {
      dispatch(setDetailList());
    }
  };
};
