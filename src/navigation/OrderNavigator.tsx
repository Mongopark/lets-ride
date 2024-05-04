import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import OrderDetails from "../screens/delivery/OrderDetails";
import OrderPicked from "../screens/delivery/OrderPicked";
import OngoingDetails from "../screens/delivery/OngoingDetails";

export type DeliveryStackParamList = {
  OrderDetails: undefined;
  OrderPicked: undefined;
  OngoingDetails: undefined;
};

const Stack = createStackNavigator<DeliveryStackParamList>();

const OrderNavigator = () => {
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
      <Stack.Screen name="OrderDetails" component={OrderDetails} />
      <Stack.Screen name="OngoingDetails" component={OngoingDetails} />
      <Stack.Screen name="OrderPicked" component={OrderPicked} />
    </Stack.Navigator>
  );
};

export default OrderNavigator;
