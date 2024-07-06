import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    isAuthenticated: false,
  },

  reducers: {
    signin(state, action) {
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    signout(state, action) {
      state.user = null;
      state.isAuthenticated = false;
    },
  },
});

export const { signin, signout } = userSlice.actions;
const userReducer = userSlice.reducer;
export default userReducer;
