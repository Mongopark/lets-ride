import { createStackNavigator } from "@react-navigation/stack";
import WelcomeScreen from "../screens/auth/welcome";
import PersonalDetailsScreen from "../screens/onboarding/personalDetails";
import TermsScreen from "../screens/auth/terms";
import RidingDetailsScreen from "../screens/onboarding/ridingDetails";
import VerificationDetailsScreen from "../screens/onboarding/verificationDetails";
import BankDetailsScreen from "../screens/onboarding/bankDetails";
import LoginScreen from "../screens/auth/login";
import EmailOtp from "../screens/auth/EmailOtp";
import ConfirmOtp from "../screens/auth/forgotPassword/ConfirmOtp";
import SendOtp from "../screens/auth/forgotPassword/SendOtp";
import ResetPassword from "../screens/auth/forgotPassword/ResetPassword";

export type RootStackParamList = {
  Welcome: undefined;
  Login: undefined;
  Terms: undefined;
  PersonalDetails: undefined;
  RidingDetails: undefined;
  VerificationDetails: undefined;
  BankDetails: undefined;
  Dashboard: undefined;
  EmailOtp: undefined;
  ConfirmOtp: undefined;
  SendOtp: undefined;
  ResetPassword: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();
const AuthNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={"Welcome"}
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
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Terms" component={TermsScreen} />
      <Stack.Screen name="PersonalDetails" component={PersonalDetailsScreen} />
      <Stack.Screen name="RidingDetails" component={RidingDetailsScreen} />
      <Stack.Screen
        name="VerificationDetails"
        component={VerificationDetailsScreen}
      />
      <Stack.Screen name="BankDetails" component={BankDetailsScreen} />
      <Stack.Screen name="EmailOtp" component={EmailOtp} />
      {/* Reset password */}
      <Stack.Screen name="ConfirmOtp" component={ConfirmOtp} />
      <Stack.Screen name="SendOtp" component={SendOtp} />
      <Stack.Screen name="ResetPassword" component={ResetPassword} />
    </Stack.Navigator>
  );
};
export default AuthNavigator;
