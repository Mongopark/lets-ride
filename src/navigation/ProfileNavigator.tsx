import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  PersonalDetails,
  VerificationDetails,
  Wallet,
  ChatWithSupport,
  Faq,
  FaqDetail,
  ChangePhoneNumber,
  ChangePassword,
} from "../screens/profile";

export type ProfileStackParamList = {
  PersonalDetails: undefined;
  VerificationDetails: undefined;
  Wallet: undefined;
  ChatWithSupport: undefined;
  Faq: undefined;
  FaqDetail: undefined;
  ChangePhoneNumber: undefined;
  ChangePassword: undefined;
};

const Stack = createStackNavigator<ProfileStackParamList>();

const ProfileNavigator = () => {
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
      <Stack.Screen name="PersonalDetails" component={PersonalDetails} />
      <Stack.Screen
        name="VerificationDetails"
        component={VerificationDetails}
      />
      <Stack.Screen name="Wallet" component={Wallet} />
      <Stack.Screen name="ChatWithSupport" component={ChatWithSupport} />
      <Stack.Screen name="Faq" component={Faq} />
      <Stack.Screen name="FaqDetail" component={FaqDetail} />
      <Stack.Screen name="ChangePhoneNumber" component={ChangePhoneNumber} />
      <Stack.Screen name="ChangePassword" component={ChangePassword} />
    </Stack.Navigator>
  );
};

export default ProfileNavigator;
