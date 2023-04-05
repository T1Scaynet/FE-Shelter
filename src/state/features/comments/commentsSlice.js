import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'sonner';
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

export const postComment = (comment) => {
  return async () => {
    try {
      const { data } = await axios.post('/comment', comment);
      toast.success('Comentario enviado correctamente');
    } catch (error) {
      toast.error('El comentario no se envio correctamente, intente nuevamente');
    }
  };
};
