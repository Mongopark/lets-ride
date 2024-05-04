import { createApi } from "@reduxjs/toolkit/query/react";
import customFetchBase from "./customFetchBase";
import { IWalletResponse } from "../types/wallet.model";

export const walletApi = createApi({
  reducerPath: "walletApi",
  baseQuery: customFetchBase,
  endpoints: (builder) => ({
    getWallet: builder.query<IWalletResponse, void>({
      query: () => ({
        url: "riders/wallet",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetWalletQuery } = walletApi;
