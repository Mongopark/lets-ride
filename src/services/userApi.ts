import { createApi } from "@reduxjs/toolkit/query/react";
import customFetchBase from "./customFetchBase";
import { IRiderResponse } from "../types/user.model";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: customFetchBase,
  endpoints: (builder) => ({
    getRider: builder.query<IRiderResponse, void>({
      query: () => ({
        url: `/riders`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetRiderQuery } = userApi;
