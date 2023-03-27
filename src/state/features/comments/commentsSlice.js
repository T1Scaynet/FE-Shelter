import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
// import axios from 'axios';

export const commentSlice = createSlice({
  name: 'comments',
  initialState: {
    list: []
  },
  reducers: {
    // Acá van los reducers
    setCommentsList: (state, action) => {
      state.list = action.payload;
    }
  }
});

export const { setCommentsList } = commentSlice.actions;

export default commentSlice.reducer;

/// Acá abajo van lo que vendrian a ser las funciones del action (funciones asíncronas)
export const getCommentsList = () => {
  return async function (dispatch) {
    axios.get('/comment')
      .then((r) => r.data)
      .then((response) => {
        dispatch(setCommentsList(response));
      })
      .catch(() => dispatch(setCommentsList({})));
  };
};
