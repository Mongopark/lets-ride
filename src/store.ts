import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./services/auth";
import { EmailAPi } from "./services/email";
import { PhoneApi } from "./services/phone";
import { resetPasswordApi } from "./services/resetPassword";
import { userApi } from "./services/userApi";
import { profileApi } from "./services/profile";
import { walletApi } from "./services/wallet";
import UserReducer from "./features/userSlice";
import RegisterReducer from "./features/registerSlice";
import SignUpReducer from "./features/signUpSlice";
import WalletReducer from "./features/wallet/walletSlice";
import { mediaApi } from "./services/media";
import NotificationReducer from "./features/notificationSlice";

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [EmailAPi.reducerPath]: EmailAPi.reducer,
    [PhoneApi.reducerPath]: PhoneApi.reducer,
    [resetPasswordApi.reducerPath]: resetPasswordApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [profileApi.reducerPath]: profileApi.reducer,
    [walletApi.reducerPath]: walletApi.reducer,
    [mediaApi.reducerPath]: mediaApi.reducer,
    user: UserReducer,
    register: RegisterReducer,
    signUp: SignUpReducer,
    wallet: WalletReducer,
    notification: NotificationReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      authApi.middleware,
      EmailAPi.middleware,
      PhoneApi.middleware,
      resetPasswordApi.middleware,
      userApi.middleware,
      profileApi.middleware,
      walletApi.middleware,
      mediaApi.middleware
    ),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
