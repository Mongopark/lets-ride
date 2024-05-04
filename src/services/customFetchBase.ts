import {
  BaseQueryFn,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/dist/query";
import { Mutex } from "async-mutex";
import { logout, setToken } from "../features/userSlice";
import { RootState } from "../store";

const baseUrl = "https://api.ndia.ng/api/v1/";

// create a new mutex
const mutex = new Mutex();

const baseQuery = fetchBaseQuery({
  baseUrl,
  prepareHeaders: (headers, { getState }) => {
    // By default, if we have a token in the store, let's use that for authenticated requests
    const token = (getState() as RootState).user.accessToken;
    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

const customFetchBase: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  // wait until the mutex is available wihtout locking it
  await mutex.waitForUnlock();
  let result = await baseQuery(args, api, extraOptions);
  if (result.error && result.error.status === 401) {
    if (!mutex.isLocked()) {
      const release = await mutex.acquire();

      try {
        // get the refresh token from the global state
        const refreshToken = (api.getState() as RootState).user.refreshToken;
        const refreshResult = await baseQuery(
          {
            url: "riders/new-access-token",
            method: "POST",
            body: {
              refreshToken: refreshToken,
            },
          },
          api,
          extraOptions
        );
        if (refreshResult.data) {
          api.dispatch(setToken(refreshResult.data.data.accessToken));
          // Retry the initial query
          result = await baseQuery(args, api, extraOptions);
        } else {
          // logout the user
          api.dispatch(logout);
          console.log("Error refreshing token");
        }
      } finally {
        // release must be called once the mutex should be released again.
        release();
      }
    } else {
      // wait until the mutex is available without locking it
      await mutex.waitForUnlock();
      result = await baseQuery(args, api, extraOptions);
    }
  }

  return result;
};

export default customFetchBase;
