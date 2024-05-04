import { createApi } from "@reduxjs/toolkit/query/react";
import customFetchBase from "./customFetchBase";
import { userApi } from "./userApi";
import { IMediaResponse } from "../types/media.model";

export const mediaApi = createApi({
  reducerPath: "mediaApi",
  baseQuery: customFetchBase,
  endpoints: (builder) => ({
    uploadProfilePhoto: builder.mutation<IMediaResponse, FormData>({
      query: (credentials) => ({
        url: "riders/upload-profile-picture",
        method: "PUT",
        body: credentials,
      }),
      async onQueryStarted(args, { queryFulfilled, dispatch }) {
        try {
          const { data } = await queryFulfilled;
          const patchResult = dispatch(
            userApi.util.updateQueryData("getRider", undefined, (draft) => {
              draft.data.profilePhoto = data.data.file;
            })
          );
        } catch (error) {
          console.log(error);
        }
      },
    }),
  }),
});

export const { useUploadProfilePhotoMutation } = mediaApi;
