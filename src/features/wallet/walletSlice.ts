import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IWallet } from "../../types/wallet.model";

const initialState: IWallet = {
  id: "",
  balance: 0,
  status: "",
  userId: "",
  userType: "",
  bankName: "",
  bankAccountNumber: "",
  accountName: "",
  CreatedAt: "",
  updatedAt: "",
  transactions: [],
};

const walletSlice = createSlice({
  name: "wallet",
  initialState,
  reducers: {
    setWallet: (state, action: PayloadAction<IWallet>) => {
      state = action.payload;
    },
  },
});

export const { setWallet } = walletSlice.actions;
export default walletSlice.reducer;
