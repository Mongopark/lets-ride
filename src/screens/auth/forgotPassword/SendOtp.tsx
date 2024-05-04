import { Text, View, Image, ScrollView } from "react-native";
import React, { useState } from "react";
import { Formik } from "formik";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { grey900, orange500 } from "../../../constants/colors";
import MainButton from "../../../components/buttons/mainButton";
import {
  initialValues,
  validationSchema,
  signupProps,
} from "../../../validators/PassSendOtp";
import { Loginstyles } from "../../../styles/screens/auth/login.styles";
import ScreenHeader from "../../../components/header/screenHeader";
import AccountInputs from "../../../components/form-comps/accountInputs";
import { LOGO_SM } from "../../../../assets/images/image";
import LoadingModal from "../../../modals/LoadingModal";
import CustomButton from "../../../components/buttons/CustomButton";
import { useSendOtpMutation } from "../../../services/email";
import Toast from "react-native-toast-message";
import { useAppDispatch } from "../../../hooks";
import { setEmail } from "../../../features/registerSlice";

const SendOtp = () => {
  const [sendOtp, { isLoading: sendOtpLoading }] = useSendOtpMutation();
  const { navigate } = useNavigation<any>();
  const dispatch = useAppDispatch();
  const onSubmit = async (values: signupProps) => {
    const data = {
      email: values.email,
      userType: "rider",
      otpType: "passwordreset",
    };
    try {
      const sendOtpResponse = await sendOtp(data).unwrap();
      if (sendOtpResponse.success) {
        Toast.show({
          text1: "Success",
          text2: sendOtpResponse.message,
          type: "success",
          position: "top",
        });
        dispatch(setEmail(values.email));
        navigate("ConfirmOtp");
      }
    } catch (error: any) {
      Toast.show({
        text1: "Error",
        text2: error.data.message,
        type: "error",
        position: "top",
      });
    }
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        touched,
        isValid,
      }) => (
        <SafeAreaView style={Loginstyles.container}>
          <ScrollView
            style={Loginstyles.inputContainer}
            showsVerticalScrollIndicator={false}
          >
            <View style={Loginstyles.logoContainer}>
              <Image style={Loginstyles.logo} source={LOGO_SM} />
            </View>
            <ScreenHeader
              title="Reset password OTP"
              desc="Please enter your email below to registered with your Ndia account."
            />
            <AccountInputs
              label="Email address"
              placeholder="Enter your email address"
              onChange={handleChange("email")}
              onBlur={handleBlur("email")}
              touched={touched.email}
              value={values.email}
              isPassword={false}
              error={errors.email}
            />
          </ScrollView>
          <View style={Loginstyles.loginBtn}>
            <CustomButton
              title="Send OTP"
              bG={orange500}
              onPress={handleSubmit}
              outline={false}
              color={grey900}
              disabled={!isValid}
            />
          </View>
          {sendOtpLoading && <LoadingModal />}
        </SafeAreaView>
      )}
    </Formik>
  );
};

export default SendOtp;
