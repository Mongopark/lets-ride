import { combineReducers } from "@reduxjs/toolkit";
import AddressReducer from "./slices.tsx/addressSlice";
import notificationReducer from "../features/notificationSlice";

const reducers = combineReducers({
    Address: AddressReducer,
    Notification: notificationReducer,
});

export default reducers;