import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { useNavigate } from 'react-router';

const loginSlice = createSlice({
  name: 'login',
  initialState: {
    user: {},
    isAuthenticated: false,
    error: null,
    registering: false,
    userLogged: false
  },
  reducers: {
    loginSuccess: (state, action) => {
      state.user = action.payload;
      state.userLogged = true;
      state.isAuthenticated = true;
      state.error = null;
    },
    loginFailure: (state, action) => {
      state.user = null;
      state.isAuthenticated = false;
      state.error = action.payload;
    },
    logoutSuccess: (state) => {
      state.userLogged = false;
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

export const { loginSuccess, loginFailure, logoutSuccess, registerSuccess, registerFailure } = loginSlice.actions;

export const loginUser = ({ name, email, password }) => async (dispatch) => {
  try {
    const res = await axios.post('http://localhost:3001/user/login', { name, email, password });
    const json = res.data.token;
    dispatch(loginSuccess(json));
  } catch (err) {
    dispatch(loginFailure(err.response.data.msg));
  }
};

export const loginRegister = (formValues) => async (dispatch) => {
  dispatch({ type: 'registering' });
  try {
    const res = await axios.post('http://localhost:3001/user/register', formValues);
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
