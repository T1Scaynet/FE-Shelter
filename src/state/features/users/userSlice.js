import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'users',
  initialState: {
    list: [],
    logged: false,
    user: {
      name: 'EL bicho',
      token: false
    }
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload; /// Aca vendria los datos que me manden de login o register (info del user)
    },
    setUserLogout: (state, action) => {
      state.user = null;
    }
  }
});
export const { setUser, setUserLogout } = userSlice.actions;

export default userSlice.reducer;
