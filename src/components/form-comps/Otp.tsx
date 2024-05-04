import { View, TextInput, StyleSheet } from "react-native";
import React from "react";
import { grey40, orange500, white } from "../../constants/colors";

type OtpProps = {
  otp: string;
  handleOtpChange: (index: number, text: string) => void;
  inputRef1: React.RefObject<TextInput>;
  inputRef2: React.RefObject<TextInput>;
  inputRef3: React.RefObject<TextInput>;
  inputRef4: React.RefObject<TextInput>;
};

const Otp = ({
  otp,
  handleOtpChange,
  inputRef1,
  inputRef2,
  inputRef3,
  inputRef4,
}: OtpProps) => {
  return (
    <View style={otpStyles.otpContainer}>
      <TextInput
        ref={inputRef1}
        style={otpStyles.otpInput}
        onChangeText={(text) => handleOtpChange(0, text)}
        value={otp[0] || ""}
        keyboardType="numeric"
        maxLength={1}
      />
      <TextInput
        ref={inputRef2}
        style={otpStyles.otpInput}
        onChangeText={(text) => handleOtpChange(1, text)}
        value={otp[1] || ""}
        keyboardType="numeric"
        maxLength={1}
      />
      <TextInput
        ref={inputRef3}
        style={otpStyles.otpInput}
        onChangeText={(text) => handleOtpChange(2, text)}
        value={otp[2] || ""}
        keyboardType="numeric"
        maxLength={1}
      />
      <TextInput
        ref={inputRef4}
        style={otpStyles.otpInput}
        onChangeText={(text) => handleOtpChange(3, text)}
        value={otp[3] || ""}
        keyboardType="numeric"
        maxLength={1}
      />
    </View>
  );
};

export default Otp;

const otpStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
  },
  otpContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30,
  },
  otpInput: {
    width: 56,
    height: 56,
    backgroundColor: grey40,
    borderRadius: 10,
    marginHorizontal: 5,
    fontSize: 24,
    textAlign: "center",
  },
  message: {
    textAlign: "center",
    fontSize: 14,
  },
  resendTxt: {
    fontWeight: "bold",
    fontSize: 14,
    color: orange500,
  },
  resendContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 3,
  },
});
