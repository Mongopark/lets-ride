import React, { useEffect } from "react";
import { RootState } from "./store";
import AuthNavigator from "./navigation/authNavigator";
import MainNavigator from "./navigation/mainNavigator";
import { NavigationContainer } from "@react-navigation/native";
import { useTypedSelector } from "./hooks";
import useNotification from "./hooks/useNotifications";
import { useAppDispatch } from "./hooks/useAppDispatch";
import { addToken } from "./features/notificationSlice";

const Router = () => {
  const accessToken = useTypedSelector(
    (store: RootState) => store.user.accessToken
  );

  const dispatch = useAppDispatch()

  const { registerForPushNotification } = useNotification();

  useEffect(() => {
    async function getPushToken() {
      const token = await registerForPushNotification();

      if (typeof token === 'string') {
        dispatch(addToken({ token }));
        console.log(token);
      }
    }

    getPushToken();
  }, [])

  console.log("Router accessToken: ", accessToken);
  return (
    <NavigationContainer independent={true}>
      {accessToken ? <MainNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default Router;
