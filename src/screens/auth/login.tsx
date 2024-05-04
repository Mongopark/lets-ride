import { Text, View, Image, ScrollView } from "react-native";
import React, { useState } from "react";
import { Eye, EyeSlash } from "iconsax-react-native";
import { Formik } from "formik";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { grey900, orange500 } from "../../constants/colors";
import MainButton from "../../components/buttons/mainButton";
import {
  initialValues,
  validationSchema,
} from "../../components/form-comps/validations";
import { Loginstyles } from "../../styles/screens/auth/login.styles";
import ScreenHeader from "../../components/header/screenHeader";
import AccountInputs from "../../components/form-comps/accountInputs";
import { LOGO_SM } from "../../../assets/images/image";
import { useLoginMutation } from "../../services/auth";
import LoadingModal from "../../modals/LoadingModal";
import { LoginData } from "../../types/login.model";
import Toast from "react-native-toast-message";
import CustomButton from "../../components/buttons/CustomButton";
import { useAppDispatch, useTypedSelector } from "../../hooks";
import {
  setRefreshToken,
  setRider,
  setToken,
  setUser,
} from "../../features/userSlice";
import { RootState } from "../../store";

const LoginScreen = () => {
  const dispatch = useAppDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [login, { isLoading: loginLoading }] = useLoginMutation();
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  // const userDetails = useTypedSelector((store: RootState) => store.user);
  const token = useTypedSelector((store: RootState) => store.notification.notificationToken);

  const { navigate } = useNavigation<any>();
  const navigation = useNavigation<any>();
  const onSubmit = async (values: LoginData) => {
    values.emailOrPhone = values?.emailOrPhone?.toLowerCase()?.trim();
    values.fcmToken = token;
    try {
      console.log(values)
      const loginResponse = await login(values).unwrap();
      Toast.show({
        type: "success",
        text1: "Success",
        text2: loginResponse.message,
        position: "top",
      });
      dispatch(setToken(loginResponse.data.accessToken));
      dispatch(setRefreshToken(loginResponse.data.refreshToken));
      dispatch(setRider(loginResponse.data.rider));
      navigate("BottomTabNavigator", { screen: "Dashboard" });
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
          <ScrollView
            style={Loginstyles.inputContainer}
            showsVerticalScrollIndicator={false}
          >
            <View style={Loginstyles.logoContainer}>
              <Image style={Loginstyles.logo} source={LOGO_SM} />
            </View>
            <ScreenHeader
              title="Welcome back"
              desc="Please enter your details below to continue using your Ndia account."
            />
            <AccountInputs
              label="Phone number or Email address"
              placeholder="Enter your phone number or email address"
              onChange={handleChange("emailOrPhone")}
              onBlur={handleBlur("emailOrPhone")}
              touched={touched.emailOrPhone}
              value={values.emailOrPhone}
              isPassword={false}
              error={errors.emailOrPhone}
            />
            <AccountInputs
              label="Password"
              placeholder="Enter your password"
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
              noAutoFocus
            />
            <View>
              <Text
                style={Loginstyles.txtForgot}
                onPress={() => navigation.navigate("SendOtp")}
              >
                Forgot password
              </Text>
            </View>
          </ScrollView>
          <View style={Loginstyles.loginBtn}>
            <CustomButton
              title="Login"
              bG={orange500}
              onPress={handleSubmit}
              outline={false}
              color={grey900}
              disabled={!isValid}
            />
            <View style={Loginstyles.txtContainer}>
              <View>
                <Text style={Loginstyles.txt}>Don’t have an account?</Text>
              </View>
              <View>
                <Text
                  style={Loginstyles.loginTxt}
                  onPress={() => {
                    navigation.navigate("PersonalDetails");
                  }}
                >
                  Sign up
                </Text>
              </View>
            </View>
          </View>
          {loginLoading && <LoadingModal />}
        </SafeAreaView>
      )}
    </Formik>
  );
};

export default LoginScreen;
