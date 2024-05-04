import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { LoginResponseData } from "../types/login.model";
import { authApi } from "../services/auth";
import { IRider } from "../types/user.model";

const initialState: LoginResponseData = {
  rider: {
    id: "",
    email: "",
    phoneNumber: "",
    firstName: "",
    lastName: "",
    isEmailVerified: false,
    isPhoneVerified: false,
    status: "",
    passwordResetToken: null,
    refreshToken: "",
    userType: "",
    availability: "",
    profilePhoto: null,
    ninPhoto: null,
    fcmToken: null,
    isNinVerified: false,
    vehicleType: "",
    vehicleBrand: "",
    plateNumber: "",
    rating: 0,
    nin: "",
    lat: null,
    lon: null,
    createdAt: "",
    updatedAt: "",
  },
  accessToken: "",
  refreshToken: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<LoginResponseData>) => {
      // state.token = action.payload.token;
      // state.email = action.payload.email;
      state = action.payload;
    },
    setToken: (state, action: PayloadAction<string>) => {
      state.accessToken = action.payload;
    },
    logout: (state) => {
      state.accessToken = "";
    },
    setRefreshToken: (state, action: PayloadAction<string>) => {
      state.refreshToken = action.payload;
    },
    setRider: (state, action: PayloadAction<IRider>) => {
      // state.refreshToken = action.payload;
      state.rider = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      authApi.endpoints.logout.matchFulfilled,
      () => initialState
    );
  },
});

export const { setUser, setToken, logout, setRefreshToken, setRider } =
  userSlice.actions;
export default userSlice.reducer;
