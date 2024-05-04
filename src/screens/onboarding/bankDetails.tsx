import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { LOGO_SM } from "../../../assets/images/image";
import { grey500, grey900, orange500 } from "../../constants/colors";
import { WelcomeStyles } from "../../styles/screens/auth/welcome.styles";
import { useEffect, useState } from "react";
import ModalLayout from "../../components/modals/modalLayout";
import ModalStyles from "../../styles/components/modals/modal.styles";
import { ArrowDown2 } from "iconsax-react-native";
import BankDetailsStyles from "../../styles/screens/onboarding/bankDetails.styles";
import * as Location from "expo-location";
import { Formik } from "formik";
import {
  initialValues,
  validationSchema,
} from "../../validators/bankingInformation";
import { IBankDetails } from "../../types/signUp.model";
import { useTypedSelector } from "../../hooks";
import Toast from "react-native-toast-message";
import { useRegisterMutation } from "../../services/auth";
import { RootState } from "../../store";
import AccountInputs from "../../components/form-comps/accountInputs";
import CustomButton from "../../components/buttons/CustomButton";
import LoadingModal from "../../modals/LoadingModal";
import { useNavigation } from "@react-navigation/native";
import { useSendOtpMutation } from "../../services/email";
const banks = ["Access Bank", "Zenith Bank", "GT Bank"];

interface ICoords {
  lat: number;
  lon: number;
}

const BankDetailsScreen = () => {
  const { navigate } = useNavigation<any>();
  const [coords, setCoords] = useState<ICoords>({ lat: 0, lon: 0 });
  const [bankName, setBankName] = useState<string>("");
  const [bankNameModalActive, setBankNameModalActive] =
    useState<boolean>(false);
  const [registerRider, { isLoading: registerRiderLoading }] =
    useRegisterMutation();
  const signUpData = useTypedSelector((store: RootState) => store.signUp);
  const [location, setLocation] = useState<Location.LocationObject | null>(
    null
  );
  const [errorMsg, setErrorMsg] = useState<string>("");

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }
      let location = await Location.getCurrentPositionAsync({});
      setCoords({
        lat: location.coords.latitude,
        lon: location.coords.longitude,
      });
      setLocation(location);
      console.log(location.coords.latitude);
    })();
  }, []);

  let text = "Waiting..";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  const onsubmit = async (values: IBankDetails) => {
    try {
      const signUpResponse = await registerRider({
        ...signUpData,
        ...values,
        bankName: bankName,
        lat: coords.lat,
        lon: coords.lon,
      }).unwrap();
      Toast.show({
        type: "success",
        text1: "Success",
        text2: signUpResponse.message,
        position: "top",
      });
      navigate("EmailOtp");
    } catch (error: any) {
      Toast.show({
        type: "error",
        text1: "Error",
        text2: error.data.message,
        position: "top",
      });
      console.log({ error });
    }
  };
  return (
    <>
      <SafeAreaView style={BankDetailsStyles.safeArea}>
        <View style={BankDetailsStyles.container}>
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
                <ScrollView showsVerticalScrollIndicator={false}>
                  <View>
                    <View>
                      <Image
                        source={LOGO_SM}
                        alt=""
                        style={BankDetailsStyles.image}
                      />
                    </View>
                    <View style={BankDetailsStyles.headerContainer}>
                      <Text style={BankDetailsStyles.header}>
                        Your banking information
                      </Text>
                      <Text style={BankDetailsStyles.subheader}>
                        Enter your details below to get started with{" "}
                        <Text style={{ fontFamily: "satoshi-bold" }}>Ndia</Text>
                      </Text>
                    </View>
                    <View style={BankDetailsStyles.inputField}>
                      <Text style={BankDetailsStyles.inputLabel}>
                        Bank name
                      </Text>
                      <TouchableOpacity
                        style={BankDetailsStyles.dropdown}
                        onPress={() => setBankNameModalActive(true)}
                      >
                        <Text
                          style={
                            bankName
                              ? BankDetailsStyles.dropdownInput
                              : BankDetailsStyles.dropdownNoValue
                          }
                        >
                          {bankName || "Select an option"}
                        </Text>
                        <ArrowDown2
                          variant="Linear"
                          size={14}
                          color={grey900}
                        />
                      </TouchableOpacity>
                    </View>
                    <View>
                      <AccountInputs
                        label="Account Number"
                        placeholder="eg: 1234567890"
                        onChange={handleChange("bankAccountNumber")}
                        onBlur={handleBlur("bankAccountNumber")}
                        touched={touched.bankAccountNumber}
                        value={values.bankAccountNumber}
                        error={errors.bankAccountNumber}
                        isPassword={false}
                        isNumber={true}
                        maxLength={10}
                      />
                      <AccountInputs
                        label="Account Name"
                        placeholder="eg: John Doe"
                        onChange={handleChange("accountName")}
                        onBlur={handleBlur("accountName")}
                        touched={touched.accountName}
                        value={values.accountName}
                        error={errors.accountName}
                        isPassword={false}
                      />
                      <View style={{ marginBottom: 32 }} />
                    </View>
                  </View>
                </ScrollView>
                <View style={BankDetailsStyles.bottomBtn}>
                  <CustomButton
                    title="Next"
                    color={grey900}
                    bG={orange500}
                    onPress={handleSubmit}
                    outline={false}
                    disabled={!isValid}
                  />
                  <Text style={WelcomeStyles.logIn}>
                    Have an account already?{" "}
                    <Text style={{ color: grey500, fontWeight: "700" }}>
                      Log in
                    </Text>
                  </Text>
                </View>
              </>
            )}
          </Formik>
          {registerRiderLoading && <LoadingModal />}
        </View>
      </SafeAreaView>
      <ModalLayout
        modalVisible={bankNameModalActive}
        setModalVisible={setBankNameModalActive}
        children={
          <View style={ModalStyles.modalContainer}>
            <TouchableOpacity
              onPress={() => setBankNameModalActive(!bankNameModalActive)}
              style={ModalStyles.closeContainer}
            >
              <View style={ModalStyles.closeIcon}></View>
            </TouchableOpacity>
            <Text style={ModalStyles.modalTitle}>Bank name</Text>
            <View style={ModalStyles.modalOptions}>
              {banks.length > 0 &&
                banks.map((bank, index) => {
                  return (
                    <TouchableOpacity
                      style={ModalStyles.modalOptionsTextContainer}
                      onPress={() => {
                        setBankNameModalActive(false);
                        setBankName(bank);
                      }}
                      key={index}
                    >
                      <Text style={ModalStyles.modalOptionsText}>{bank}</Text>
                    </TouchableOpacity>
                  );
                })}
            </View>
          </View>
        }
      />
    </>
  );
};
export default BankDetailsScreen;
