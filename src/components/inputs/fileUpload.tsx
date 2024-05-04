import {
    Text,
    TouchableOpacity,
    View,
    StyleSheet,
    Modal,
    Image,
  } from "react-native";
  import React, { useState } from "react";
  import * as ImagePicker from "expo-image-picker";
  import { CloseCircle, Gallery } from "iconsax-react-native";
  import { grey500, orange500 } from "../../constants/colors";
  
  type AccountInputsProps = {
    label: string;
    uploadFunc?: (file: ImagePicker.ImagePickerAsset) => Promise<void>;
    media: ImagePicker.ImagePickerAsset | null;
    setMedia: React.Dispatch<
      React.SetStateAction<ImagePicker.ImagePickerAsset | null>
    >;
  };
  
  const FileUpload = ({
    label,
    uploadFunc,
    media,
    setMedia,
  }: AccountInputsProps) => {
    const [imgPreview, setImgPreview] = useState<boolean>(false);
    const pickImage = async () => {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        quality: 1,
      });
  
      if (!result.canceled) {
        setMedia(result.assets[0]);
      }
    };
  
    return (
      <>
        {!media ? (
          <TouchableOpacity onPress={pickImage}>
            <View style={styles.nameField}>
              <Text style={styles.label}>{label}</Text>
              <View style={styles.fileInputContainer}>
                <View style={styles.inputTextContainer}>
                  <Text style={styles.inputLink}>Click here </Text>
                  <Text style={styles.subText}>to upload a file</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        ) : (
          <View style={styles.nameField}>
            <Text style={styles.label}>{label}</Text>
            <View style={styles.fileInputContainer}>
              <View style={styles.inputTextContainer}>
                <View style={styles.uploadedImageContainer}>
                  <View style={styles.imgDetailsContainer}>
                    <Gallery color="#141414" size={14} />
                    <Text style={styles.imgNameText}>xyz.png</Text>
                  </View>
                  <View style={styles.imgPreviewContainer}>
                    <TouchableOpacity onPress={() => setImgPreview(true)}>
                      <Text style={styles.viewText}>View</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <Text style={styles.uploadedText}>Upload</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setMedia(null)}>
                      <CloseCircle size={16} color={grey500} />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </View>
        )}
        <Modal
          transparent={true}
          animationType="fade"
          visible={imgPreview}
          onRequestClose={() => setImgPreview(!imgPreview)}
        >
          <View style={modalStyles.downModal}>
            <TouchableOpacity
              style={modalStyles.modalCloseBg}
              onPress={() => setImgPreview(!imgPreview)}
            ></TouchableOpacity>
            <View style={modalStyles.modalContainer}>
              {media && (
                <Image
                  source={{ uri: media.uri }}
                  style={{ width: "100%", height: "100%" }}
                  resizeMode="contain"
                />
              )}
            </View>
          </View>
        </Modal>
      </>
    );
  };
  
  export default FileUpload;
  
  const styles = StyleSheet.create({
    nameField: {
      gap: 5,
    },
    label: {
      fontSize: 14,
      color: "#A9ABB8",
      fontWeight: "400",
      fontFamily: "satoshi-regular",
    },
    input: {
      backgroundColor: "#F7F7F7",
      borderRadius: 8,
      fontSize: 14,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      color: "#141414",
    },
    error: {
      fontSize: 12,
      color: "red",
      fontFamily: "satoshi-regular",
    },
    fileInputContainer: {
      paddingHorizontal: 16,
      paddingVertical: 18,
      backgroundColor: "#F7F7F7",
      borderRadius: 8,
      fontSize: 14,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      color: "#141414",
      borderWidth: 1,
      borderStyle: "dashed",
      borderColor: "#EAEAEA",
    },
    inputTextContainer: {
      flexDirection: "row",
      justifyContent: "center",
    },
    inputLink: {
      color: orange500,
      fontSize: 14,
      fontWeight: "400",
      lineHeight: 16,
      textDecorationLine: "underline",
    },
    subText: {
      color: grey500,
      fontSize: 14,
      fontWeight: "400",
      lineHeight: 16,
    },
    inputField: {
      flex: 1,
      fontFamily: "satoshi-regular",
    },
    uploadedImageContainer: {
      width: "100%",
      flexDirection: "row",
      justifyContent: "space-between",
      alignContent: "center",
    },
    imgDetailsContainer: {
      flexDirection: "row",
      gap: 4,
      alignItems: "center",
    },
    imgPreviewContainer: {
      flexDirection: "row",
      gap: 16,
      alignItems: "center",
    },
    viewText: {
      fontSize: 12,
      lineHeight: 16,
      color: grey500,
      textDecorationLine: "underline",
    },
    uploadedText: {
      fontSize: 12,
      lineHeight: 12,
      color: "#38B000",
    },
    imgNameText: {
      lineHeight: 19,
      color: grey500,
      fontSize: 14,
    },
    iconContianer: {
      width: 20,
      justifyContent: "center",
      alignItems: "center",
      height: 25,
    },
  });

  const modalStyles = StyleSheet.create({
    imageContainer: {},
    modalCloseBg: {
      position: "absolute",
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
    },
    downModal: {
      flex: 1,
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      justifyContent: "center",
      alignItems: "center",
      position: "relative",
      padding: 12,
    },
    modalContainer: {
      width: "100%",
      height: 300,
      backgroundColor: "#fff",
      overflow: "hidden",
      borderRadius: 8,
      padding: 12,
    },
  });
  