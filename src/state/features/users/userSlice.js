import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const userSlice = createSlice({
  name: 'users',
  initialState: {
    // name, email, roles, sortBy, search, page, limit
    list: [],
    logged: false,
    allUsers: []
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload; /// Aca vendria los datos que me manden de login o register (info del user)
    },
    setUserLogout: (state, action) => {
      state.user = null;
    },
    setAllUsers: (state, action) => {
      state.allUsers = action.payload;
      state.list = action.payload;
    }
  }
});
export const { setUser, setUserLogout, setAllUsers } = userSlice.actions;

export default userSlice.reducer;

// name, email, roles, sortBy, search, page, limit
export const getAllUsers = () => {
  return async function (dispatch) {
    axios.get(`/user`)
      .then(r => r.data)
      .then(response => {
        dispatch(setAllUsers(response.users));
      });
  };
};

// axios.get(`/user?search=${search}&page=${currentPage}&name=${name}&email=${email}&roles=${roles}&sort=${sortBy}`)
//   .then((r) => r.data)
//   .then((response) => {
//     console.log('este console log que trae', response);
//     dispatch(setAllUsers(response.users));
//     dispatch(
//       setPagination({
//         totalPages: response.totalPages,
//         currentPage: response.currentPage
//       })
//     );
//   })
//   .catch((e) => console.log(e));

// export const getAllUsers = ({
//   name = '',
//   email = '',
//   roles = '',
//   sortBy = '',
//   currentPage = '',
//   search = ''
// }) => {
//   return async function (_dispatch, getState) {
//     const currentState = getState().login;
//     try {
//       console.log(currentState.token);
//       const instance = axios.create();
//       instance.defaults.headers.common['x-access-token'] = currentState.token;
//       const sendaxios = await instance.get(
//         `/user?search=${search}&page=${currentPage}&name=${name}&email=${email}&roles=${roles}&sort=${sortBy}`
//       );
//       console.log(sendaxios)
//       return sendaxios;
//     } catch (error) {
//       console.warn("Error al enviar datos en función 'PostPet'");
//       return error;
//     }
//   };
// };

// import axios from 'axios';

// export const getAllUsers = ({ name = '', email = '', roles = '', sortBy = '', currentPage = '', search = '' }) => {
//   return async (dispatch, getState) => {
//     const { token } = getState().login;

//     try {
//       const instance = axios.create({
//         headers: {
//           'x-access-token': token
//         }
//       });

//       const response = await instance.get(`/user?search=${search}&page=${currentPage}&name=${name}&email=${email}&roles=${roles}&sort=${sortBy}`);

//       console.log(response.data);
//       return response.data;
//     } catch (error) {
//       console.warn("Error al enviar datos en función 'getAllUsers'");
//       console.error(error);
//       throw error;
//     }
//   };
// };
