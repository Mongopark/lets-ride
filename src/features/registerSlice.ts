import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface RegisterSlice {
  id: string;
  email: string;
  passwordResetToken: string;
}

const initialState: RegisterSlice = {
  id: "",
  email: "",
  passwordResetToken: "",
};

const registerSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setId: (state, action: PayloadAction<string>) => {
      state.id = action.payload;
    },
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setPasswordResetToken: (state, action: PayloadAction<string>) => {
      state.passwordResetToken = action.payload;
    },
  },
});

export const { setId, setEmail, setPasswordResetToken } = registerSlice.actions;
export default registerSlice.reducer;
