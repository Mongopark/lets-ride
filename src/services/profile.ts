import { createApi } from "@reduxjs/toolkit/query/react";
import customFetchBase from "./customFetchBase";
import {
  IEditPassword,
  IEditPasswordResponse,
  IProfileEdit,
  IProfileResponse,
} from "../types/profile.model";

export const profileApi = createApi({
  reducerPath: "profileApi",
  baseQuery: customFetchBase,
  endpoints: (builder) => ({
    patchPassword: builder.mutation<IEditPasswordResponse, IEditPassword>({
      query: (credentials) => ({
        url: "riders/reset-password/auth",
        method: "PATCH",
        body: credentials,
      }),
    }),
    patchProfile: builder.mutation<IProfileResponse, IProfileEdit>({
      query: (credentials) => ({
        url: "/riders",
        method: "PATCH",
        body: credentials,
      }),
    }),
  }),
});

export const { usePatchPasswordMutation, usePatchProfileMutation } = profileApi;
