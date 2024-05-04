import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Receipt1, ChartCircle, User } from "iconsax-react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { Text, StyleSheet } from "react-native";
import { grey50, orange500 } from "../constants/colors";
import DashboardTab from "../screens/tabs/dashboard";
import DeliveriesTab from "../screens/tabs/deliveries";
import AccountTab from "../screens/tabs/Accounts";

export type RootStackParamList = {
  Dashboard: undefined;
  Deliveries: undefined;
  Account: undefined;
};

interface TabBarIconProps {
  color: string;
  size: number;
}

interface LabelProps {
  color: string;
}
const DashboardLabel: React.FC<LabelProps> = ({ color }) => (
  <Text style={{ color: color, fontSize: 10 }}>Dashboard</Text>
);
const DeliveriesLabel: React.FC<LabelProps> = ({ color }) => (
  <Text style={{ color: color, fontSize: 10 }}>Deliveries</Text>
);
const AccountLable: React.FC<LabelProps> = ({ color }) => (
  <Text style={{ color: color, fontSize: 10 }}>Account</Text>
);

const DashboardIcon: React.FC<TabBarIconProps> = ({ color, size }) => (
  <ChartCircle
    color={color}
    size={size}
    variant={color === orange500 ? "Bold" : "Linear"}
  />
);
const DeliveriesIcon: React.FC<TabBarIconProps> = ({ color, size }) => (
  <Receipt1
    color={color}
    size={size}
    variant={color === orange500 ? "Bold" : "Linear"}
  />
);
const AccountIcon: React.FC<TabBarIconProps> = ({ color, size }) => (
  <User
    color={color}
    size={size}
    variant={color === orange500 ? "Bold" : "Linear"}
  />
);

const Tab = createBottomTabNavigator<RootStackParamList>();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({}) => ({
        tabBarActiveTintColor: orange500,
        tabBarInactiveTintColor: grey50,
        tabBarStyle: styles.tabBar,
      })}
    >
      <Tab.Screen
        name="Dashboard"
        component={DashboardTab}
        options={{
          tabBarIcon: DashboardIcon,
          tabBarLabel: DashboardLabel,
          headerShown: false,
          headerTitle: "",
        }}
      />
      <Tab.Screen
        name="Deliveries"
        component={DeliveriesTab}
        options={{
          tabBarIcon: DeliveriesIcon,
          tabBarLabel: DeliveriesLabel,
          headerShown: false,
          headerTitle: "",
          tabBarLabelStyle: { fontSize: 10 },
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountTab}
        options={{
          tabBarIcon: AccountIcon,
          tabBarLabel: AccountLable,
          headerShown: false,
          headerTitle: "",
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;

const styles = StyleSheet.create({
  tabBar: {
    paddingHorizontal: 16,
    paddingTop: 8,
  },
});
