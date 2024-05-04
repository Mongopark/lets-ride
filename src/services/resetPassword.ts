import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  ConfirmOtpPassReset,
  ResetPasswordAuthRequest,
  ResetPasswordOtpRequest,
  ResetPasswordResponse,
} from "../types/resetPassword.model";
import { EmailConfirmData } from "../types/email.model";

export const resetPasswordApi = createApi({
  reducerPath: "resetPassword",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.ndia.ng/api/v1/",
  }),
  endpoints: (builder) => ({
    resetPasswordOtp: builder.mutation<
      ResetPasswordResponse,
      ResetPasswordOtpRequest
    >({
      query: (credentials) => ({
        url: "riders/reset-password/otp",
        method: "PATCH",
        body: credentials,
      }),
    }),
    resetPasswordAuth: builder.mutation<
      ResetPasswordResponse,
      ResetPasswordAuthRequest
    >({
      query: (credentials) => ({
        url: "riders/reset-password/auth",
        method: "PATCH",
        body: credentials,
      }),
    }),
    confirmOtp: builder.mutation<ConfirmOtpPassReset, EmailConfirmData>({
      query: (credentials) => ({
        url: "email/confirm-otp",
        method: "POST",
        body: credentials,
      }),
    }),
  }),
});

export const {
  useResetPasswordOtpMutation,
  useResetPasswordAuthMutation,
  useConfirmOtpMutation,
} = resetPasswordApi;
