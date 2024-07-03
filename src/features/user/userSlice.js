import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    isAuthenticated: false,
  },

  reducers: {
    login(state, action) {
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    logout(state, action) {
      state.user = null;
      state.isAuthenticated = false;
    },
  },
});


export const { login, logout } = userSlice.actions;
const userReducer = userSlice.reducer;
export default userReducer;