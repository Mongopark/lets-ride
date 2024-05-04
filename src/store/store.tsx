import { configureStore, ThunkAction } from "@reduxjs/toolkit";
import { FLUSH, PAUSE, PERSIST, persistReducer, PURGE, REGISTER, REHYDRATE }from 'redux-persist';
import reducers from "./reducers";
import { Action } from "@react-navigation/routers/lib/typescript/src/CommonActions";
import AsyncStorage from '@react-native-async-storage/async-storage'; 

const persistConfig = {
    key: "root",
    version: 1,
    storage: AsyncStorage,
}
  
const persistedReducer = persistReducer(persistConfig,reducers)
const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          thunk: true,
          serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, REGISTER, PURGE, PAUSE, PERSIST],
          },
        }),
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, unknown, Action>;
export default store;