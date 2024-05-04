import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  PersonalDetailsProps,
  SignUpResponse,
  SignUpUpdateModel,
} from "../types/sign.model";
import { LoginData } from "../types/login.model";
import customFetchBase from "./customFetchBase";
import { LogoutModel, LogoutResponse } from "../types/logout.model";
import { IUserResponse } from "../types/user.model";
import {
  IRefreshTokenRequest,
  IRefreshTokenResponse,
} from "../types/refreshToken";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.ndia.ng/api/v1/" }),
  endpoints: (builder) => ({
    register: builder.mutation<SignUpResponse, PersonalDetailsProps>({
      query: (credentials) => ({
        url: "riders/signup",
        method: "POST",
        body: credentials,
      }),
    }),
    login: builder.mutation<IUserResponse, LoginData>({
      query: (credentials) => ({
        url: "riders/login",
        method: "POST",
        body: credentials,
      }),
    }),
    patchRidesDetails: builder.mutation<SignUpResponse, SignUpUpdateModel>({
      query: (credentials) => ({
        url: `riders/${credentials.id}`,
        method: "PATCH",
        body: credentials.data,
      }),
    }),
    logout: builder.mutation<LogoutResponse, LogoutModel>({
      query: (credentials) => ({
        url: "riders/logout",
        method: "POST",
        body: credentials,
      }),
    }),
    refreshToken: builder.mutation<IRefreshTokenResponse, IRefreshTokenRequest>(
      {
        query: (credentials) => ({
          url: "riders/refresh-access-token",
          method: "POST",
          body: credentials,
        }),
      }
    ),
  }),
});

export const {
  useRegisterMutation,
  useLoginMutation,
  usePatchRidesDetailsMutation,
  useLogoutMutation,
} = authApi;
