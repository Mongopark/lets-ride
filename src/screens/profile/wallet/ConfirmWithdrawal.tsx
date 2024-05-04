import { Text, View, Image, StyleSheet } from "react-native";
import React, { useState } from "react";
import { Eye, EyeSlash } from "iconsax-react-native";
import { Formik } from "formik";
import {
  passwordProp,
  initialValues,
  validationSchema,
} from "../../../validators/profile/passwordConfirm";
// import {useAppDispatch} from '../../redux/store';
// import {logIn} from '../../redux/actions/userAction';
import { useNavigation } from "@react-navigation/native";
import ScreenHeader from "../../../components/header/screenHeader";
import AccountInputs from "../../../components/inputs/AccountInputs";
import { white, grey900, orange500 } from "../../../constants/colors";
import MainButton from "../../../components/buttons/mainButton";
import { StatusBar } from "expo-status-bar";

interface LoginProps {
  navigation: any;
}

const ConfirmWithdrawal = ({ navigation }: LoginProps) => {
  const [showPassword, setShowPassword] = useState(false);
  // const dispatch = useAppDispatch();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const { navigate } = useNavigation<any>();
  const onSubmit = (values: passwordProp) => {
    console.log({ login: values });
    navigate("ProfileNavigator", { screen: "WithDrawalSuccessful" });
    // dispatch(logIn());
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
      }) => (
        <View style={styles.container}>
          <StatusBar translucent={true} backgroundColor={white} style="dark" />
          <View>
            <View style={styles.logoContainer}>
              <Image
                style={styles.logo}
                source={require("../../../../assets/images/logo-black.png")}
              />
            </View>
            <ScreenHeader
              title="Confirm withdrawal"
              desc="Please enter your details below to continue using your Ndia account."
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
            />
            <View>
              <Text
                style={styles.txtForgot}
                onPress={() => navigation.navigate("ForgotPassword")}
              >
                Forgot password
              </Text>
            </View>
          </View>
          <View style={styles.btn}>
            <MainButton
              title="Login"
              bG={orange500}
              onPress={handleSubmit}
              outline={false}
              color={grey900}
            />
          </View>
        </View>
      )}
    </Formik>
  );
};

export default ConfirmWithdrawal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
    padding: 16,
    justifyContent: "space-between",
  },
  imageContainer: {
    alignItems: "center",
    marginBottom: 15,
  },
  halfColumnContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  halfColumn: {
    width: "48%",
  },
  logo: {
    width: 67.88,
    height: 20,
  },
  txtContainer: {
    marginTop: 15,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    gap: 5,
  },
  txt: {
    textAlign: "center",
    fontSize: 12,
  },
  loginTxt: {
    fontWeight: "bold",
  },
  txtForgot: {
    textAlign: "right",
  },
  btn: {
    // position: "absolute",
    // bottom: 32,
    // left: 14,
    // marginHorizontal: "auto",
    width: "100%",
    marginBottom: 32,
  },
  logoContainer: {
    marginTop: 22,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
});
