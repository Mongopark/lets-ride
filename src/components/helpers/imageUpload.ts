import * as ImagePicker from "expo-image-picker";

type ImageUploadProps = {
  uploadFunc: (file: ImagePicker.ImagePickerAsset) => Promise<void>;
};

const ImageUpload = async ({ uploadFunc }: ImageUploadProps) => {
  const result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.Images,
    allowsEditing: true,
    quality: 1,
  });
  if (!result.canceled) {
    uploadFunc(result.assets[0]);
  }
};

export default ImageUpload;