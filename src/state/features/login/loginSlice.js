import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'sonner';

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
    loginSuccessful: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isAuthenticated = true;
      state.userLogged = true;
      state.error = null;
    },
    loginFailure: (state, action) => {
      state.user = null;
      state.isAuthenticated = false;
      state.error = action.payload;
    },
    logoutSuccess: (state) => {
      state.user = null;
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
    },
    setUpdateDataUser: (state, action) => {
      state.user = { ...state.user, ...action.payload };
    }
  }
});

export const { loginSuccessful, loginFailure, logoutSuccess, registerSuccess, registerFailure, setUpdateDataUser } = loginSlice.actions;

export const loginUser = ({ email, password }) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post('/user/login', { email, password });
      const instance = axios.create();
      instance.defaults.headers.common['x-access-token'] = data.token;
      const user = await instance.get('/user/profile', {
        timeout: 5000
      });
      dispatch(loginSuccessful({ token: data.token, user: user.data.user }));
      window.location.assign('/');
    } catch (error) {
      toast.error('Verifique la contraseña y email');
      // dispatch(loginFailure(error.response.data.msg));
    }
  };
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
  } catch (error) {
    toast.error('Intente nuevamente');
  }
};

export const updateUserData = (userData) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.put('/user/update', userData);
      await dispatch(setUpdateDataUser(userData));
      toast.success('Actulizacion con exito');
    } catch (error) {
      toast.error('Intente nuevamente');
    }
  };
};

export const updateUserPassword = (password) => {
  return async () => {
    try {
      const { data } = await axios.post('/user/reset', password);
      toast.success('Actulizacion con exito');
    } catch (error) {
      toast.error('Intente nuevamente');
    }
  };
};

export default loginSlice.reducer;
