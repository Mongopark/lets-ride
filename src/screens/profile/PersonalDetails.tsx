import { View, StyleSheet } from "react-native";
import React from "react";
import GoBackHeader from "../../components/header/GoBackHeader";
import { useNavigation } from "@react-navigation/native";
import { Call, Lock } from "iconsax-react-native";
import { white, cream, grey900 } from "../../constants/colors";
import Dropdown from "../../components/dropDown/Dropdown";
import FixedInput from "../../components/inputs/FixedInput";
import { StatusBar } from "expo-status-bar";
import { useGetRiderQuery } from "../../services/userApi";

const PersonalDetails = () => {
  const { data: RiderData } = useGetRiderQuery();
  const { navigate } = useNavigation<any>();
  const accountDetails = [
    {
      icon: <Call size="24" color={grey900} />,
      title: "Change phone number",
      index: 1,
    },
    {
      icon: <Lock size="24" color={grey900} />,
      title: "Change password",
      index: 2,
    },
  ];
  const handleDropdownEvent = (e: any) => {
    switch (e.index) {
      case 1:
        navigate("ProfileNavigator", { screen: "ChangePhoneNumber" });
        break;
      case 2:
        navigate("ProfileNavigator", { screen: "ChangePassword" });
        break;
      default:
        break;
    }
  };

  const personalDetails = {
    label: "Full name",
    content: `${RiderData?.data?.lastName} ${RiderData?.data?.firstName}`,
  };

  return (
    <View style={styles.screenContainer}>
      <StatusBar translucent={true} backgroundColor={white} style="dark" />
      <GoBackHeader title="Personal details" />
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <FixedInput data={personalDetails} />
        </View>
        {accountDetails.map((item, index) => (
          <View key={index}>
            <Dropdown onPress={(e) => handleDropdownEvent(e)} element={item} />
          </View>
        ))}
      </View>
    </View>
  );
};

export default PersonalDetails;

const styles = StyleSheet.create({
  screenContainer: { flex: 1, backgroundColor: white },
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  inputContainer: {
    borderBottomColor: cream,
    borderBottomWidth: 1,
  },
});
