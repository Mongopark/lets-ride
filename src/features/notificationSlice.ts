import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { FirebaseMessagingTypes } from "@react-native-firebase/messaging";

interface NotificationState {
    notificationToken: string;
    notification: FirebaseMessagingTypes.RemoteMessage | null;
}

const initialState: NotificationState = {
    notificationToken: "",
    notification: null
}

export const NotificationSlice = createSlice({
    name: "notification",
    initialState,
    reducers: {
        addToken: (state, action: PayloadAction<{ token: string }>) => {
            state.notificationToken = action.payload.token;
        },

        addNotification: (state, action: PayloadAction<{ notification: FirebaseMessagingTypes.RemoteMessage }>) => {
            state.notification = action.payload.notification;
        },

        removeNotification: (state) => {
            state.notification = null
        }
    }
});

export default NotificationSlice.reducer;

export const { addToken, addNotification, removeNotification } = NotificationSlice.actions;

