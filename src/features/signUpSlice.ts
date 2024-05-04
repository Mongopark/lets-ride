import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import {
  IBankDetails,
  IPersonalDetails,
  IRidingDetails,
  ISignUp,
  IVerificationDetails,
} from "../types/signUp.model";

const initialState: ISignUp = {
  email: "",
  firstName: "",
  lastName: "",
  password: "",
  passwordConfirm: "",
  phoneNumber: "",
  availability: "",
  vehicleType: "",
  nin: "",
  lat: 0,
  lon: 0,
  vehicleBrand: "",
  plateNumber: "",
  // bankName: "",
  // bankAccountNumber: "",
  // accountName: "",
};

const signUpSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setPersonalDetails: (
      state,
      action: PayloadAction<IPersonalDetails>
    ): void => {
      state.email = action.payload.email;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.password = action.payload.password;
      state.passwordConfirm = action.payload.passwordConfirm;
      state.phoneNumber = action.payload.phoneNumber;
    },
    setRidingDetails: (state, action: PayloadAction<IRidingDetails>): void => {
      state.availability = action.payload.availability;
    },
    // setBankingDetails: (state, action: PayloadAction<IBankDetails>): void => {
    //   state.bankName = action.payload.bankName;
    //   state.bankAccountNumber = action.payload.bankAccountNumber;
    //   state.accountName = action.payload.accountName;
    // },
    setVerificationDetails: (
      state,
      action: PayloadAction<IVerificationDetails>
    ): void => {
      state.vehicleType = action.payload.vehicleType;
      state.nin = action.payload.nin;
      state.vehicleBrand = action.payload.vehicleBrand;
      state.plateNumber = action.payload.plateNumber;
    },
  },
});

export const {
  setPersonalDetails,
  // setBankingDetails,
  setRidingDetails,
  setVerificationDetails,
} = signUpSlice.actions;
export default signUpSlice.reducer;
