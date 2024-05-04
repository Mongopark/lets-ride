import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import GoBackHeader from "../../../components/header/GoBackHeader";
import AccountInputs from "../../../components/form-comps/accountInputs";
import { useNavigation } from "@react-navigation/native";
import { Call, Lock } from "iconsax-react-native";
import { white, grey900, orange500 } from "../../../constants/colors";
import Dropdown from "../../../components/dropDown/Dropdown";
import { Formik } from "formik";
import {
  phoneProp,
  initialValues,
  validationSchema,
} from "../../../validators/profile/changePhoneNumber";
import ScreenHeader from "../../../components/header/screenHeader";
import MainButton from "../../../components/buttons/mainButton";
import { StatusBar } from "expo-status-bar";

const ChangePhoneNumber = () => {
  const { navigate } = useNavigation<any>();

  const onSubmit = (values: phoneProp) => {
    console.log({ phonneNumber: values });
    navigate("BottomTabNavigator", { screen: "Account" });
  };
  return (
    <View style={styles.screenContainer}>
      <StatusBar translucent={true} backgroundColor={white} style="dark" />
      <GoBackHeader title="Change phone number" />
      <View style={styles.container}>
        <ScreenHeader
          title="Enter new phone number"
          desc="Please provide us with a new phone number so we can verify it"
        />
        <View style={styles.inputContainer}>
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
              <>
                <AccountInputs
                  label="Phone number"
                  placeholder="at least 11 digits"
                  onChange={handleChange("phoneNumber")}
                  onBlur={handleBlur("phoneNumber")}
                  touched={touched.phoneNumber}
                  value={values.phoneNumber}
                  isPassword={false}
                  error={errors.phoneNumber}
                  isNumber={true}
                />
                <MainButton
                  title="Continue"
                  bG={orange500}
                  onPress={handleSubmit}
                  outline={false}
                  color={grey900}
                />
              </>
            )}
          </Formik>
        </View>
      </View>
    </View>
  );
};

export default ChangePhoneNumber;

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
  },
});
