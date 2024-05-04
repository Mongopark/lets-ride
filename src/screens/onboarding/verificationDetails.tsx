import {
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { LOGO_SM } from "../../../assets/images/image";
import { grey900, orange500 } from "../../constants/colors";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import VerificationDetailsStyles from "../../styles/screens/onboarding/verificationDetails.styles";
import { useState } from "react";
import ModalLayout from "../../components/modals/modalLayout";
import ModalStyles from "../../styles/components/modals/modal.styles";
import { ArrowDown2 } from "iconsax-react-native";
import { useNavigation } from "@react-navigation/core";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../navigation/authNavigator";
import {
  initialValues,
  validationSchema,
  VerificationProps,
} from "../../validators/verificationDetails";
import * as ImagePicker from "expo-image-picker";
import { Formik } from "formik";
import CustomButton from "../../components/buttons/CustomButton";
import AccountInputs from "../../components/inputs/AccountInputs";
import Toast from "react-native-toast-message";
import { useAppDispatch } from "../../hooks";
import { setVerificationDetails } from "../../features/signUpSlice";
import FileUpload from "../../components/inputs/fileUpload";
import { useUploadProfilePhotoMutation } from "../../services/media";

const VerificationDetailsScreen = () => {
  const dispatch = useAppDispatch();
  const [ profilePhoto, setProfilePhoto ] = useState<ImagePicker.ImagePickerAsset | null>(null)
  const [vehicleType, setVehicleType] = useState<string>("");
  const [vehicleTypeModalActive, setVehicleTypeModalActive] =
    useState<boolean>(false);
  const { navigate } = useNavigation<StackNavigationProp<RootStackParamList>>();

  const onSubmit = async (values: VerificationProps) => {
    // console.log(values);
    try {
      dispatch(
        setVerificationDetails({
          vehicleType: vehicleType,
          ...values,
        })
      );
      navigate("BankDetails");
    } catch (error: any) {
      Toast.show({
        type: "error",
        text1: "Error",
        text2: error.data.message,
        position: "top",
      });
    }
    navigate("BankDetails");
  };

  return (
    <>
      <SafeAreaView style={VerificationDetailsStyles.safeArea}>
        <View style={VerificationDetailsStyles.container}>
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
              <>
                <KeyboardAwareScrollView
                  contentContainerStyle={VerificationDetailsStyles.formWrapper}
                >
                  <View>
                    <Image
                      source={LOGO_SM}
                      alt=""
                      style={VerificationDetailsStyles.image}
                    />
                  </View>
                  <View style={VerificationDetailsStyles.headerContainer}>
                    <Text style={VerificationDetailsStyles.header}>
                      Verification details
                    </Text>
                    <Text style={VerificationDetailsStyles.subheader}>
                      Enter your details below to get started with{" "}
                      <Text style={{ fontFamily: "satoshi-bold" }}>Ndia</Text>
                    </Text>
                  </View>
                  <View style={VerificationDetailsStyles.inputField}>
                    <Text style={VerificationDetailsStyles.inputLabel}>
                      Vehicle type
                    </Text>
                    <TouchableOpacity
                      style={VerificationDetailsStyles.dropdown}
                      onPress={() => setVehicleTypeModalActive(true)}
                    >
                      <Text
                        style={
                          vehicleType
                            ? VerificationDetailsStyles.dropdownInput
                            : VerificationDetailsStyles.dropdownNoValue
                        }
                      >
                        {vehicleType || "Select an option"}
                      </Text>
                      <ArrowDown2 variant="Linear" size={14} color={grey900} />
                    </TouchableOpacity>
                  </View>
                  <AccountInputs
                    label="Vehicle brand"
                    placeholder="eg: Toyota"
                    onChange={handleChange("vehicleBrand")}
                    onBlur={handleBlur("vehicleBrand")}
                    touched={touched.vehicleBrand}
                    value={values.vehicleBrand}
                    error={errors.vehicleBrand}
                    isPassword={false}
                  />
                  <AccountInputs
                    label="Plate number"
                    placeholder="eg: Toyota"
                    onChange={handleChange("plateNumber")}
                    onBlur={handleBlur("plateNumber")}
                    touched={touched.plateNumber}
                    value={values.plateNumber}
                    error={errors.plateNumber}
                    isPassword={false}
                    maxlength={8}
                  />
                  <AccountInputs
                    label="NIN"
                    placeholder="eg: Toyota"
                    onChange={handleChange("nin")}
                    onBlur={handleBlur("nin")}
                    touched={touched.nin}
                    value={values.nin}
                    error={errors.nin}
                    isPassword={false}
                    maxlength={11}
                  />
                </KeyboardAwareScrollView>
                <View style={VerificationDetailsStyles.bottom}>
                  <CustomButton
                    title="Next"
                    color={grey900}
                    bG={orange500}
                    onPress={handleSubmit}
                    outline={false}
                    disabled={!isValid}
                  />
                </View>
              </>
            )}
          </Formik>
        </View>
      </SafeAreaView>

      {/* Vehicle type modal */}
      <ModalLayout
        modalVisible={vehicleTypeModalActive}
        setModalVisible={setVehicleTypeModalActive}
        children={
          <View style={ModalStyles.modalContainer}>
            <TouchableOpacity
              onPress={() => setVehicleTypeModalActive(!vehicleTypeModalActive)}
              style={ModalStyles.closeContainer}
            >
              <View style={ModalStyles.closeIcon}></View>
            </TouchableOpacity>
            <Text style={ModalStyles.modalTitle}>Select vehicle type</Text>
            <View style={ModalStyles.modalOptions}>
              <TouchableOpacity
                style={ModalStyles.modalOptionsTextContainer}
                onPress={() => {
                  setVehicleTypeModalActive(false);
                  setVehicleType("motorcycle");
                }}
              >
                <Text style={ModalStyles.modalOptionsText}>Motorcycle</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={ModalStyles.modalOptionsTextContainer}
                onPress={() => {
                  setVehicleTypeModalActive(false);
                  setVehicleType("tricycle");
                }}
              >
                <Text style={ModalStyles.modalOptionsText}>Tricycle</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={ModalStyles.modalOptionsTextContainer}
                onPress={() => {
                  setVehicleTypeModalActive(false);
                  setVehicleType("bicycle");
                }}
              >
                <Text style={ModalStyles.modalOptionsText}>Bicycle</Text>
              </TouchableOpacity>
            </View>
          </View>
        }
      />
    </>
  );
};
export default VerificationDetailsScreen;
