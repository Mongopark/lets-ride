import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  ConfirmOtpData,
  ConfirmOtpResponse,
  SendOtpData,
  SendOtpResponse,
} from "../types/sms.model";

export const PhoneApi = createApi({
  reducerPath: "phoneApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.ndia.ng/api/v1/sms/",
  }),
  endpoints: (builder) => ({
    sendOtp: builder.mutation<SendOtpResponse, SendOtpData>({
      query: (credentials) => ({
        url: "send-otp",
        method: "POST",
        body: credentials,
      }),
    }),
    confirmOtp: builder.mutation<ConfirmOtpResponse, ConfirmOtpData>({
      query: (credentials) => ({
        url: "confirm-otp",
        method: "POST",
        body: credentials,
      }),
    }),
  }),
});
