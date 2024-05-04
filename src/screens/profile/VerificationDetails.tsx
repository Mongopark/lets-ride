import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import GoBackHeader from "../../components/header/GoBackHeader";
import {
  cream,
  grey350,
  grey500,
  grey900,
  orange500,
  white,
} from "../../constants/colors";
import { StatusBar } from "expo-status-bar";
import { Formik } from "formik";
import AccountInputs from "../../components/form-comps/accountInputs";
import { useNavigation } from "@react-navigation/native";
import {
  verificationDetails,
  validationSchema,
  initialValues,
} from "../../validators/profile/VerificationDetails";
import MainButton from "../../components/buttons/mainButton";
import { CloseCircle, Gallery } from "iconsax-react-native";
import ModalLayout from "../../components/modals/modalLayout";
import FixedInput from "../../components/inputs/FixedInput";
import { usePatchProfileMutation } from "../../services/profile";
import Toast from "react-native-toast-message";
import LoadingModal from "../../modals/LoadingModal";
import CustomButton from "../../components/buttons/CustomButton";
import { useTypedSelector } from "../../hooks";
import { RootState } from "../../store";
import * as ImagePicker from "expo-image-picker";
import { useUploadProfilePhotoMutation } from "../../services/media";
import ImageUpload from "../../components/helpers/imageUpload";
import { useGetRiderQuery } from "../../services/userApi";

const VerificationDetails = () => {
  const riderDetails = useTypedSelector((store: RootState) => store.user.rider);
  const [editProfile, setEditProfile] = useState(false);
  const [patchProfile, { isLoading: patchProfileLoading }] =
    usePatchProfileMutation();
  const [uploadProfilePhoto, { isLoading: profilePhotoLoading }] =
    useUploadProfilePhotoMutation();
  const { data: riderData, isLoading: riderDataIsLoading } = useGetRiderQuery();

  const { navigate } = useNavigation<any>();
  const onSubmit = async (values: verificationDetails) => {
    try {
      const patchProfileResponse = await patchProfile(values).unwrap();
      Toast.show({
        type: "success",
        text1: "Success",
        text2: patchProfileResponse.message,
        position: "top",
      });
      setEditProfile(false);
    } catch (error: any) {
      Toast.show({
        type: "error",
        text1: "Error",
        text2: error.data.message,
        position: "top",
      });
    }
  };

  const extractExtension = (string: String) => {
    const parts = string.split("/");
    const fileName = parts[parts.length - 1];
    const fileParts = fileName.split(".");
    const fileExtension = fileParts[fileParts.length - 1];
    return { fileExtension, fileName };
  };

  const handleProfilePhotoUpload = async (
    file: ImagePicker.ImagePickerAsset
  ) => {
    const fileType = extractExtension(file.uri);
    const formData = new FormData();
    formData.append("profile", {
      uri: file.uri,
      type: `${file.type}/${fileType.fileExtension}`,
      name: fileType.fileName,
    } as unknown as Blob);
    try {
      const logoResponse = await uploadProfilePhoto(formData).unwrap();
      Toast.show({
        text1: "Success",
        text2: logoResponse.message,
        position: "top",
        type: "success",
      });
    } catch (error: any) {
      Toast.show({
        text1: "Error",
        text2: error.message,
        position: "top",
        type: "error",
      });
    }
  };

  return (
    <View style={styles.screenContainer}>
      <StatusBar backgroundColor={white} translucent={true} style={"dark"} />
      <GoBackHeader title="Verification details" />
      <View style={styles.contentContainer}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View>
            <Text style={styles.profileLabel}>Profile picture</Text>
            <View style={styles.imgContainerWrapper}>
              <View style={styles.imageContainer}>
                <View style={styles.imageContent}>
                  <Image
                    source={
                      riderData?.data?.profilePhoto
                        ? {
                            uri: `http://35.246.109.24:3000/${riderData?.data?.profilePhoto}`,
                          }
                        : require("../../../assets/images/riderProfile.jpeg")
                    }
                    style={styles.img}
                    resizeMode="cover"
                  />
                </View>
              </View>
            </View>
          </View>
          <FixedInput
            data={{ label: "Vehicle type", content: riderDetails.vehicleType }}
          />
          <FixedInput
            data={{
              label: "Vehicle brand",
              content: riderData?.data?.vehicleBrand,
            }}
          />
          <FixedInput
            data={{ label: "Phone number", content: riderDetails.phoneNumber }}
          />
          <FixedInput data={{ label: "NIN", content: riderDetails.nin }} />
        </ScrollView>
        <View>
          <MainButton
            title="Change details"
            color={grey900}
            outline={true}
            onPress={() => setEditProfile(true)}
            bG={white}
          />
        </View>
      </View>
      <ModalLayout
        setModalVisible={() => setEditProfile}
        modalVisible={editProfile}
        children={
          <View style={styles.modalContainer}>
            <View style={styles.topRowcontainer}>
              <TouchableOpacity onPress={() => setEditProfile(!editProfile)}>
                <CloseCircle color={grey900} size={24} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.helpText}>Help</Text>
              </TouchableOpacity>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
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
                    <View>
                      <Text style={styles.profileLabel}>Profile picture</Text>
                      <View style={styles.imgContainerWrapper}>
                        <View style={styles.imageContainer}>
                          <View style={styles.imageContent}>
                            <Image
                              source={
                                riderData?.data?.profilePhoto
                                  ? {
                                      uri: `http://35.246.109.24:3000/${riderData?.data?.profilePhoto}`,
                                    }
                                  : require("../../../assets/images/riderProfile.jpeg")
                              }
                              style={styles.img}
                              resizeMode="cover"
                            />
                          </View>
                          <TouchableOpacity
                            onPress={() => {
                              ImageUpload({
                                uploadFunc: handleProfilePhotoUpload,
                              });
                            }}
                          >
                            <View style={styles.galleryIconContainer}>
                              <Gallery
                                size={12}
                                color={grey900}
                                variant="Bold"
                              />
                            </View>
                          </TouchableOpacity>
                        </View>
                      </View>
                    </View>
                    <AccountInputs
                      label="Vehicle type"
                      placeholder="Bicycle"
                      onChange={handleChange("vehicleType")}
                      onBlur={handleBlur("vehicleType")}
                      touched={touched.vehicleType}
                      value={values.vehicleType}
                      isPassword={false}
                      error={errors.vehicleType}
                    />
                    <AccountInputs
                      label="Vehicle brand"
                      placeholder="Null"
                      onChange={handleChange("vehicleBrand")}
                      onBlur={handleBlur("vehicleBrand")}
                      touched={touched.vehicleBrand}
                      value={values.vehicleBrand}
                      isPassword={false}
                      error={errors.vehicleBrand}
                    />
                    {/* <AccountInputs
                      label="Phone number"
                      placeholder="Null"
                      onChange={handleChange("phoneNumber")}
                      onBlur={handleBlur("phoneNumber")}
                      touched={touched.phoneNumber}
                      value={values.phoneNumber}
                      isPassword={false}
                      error={errors.phoneNumber}
                      isNumber={true}
                      maxLength={10}
                    /> */}
                    <AccountInputs
                      label="NIN"
                      placeholder="28114982903"
                      onChange={handleChange("nin")}
                      onBlur={handleBlur("nin")}
                      touched={touched.nin}
                      value={values.nin}
                      isPassword={false}
                      error={errors.nin}
                      isNumber={true}
                      maxLength={11}
                    />
                    <View style={styles.modalBottom}>
                      <CustomButton
                        title="Save"
                        color={grey900}
                        outline={false}
                        onPress={handleSubmit}
                        bG={orange500}
                        disabled={!isValid}
                      />
                      <View style={styles.bottomTextContainer}>
                        <Text style={styles.lightText}>
                          Want to change your NIN ?{" "}
                        </Text>
                        <TouchableOpacity
                          onPress={() =>
                            navigate("ProfileNavigator", {
                              screen: "ChatWithSupport",
                            })
                          }
                        >
                          <Text style={styles.supportLink}>
                            Chat with support
                          </Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                    {patchProfileLoading && <LoadingModal />}
                  </>
                )}
              </Formik>
            </ScrollView>
            {profilePhotoLoading && <LoadingModal />}
          </View>
        }
      />
    </View>
  );
};

export default VerificationDetails;

const styles = StyleSheet.create({
  screenContainer: { flex: 1, backgroundColor: white },
  contentContainer: {
    flex: 1,
    backgroundColor: white,
    paddingHorizontal: 16,
    paddingVertical: 24,
    justifyContent: "space-between",
    gap: 44,
  },
  inputContainer: {
    flex: 1,
  },
  profileLabel: {
    fontSize: 14,
    color: "#A9ABB8",
    fontWeight: "400",
    marginBottom: 18,
  },
  imageContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 28,
    position: "relative",
  },
  imgContainerWrapper: {
    justifyContent: "center",
    alignItems: "center",
  },
  galleryIconContainer: {
    width: 17,
    height: 17,
    backgroundColor: white,
    borderRadius: 9,
    position: "absolute",
    bottom: 0,
    right: 11,
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    width: 100,
    height: 100,
  },
  imageContent: {
    overflow: "hidden",
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  modalContainer: {
    height: "95%",
    width: "100%",
    borderTopRightRadius: 16,
    borderTopLeftRadius: 16,
    backgroundColor: white,
    paddingTop: 20,
    paddingHorizontal: 16,
  },
  topRowcontainer: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginBottom: 36,
    paddingVertical: 9,
    paddingBottom: 21,
    borderBottomColor: cream,
    borderBottomWidth: 1,
  },
  helpText: {
    backgroundColor: orange500,
    color: grey900,
    borderRadius: 16,
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
  bottomTextContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: 4,
    marginTop: 10,
  },
  lightText: {
    fontSize: 12,
    lineHeight: 15.6,
    color: grey350,
  },
  supportLink: {
    lineHeight: 15.6,
    fontSize: 12,
    fontWeight: "700",
    color: grey500,
  },
  modalBottom: {
    marginBottom: 32,
  },
});
