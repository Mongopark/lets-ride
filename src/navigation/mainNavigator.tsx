import { createStackNavigator } from "@react-navigation/stack";
import WelcomeScreen from "../screens/auth/welcome";
import PersonalDetailsScreen from "../screens/onboarding/personalDetails";
import TermsScreen from "../screens/auth/terms";
import RidingDetailsScreen from "../screens/onboarding/ridingDetails";
import VerificationDetailsScreen from "../screens/onboarding/verificationDetails";
import BankDetailsScreen from "../screens/onboarding/bankDetails";
import LoginScreen from "../screens/auth/login";
import AuthNavigator from "./authNavigator";
import BottomTabNavigator from "./BottomTabNavigator";
import ProfileNavigator from "./ProfileNavigator";
import OrderNavigator from "./OrderNavigator";

export type MainNavigatorStackParamList = {
  BottomTabNavigator: undefined;
  AuthNavigator: undefined;
  ProfileNavigator: undefined;
  OrderNavigator: undefined;
};

const Stack = createStackNavigator<MainNavigatorStackParamList>();
const MainNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={({}) => ({
        headerShown: false,
        headerStyle: {
          borderBottomWidth: 0,
          shadowOpacity: 0,
          elevation: 0,
        },
        title: "",
      })}
    >
      <Stack.Screen name="BottomTabNavigator" component={BottomTabNavigator} />
      <Stack.Screen name="ProfileNavigator" component={ProfileNavigator} />
      <Stack.Screen name="OrderNavigator" component={OrderNavigator} />
    </Stack.Navigator>
  );
};
export default MainNavigator;
