import { View, StyleSheet, ScrollView } from "react-native";
import React, { useState } from "react";
import GoBackHeader from "../../../components/header/GoBackHeader";
import AccountInputs from "../../../components/inputs/AccountInputs";
import { useNavigation } from "@react-navigation/native";
import { white, grey900, orange500 } from "../../../constants/colors";
import { Formik } from "formik";
import {
  initialValues,
  validationSchema,
} from "../../../validators/profile/changePassword";
import ScreenHeader from "../../../components/header/screenHeader";
import MainButton from "../../../components/buttons/mainButton";
import { Eye, EyeSlash } from "iconsax-react-native";
import { StatusBar } from "expo-status-bar";
import { IEditPassword } from "../../../types/profile.model";
import { usePatchPasswordMutation } from "../../../services/profile";
import Toast from "react-native-toast-message";
import LoadingModal from "../../../modals/LoadingModal";
import CustomButton from "../../../components/buttons/CustomButton";

const ChangePassword = () => {
  const { navigate } = useNavigation<any>();
  const [patchPassword, { isLoading: patchPasswordLoading }] =
    usePatchPasswordMutation();
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = async (values: IEditPassword) => {
    try {
      const patchPasswordResponse = await patchPassword(values).unwrap();
      Toast.show({
        type: "success",
        text1: "Success",
        text2: patchPasswordResponse.message,
        position: "top",
      });
      navigate("BottomTabNavigator", { screen: "Account" });
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
    <View style={styles.screenContainer}>
      <StatusBar translucent={true} backgroundColor={white} style="dark" />
      <GoBackHeader title="Change password" />
      <View style={styles.container}>
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
            <View style={styles.inputContainer}>
              <ScrollView showsVerticalScrollIndicator={false}>
                <View>
                  <ScreenHeader
                    title="Enter new password"
                    desc="Please provide us with a new password so we can verify it"
                  />
                  <AccountInputs
                    label="Old password"
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
                    onChange={handleChange("oldPassword")}
                    onBlur={handleBlur("oldPassword")}
                    touched={touched.oldPassword}
                    value={values.oldPassword}
                    error={errors.oldPassword}
                  />
                  <AccountInputs
                    label="New password"
                    placeholder="Enter your new password"
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
                    label="Repeat new password"
                    placeholder="Enter your repeat password"
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
                    onChange={handleChange("passwordConfirm")}
                    onBlur={handleBlur("passwordConfirm")}
                    touched={touched.passwordConfirm}
                    value={values.passwordConfirm}
                    error={errors.passwordConfirm}
                  />
                </View>
              </ScrollView>
              <CustomButton
                title="Change Password"
                bG={orange500}
                onPress={handleSubmit}
                outline={false}
                color={grey900}
              />
            </View>
          )}
        </Formik>
      </View>
      {patchPasswordLoading && <LoadingModal />}
    </View>
  );
};

export default ChangePassword;

const styles = StyleSheet.create({
  screenContainer: { flex: 1, backgroundColor: white },
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  inputContainer: {
    flex: 1,
    justifyContent: "space-between",
    paddingBottom: 32,
    gap: 50,
  },
});
