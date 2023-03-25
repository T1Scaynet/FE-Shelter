import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const loginSlice = createSlice({
  name: 'login',
  initialState: {
    user: [],
    token: '',
    isAuthenticated: false,
    error: null,
    registering: false,
    userLogged: false
  },
  reducers: {
    setToken: (state, action) => {
      console.log({ state });
      console.log({ user: state?.user });
      console.log({ login: state?.login });
      console.log({ token: action });
      // state.user = {
      //   ...state.user,
      //   token: action.payload
      // };
      state.token = action.payload;
      // state.userLogged = true;
      // state.isAuthenticated = true;
      // state.error = null;
    },
    loginFailure: (state, action) => {
      state.user = null;
      state.isAuthenticated = false;
      state.error = action.payload;
    },
    logoutSuccess: (state) => {
      state.token = null;
    },
    registerSuccess: (state, action) => {
      state.user = action.payload;
      state.userLogged = action.payload;
      state.isAuthenticated = true;
      state.error = null;
      state.registering = false;
    },
    registerFailure: (state, action) => {
      state.user = null;
      state.isAuthenticated = false;
      state.error = action.payload;
      state.registering = false;
    }
  }
});

export const { setToken, loginFailure, logoutSuccess, registerSuccess, registerFailure } = loginSlice.actions;

// export const loginUser = ({ name, email, password }) => async (dispatch) => {
//   try {
//     console.log('entre');
//     const res = await axios.post('/user/login', { name, email, password });
//     console.log(res);
//     const json = res.data.token;
//     dispatch(setToken(json));
//   } catch (err) {
//     dispatch(loginFailure(err.response.data.msg));
//   }
// };
export const loginUser = () => {
  console.log('voy a llorar');
};

export const loginRegister = (formValues) => async (dispatch) => {
  dispatch({ type: 'registering' });
  try {
    const res = await axios.post('/user/register', formValues);
    dispatch(registerSuccess(res.data));
  } catch (err) {
    dispatch(registerFailure(err.response.data.msg));
  }
};

export const getUserLogged = (id) => async (dispatch) => {
  try {
    const response = await axios.get(`/user/${id}`);
    const user = response.data;
    console.log('getuserlogged', user);
  } catch (error) {

  }
};

export default loginSlice.reducer;
