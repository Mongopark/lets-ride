import { Image, View } from "react-native";
import React from "react";
import ScreenHeader from "../../../components/header/screenHeader";
import MainButton from "../../../components/buttons/mainButton";
import { grey900, orange500 } from "../../../constants/colors";
import { styles } from "../../../styles/Message";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

const PasswordChangedSuccess = () => {
  const { navigate } = useNavigation<any>();
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar translucent={true} />
      <View style={styles.messageContainer}>
        <Image source={require("../../../../assets/images/found-pie.png")} />
        <ScreenHeader
          title="New password set"
          desc="Your new password has been set, you can now proceed to log into your account."
        />
      </View>
      <View style={styles.btn}>
        <MainButton
          title="Okay"
          outline={false}
          onPress={() => {
            navigate("PersonalDetails");
          }}
          bG={orange500}
          color={grey900}
        />
      </View>
    </SafeAreaView>
  );
};

export default PasswordChangedSuccess;
