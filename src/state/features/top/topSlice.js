import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const topSlice = createSlice({
  name: 'top',
  initialState: {
    list: []
  },
  reducers: {
    setTopList: (state, action) => {
      state.list = action.payload;
    }
  }
});

export const { setTopList } = topSlice.actions;

export default topSlice.reducer;

export const getTopList = () => {
  return async function (dispatch) {
    axios.get('http://localhost:3001/pet/firtsPets')
      .then(r => r.data)
      .then(response => {
        console.log('response', response);
        dispatch(setTopList(response));
      }).catch(error => console.log(error));
  };
};
