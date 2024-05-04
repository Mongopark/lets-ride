import { View, Image, ScrollView } from "react-native";
import React, { useState } from "react";
import { Formik } from "formik";
import { SafeAreaView } from "react-native-safe-area-context";
import { grey900, orange500 } from "../../../constants/colors";
import {
  initialValues,
  validationSchema,
  ResetProps,
} from "../../../validators/resetPassword";
import { Loginstyles } from "../../../styles/screens/auth/login.styles";
import ScreenHeader from "../../../components/header/screenHeader";
import AccountInputs from "../../../components/form-comps/accountInputs";
import { LOGO_SM } from "../../../../assets/images/image";
import CustomButton from "../../../components/buttons/CustomButton";
import { Eye, EyeSlash } from "iconsax-react-native";
import { useResetPasswordOtpMutation } from "../../../services/resetPassword";
import Toast from "react-native-toast-message";
import { useNavigation } from "@react-navigation/native";
import LoadingModal from "../../../modals/LoadingModal";
import { useTypedSelector } from "../../../hooks";
import { RootState } from "../../../store";

const ResetPassword = () => {
  const { navigate } = useNavigation<any>();
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };
  const [resetPasswordOtp, { isLoading: resetPasswordOtpLoading }] =
    useResetPasswordOtpMutation();

  const passResetToken = useTypedSelector(
    (store: RootState) => store.register.passwordResetToken
  );
  const onSubmit = async (values: ResetProps) => {
    try {
      const resetPasswordOtpResponse = await resetPasswordOtp({
        ...values,
        token: passResetToken,
      }).unwrap();
      if (resetPasswordOtpResponse.success) {
        Toast.show({
          type: "success",
          text1: "Success",
          text2: resetPasswordOtpResponse.message,
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
          <View style={Loginstyles.logoContainer}>
            <Image style={Loginstyles.logo} source={LOGO_SM} />
          </View>
          <ScreenHeader
            title="Welcome back"
            desc="Please enter your details below to continue using your Ndia account."
          />
          <ScrollView
            style={Loginstyles.inputContainer}
            showsVerticalScrollIndicator={false}
          >
            <AccountInputs
              label="Password"
              placeholder="at least 8 characters"
              icon={true}
              isPassword={true}
              variant={
                showPassword ? (
                  <EyeSlash size="16" color={grey900} />
                ) : (
                  <Eye size="16" color={grey900} />
                )
              }
              showPassword={showPassword}
              toggleIcon={togglePasswordVisibility}
              onChange={handleChange("password")}
              onBlur={handleBlur("password")}
              touched={touched.password}
              value={values.password}
              error={errors.password}
            />
            <AccountInputs
              label="Confirm password"
              placeholder="at least 8 characters"
              icon={true}
              isPassword={true}
              variant={
                showConfirmPassword ? (
                  <EyeSlash size="16" color={grey900} />
                ) : (
                  <Eye size="16" color={grey900} />
                )
              }
              showPassword={showConfirmPassword}
              toggleIcon={toggleConfirmPasswordVisibility}
              onChange={handleChange("passwordConfirm")}
              onBlur={handleBlur("passwordConfirm")}
              touched={touched.passwordConfirm}
              value={values.passwordConfirm}
              error={errors.passwordConfirm}
            />
          </ScrollView>
          <View style={Loginstyles.loginBtn}>
            <CustomButton
              title="Change Password"
              bG={orange500}
              onPress={handleSubmit}
              outline={false}
              color={grey900}
              disabled={!isValid}
            />
          </View>
          {resetPasswordOtpLoading && <LoadingModal />}
        </SafeAreaView>
      )}
    </Formik>
  );
};

export default ResetPassword;
