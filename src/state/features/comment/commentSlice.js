import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const commentSlice = createSlice({
  name: 'comments',
  initialState: {
    list: []
  },
  reducers: {
    commentList: (state, action) => {
      state.list = action.payload;
    }
  }
});

export const { commentList } = commentSlice.actions;

export const getComments = () => async (dispatch) => {
  try {
    const res = await axios.get('/comment');
    const json = res.data;
    console.log('este es getCom', json);
    dispatch(commentList(json));
  } catch (err) {
    console.log(err);
  }
};

export default commentSlice.reducer;
