import { View, Image, StyleSheet, Text, TouchableOpacity, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { grey300, grey900, orange500 } from "../../constants/colors";
import { Loginstyles } from "../../styles/screens/auth/login.styles";
import ScreenHeader from "../../components/header/screenHeader";
import { LOGO_SM } from "../../../assets/images/image";
import LoadingModal from "../../modals/LoadingModal";
import Toast from "react-native-toast-message";
import CustomButton from "../../components/buttons/CustomButton";
import PinInput from "../../components/inputs/PinInput";
import {
  useConfirmOtpMutation,
  useSendOtpMutation,
} from "../../services/email";
import { useTypedSelector } from "../../hooks";
import { RootState } from "../../store";

const EmailOtp = () => {
  const [confirmOtp, { isLoading: loginLoading }] = useConfirmOtpMutation();
  const [resendOtp, { isLoading: resendOtpLoading }] = useSendOtpMutation();
  const [pinValues, setPinValues] = useState(Array(4).fill(""));
  const handlePinChange = (index: number, value: Text) => {
    // Update the pinValues array with the new value at the specified index
    const newPinValues = [...pinValues];
    newPinValues[index] = value;
    setPinValues(newPinValues);
  };
  const [count, setCount] = useState<number>(44);
  const { navigate } = useNavigation<any>();
  const navigation = useNavigation<any>();
  const registerationEmail = useTypedSelector(
    (store: RootState) => store.register.email
  );

  const isValidOtp = pinValues.join("").length === 4;

  useEffect(() => {
    const interval = setInterval(() => {
      if (count > 0) {
        setCount(count - 1);
      } else {
        clearInterval(interval);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [count]);

  const handleResendOtp = async () => {
    const data = {
      email: registerationEmail,
      userType: "rider",
      otpType: "emailverification",
    };
    try {
      const resendOtpResponse = await resendOtp(data).unwrap();
      if (resendOtpResponse.message) {
        Toast.show({
          text1: "Success",
          text2: resendOtpResponse.message,
          position: "top",
          type: "success",
        });
      }
    } catch (error: any) {
      Toast.show({
        type: "error",
        text1: "Error",
        text2: error.data.message,
        position: "top",
      });
    }
  };

  const onSubmit = async () => {
    const inputValue = pinValues.join("");
    try {
      const confirmOtpResponse = await confirmOtp({
        otp: inputValue,
        userType: "rider",
        otpType: "emailverification",
      }).unwrap();
      if (confirmOtpResponse.success) {
        Toast.show({
          type: "success",
          text1: "Success",
          text2: confirmOtpResponse.message,
          position: "top",
        });
        navigate("Login");
      }
    } catch (error: any) {
      Toast.show({
        type: "error",
        text1: "Error",
        text2: error.data.message,
        position: "top",
      });
    }
    console.log(pinValues.join(""));
  };
  return (
    <SafeAreaView style={Loginstyles.container}>
      <ScrollView
        style={Loginstyles.inputContainer}
        showsVerticalScrollIndicator={false}
      >
        <View style={Loginstyles.logoContainer}>
          <Image style={Loginstyles.logo} source={LOGO_SM} />
        </View>
        <ScreenHeader
          title="Email verification"
          desc="Please enter the 4 digit code sent to your email address"
        />
        <View style={styles.otpContainer}>
          <PinInput
            length={4}
            pinValues={pinValues}
            onPinChange={handlePinChange}
          />
        </View>
        {count === 0 ? (
          <View style={styles.rowContainer}>
            <Text style={styles.greyText}>No code received ? </Text>
            <TouchableOpacity onPress={() => handleResendOtp()}>
              <Text style={styles.orangeText}>Resend it</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.rowContainer}>
            <Text style={styles.greyText}>Resend code in </Text>
            <Text style={styles.greyText}>
              0:{count.toString().length > 1 ? count : `0${count}`}
            </Text>
          </View>
        )}
      </ScrollView>
      <View style={Loginstyles.loginBtn}>
        <CustomButton
          title="Verify"
          bG={orange500}
          onPress={() => onSubmit()}
          outline={false}
          color={grey900}
          disabled={!isValidOtp}
        />
      </View>
      {loginLoading && <LoadingModal />}
    </SafeAreaView>
  );
};

export default EmailOtp;

const styles = StyleSheet.create({
  otpContainer: {},
  rowContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },
  greyText: {
    color: grey300,
    fontSize: 14,
    lineHeight: 16,
  },
  orangeText: {
    color: orange500,
    fontSize: 14,
    lineHeight: 16,
  },
});
