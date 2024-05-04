import { StyleSheet, Text, View, TextInput } from "react-native";
import React, { useRef, useState } from "react";
import ScreenHeader from "../../../components/header/screenHeader";
import GoBackHeader from "../../../components/header/GoBackHeader";

import MainButton from "../../../components/buttons/mainButton";
import { white, grey900, orange500 } from "../../../constants/colors";

import { useNavigation } from "@react-navigation/native";
import Otp from "../../../components/form-comps/Otp";
import { StatusBar } from "react-native";

const ChangePhoneOtp = () => {
  const { navigate } = useNavigation<any>();
  const otpRecived = true;
  const [otp, setOtp] = useState<string>("");

  const inputRef1 = useRef<TextInput>(null);
  const inputRef2 = useRef<TextInput>(null);
  const inputRef3 = useRef<TextInput>(null);
  const inputRef4 = useRef<TextInput>(null);

  const handleOtpChange = (index: number, text: string) => {
    if (text.length <= 1) {
      setOtp((prevOtp: string) => {
        const updatedOtp = prevOtp.split("");
        updatedOtp[index] = text;
        return updatedOtp.join("");
      });

      // Move focus to the next input field
      if (text.length === 1 && index < 3) {
        switch (index) {
          case 0:
            inputRef2.current?.focus();
            break;
          case 1:
            inputRef3.current?.focus();
            break;
          case 2:
            inputRef4.current?.focus();
            break;
        }
      }
    }
  };

  const onSubmit = () => {
    navigate("ProfileNavigator", { screen: "PhoneChangedSuccess" });
  };
  return (
    <View style={styles.container}>
      <StatusBar
        translucent={true}
        backgroundColor={white}
        barStyle="dark-content"
      />
      <GoBackHeader title="Change phone number" />
      <View style={styles.screenContainer}>
        <View>
          <ScreenHeader
            title="OTP verification"
            desc="Please enter the 4 digit code sent to your
              email address."
          />
          <Otp
            otp={otp}
            handleOtpChange={handleOtpChange}
            inputRef1={inputRef1}
            inputRef2={inputRef2}
            inputRef3={inputRef3}
            inputRef4={inputRef4}
          />
          <View>
            <Text style={otpStyles.message}>
              {otpRecived ? (
                "Resend code in 00:44"
              ) : (
                <View>
                  No code received?{" "}
                  <Text style={otpStyles.resendTxt}>Resend it</Text>
                </View>
              )}
            </Text>
          </View>
        </View>
        <View style={styles.btnContainer}>
          <MainButton
            title="Verify"
            outline={false}
            onPress={onSubmit}
            bG={orange500}
            color={grey900}
          />
        </View>
      </View>
    </View>
  );
};

export default ChangePhoneOtp;

const otpStyles = StyleSheet.create({
  message: {
    textAlign: "center",
  },
  resendTxt: {
    fontWeight: "bold",
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: white,
  },

  screenContainer: {
    width: "100%",
    paddingHorizontal: 16,
    flex: 1,
    justifyContent: "space-between",
  },
  btn: {
    position: "absolute",
    bottom: 10,
    width: "100%",
    marginLeft: 10,
  },
  btnContainer: {
    paddingBottom: 32,
  },
});
