import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  EmailConfirmData,
  EmailResponse,
  SendEmailOtp,
  VerifyEmailResponse,
} from "../types/email.model";

export const EmailAPi = createApi({
  reducerPath: "emailApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.ndia.ng/api/v1/",
  }),
  endpoints: (builder) => ({
    sendOtp: builder.mutation<EmailResponse, SendEmailOtp>({
      query: (credentials) => ({
        url: "send-otp",
        method: "POST",
        body: credentials,
      }),
    }),
    confirmOtp: builder.mutation<VerifyEmailResponse, EmailConfirmData>({
      query: (credentials) => ({
        url: "confirm-otp",
        method: "POST",
        body: credentials,
      }),
    }),
  }),
});

export const { useSendOtpMutation, useConfirmOtpMutation } = EmailAPi;
