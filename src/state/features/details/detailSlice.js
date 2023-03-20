import { createSlice } from '@reduxjs/toolkit';

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
        value: action.payload.pet
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
  const urlDetail = `http://localhost:3001/pet/${id}`;
  return async function (dispatch) {
    if (id) {
      try {
        const r = await fetch(urlDetail);
        const data = await r.json();
        await dispatch(setDetailList(data));
      } catch (error) {
        dispatch(setDetailList(null));
      }
    } else {
      dispatch(setDetailList());
    }
  };
};
