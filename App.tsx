import "react-native-gesture-handler";
import { useFonts } from "expo-font";
import { useEffect } from "react";
import useNotification from './src/hooks/useNotifications';
// import { NavigationContainer } from "@react-navigation/native";
import SplashScreen from "./src/screens/splash/splashScreen";
// import MainNavigator from "../navigation/mainNavigator";
// import AuthNavigator from "../navigation/authNavigator";
import { Provider } from "react-redux";
// import store from "../store/store";
import { store } from "./src/store";
import { RootState } from "./src/store/store";
import Toast from "react-native-toast-message";
import Router from "./src/Router";

const App = () => {
  const [loaded, error] = useFonts({
    satoshi: require("./assets/fonts/Satoshi-Regular.otf"),
    "satoshi-bold": require("./assets/fonts/Satoshi-Bold.otf"),
    "satoshi-medium": require("./assets/fonts/Satoshi-Medium.otf"),
    "satoshi-light": require("./assets/fonts/Satoshi-Light.otf"),
  });

  useEffect(() => {
    if (error) throw error;
  }, [error]);

  return loaded ? (
    <Provider store={store}>
      <Router />
      <Toast />
    </Provider>
  ) : (
    <SplashScreen />
  );
};
export default App;


