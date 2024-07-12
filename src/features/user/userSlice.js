import { db } from "@/firebase";
import { createSlice } from "@reduxjs/toolkit";
import { collection, query, where } from "firebase/firestore";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    isAuthenticated: false,
    accounts: [],
  },

  reducers: {
    signin(state, action) {
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    signout(state) {
      state.user = null;
      state.isAuthenticated = false;
    },
    addAccount(state, action) {
      state.accounts = action.payload;
    },
    removeAccount(state, action) {
      state.accounts = state.accounts.filter(
        (account) => account.account_id !== action.payload,
      );
    },
    transcationDebit(state, action) {
      const accountIndex = state.accounts.findIndex(
        (account) => account.account_id === action.payload.account_id,
      );
      state.accounts[accountIndex].balance -= action.payload.amount;
    },
    transcationCredit(state, action) {
      const accountIndex = state.accounts.findIndex(
        (account) => account.account_id === action.payload.account_id,
      );
      state.accounts[accountIndex].balance += action.payload.amount;
    },
  },
});

export const { signin, signout, addAccount, removeAccount } = userSlice.actions;
const userReducer = userSlice.reducer;
export default userReducer;
