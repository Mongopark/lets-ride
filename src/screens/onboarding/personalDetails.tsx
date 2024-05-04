import { Image, SafeAreaView, Text, View } from "react-native";
import { LOGO_SM } from "../../../assets/images/image";
import PersonalDetailsStyles from "../../styles/screens/onboarding/personalDetails.styles";
import { grey500, grey900, orange500 } from "../../constants/colors";
import { WelcomeStyles } from "../../styles/screens/auth/welcome.styles";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../navigation/authNavigator";
import { StackNavigationProp } from "@react-navigation/stack";
import { Formik } from "formik";
import {
  initialValues,
  validationSchema,
} from "../../validators/personalDetails";
import AccountInputs from "../../components/form-comps/accountInputs";
import CustomButton from "../../components/buttons/CustomButton";
import { useState } from "react";
import { Eye, EyeSlash } from "iconsax-react-native";
import Toast from "react-native-toast-message";
import { PersonalDetailsProps } from "../../types/sign.model";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { setPersonalDetails } from "../../features/signUpSlice";
import { setEmail } from "../../features/registerSlice";

const PersonalDetailsScreen = () => {
  const { navigate } = useNavigation<StackNavigationProp<RootStackParamList>>();
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useAppDispatch();
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };
  const onsubmit = (values: PersonalDetailsProps) => {
    try {
      dispatch(setPersonalDetails(values));
      dispatch(setEmail(values.email));
      navigate("RidingDetails");
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
    <SafeAreaView style={PersonalDetailsStyles.safeArea}>
      <View style={PersonalDetailsStyles.container}>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onsubmit}
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
            <>
              <KeyboardAwareScrollView
                contentContainerStyle={PersonalDetailsStyles.formWrapper}
              >
                <View>
                  <Image
                    source={LOGO_SM}
                    alt=""
                    style={PersonalDetailsStyles.image}
                  />
                </View>
                <View style={PersonalDetailsStyles.headerContainer}>
                  <Text style={PersonalDetailsStyles.header}>
                    Personal details
                  </Text>
                  <Text style={PersonalDetailsStyles.subheader}>
                    Enter your details below to get started with{" "}
                    <Text style={{ fontFamily: "satoshi-bold" }}>Ndia</Text>
                  </Text>
                </View>
                <View style={PersonalDetailsStyles.doubleInputField}>
                  <View style={PersonalDetailsStyles.halfInput}>
                    <AccountInputs
                      label="First name"
                      placeholder="eg: john"
                      onChange={handleChange("firstName")}
                      onBlur={handleBlur("firstName")}
                      touched={touched.firstName}
                      value={values.firstName}
                      error={errors.firstName}
                      isPassword={false}
                    />
                  </View>
                  <View style={PersonalDetailsStyles.halfInput}>
                    <AccountInputs
                      label="Last name"
                      placeholder="eg: Doe"
                      onChange={handleChange("lastName")}
                      onBlur={handleBlur("lastName")}
                      touched={touched.lastName}
                      value={values.lastName}
                      error={errors.lastName}
                      isPassword={false}
                    />
                  </View>
                </View>
                <AccountInputs
                  label="Email Address"
                  placeholder="eg: johndoe@gmail.com"
                  onChange={handleChange("email")}
                  onBlur={handleBlur("email")}
                  touched={touched.email}
                  value={values.email}
                  error={errors.email}
                  isPassword={false}
                />
                <AccountInputs
                  label="Phone number"
                  placeholder="eg: +123456789"
                  onChange={handleChange("phoneNumber")}
                  onBlur={handleBlur("phoneNumber")}
                  touched={touched.phoneNumber}
                  value={values.phoneNumber}
                  error={errors.phoneNumber}
                  isPassword={false}
                  maxLength={11}
                />
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
              </KeyboardAwareScrollView>
              <View style={PersonalDetailsStyles.bottom}>
                <CustomButton
                  title="Next"
                  color={grey900}
                  bG={orange500}
                  onPress={handleSubmit}
                  outline={false}
                  disabled={!isValid}
                />
                <Text style={WelcomeStyles.logIn}>
                  Have an account already?
                  <Text style={{ color: grey500, fontWeight: "700" }}>
                    Log in
                  </Text>
                </Text>
              </View>
            </>
          )}
        </Formik>
      </View>
    </SafeAreaView>
  );
};
export default PersonalDetailsScreen;
