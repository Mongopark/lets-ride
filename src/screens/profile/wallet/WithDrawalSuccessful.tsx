import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import MainButton from "../../../components/buttons/mainButton";
import { grey900, orange500 } from "../../../constants/colors";
import { StatusBar } from "react-native";

const WithDrawalSuccessful = () => {
  const { navigate } = useNavigation<any>();
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar translucent={true} />
      <Image
        style={styles.img}
        resizeMode="cover"
        source={require("../../../../assets/images/found-pie.png")}
      />
      <Text style={styles.mainText}>Withdrawal Successful</Text>
      <Text style={styles.subText}>
        Your payment will get to you within 24 hours
      </Text>
      <View style={styles.btnContainer}>
        <MainButton
          title="Okay"
          bG={orange500}
          onPress={() => navigate("ProfileNavigator", { screen: "Wallet" })}
          outline={false}
          color={grey900}
        />
      </View>
    </SafeAreaView>
  );
};

export default WithDrawalSuccessful;

const styles = StyleSheet.create({
  img: {
    marginBottom: 16,
  },
  mainText: {
    fontSize: 24,
    fontWeight: "500",
    letterSpacing: -0.24,
    color: "black",
    marginBottom: 12,
  },
  subText: {
    color: "#A9ABB8",
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 16,
    letterSpacing: 0.14,
  },
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 16,
    position: "relative",
  },
  btnContainer: {
    position: "absolute",
    width: "100%",
    bottom: 32,
  },
});
