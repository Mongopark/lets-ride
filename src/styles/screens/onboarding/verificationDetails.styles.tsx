import { StyleSheet } from "react-native";
import {
  grey100,
  grey200,
  grey300,
  grey40,
  grey50,
  grey500,
  orange500,
  white,
} from "../../../constants/colors";

const VerificationDetailsStyles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: white,
  },
  container: {
    flex: 1,
    paddingTop: 13,
  },
  image: {
    width: 67.7,
    height: 20,
    alignSelf: "center",
  },
  headerContainer: {
    alignItems: "center",
    marginTop: 23,
  },
  header: {
    fontFamily: "satoshi-bold",
    fontSize: 24,
    letterSpacing: -0.12,
  },
  subheader: {
    marginTop: 12,
    fontSize: 14,
    color: grey300,
    fontFamily: "satoshi",
  },
  formWrapper: {
    marginTop: 12,
    width: "100%",
    paddingHorizontal: 16,
    paddingBottom: 60,
  },
  uploadImage: {
    backgroundColor: grey100,
    width: "100%",
    marginTop: 6,
    borderRadius: 8,
    paddingLeft: 16,
    paddingVertical: 18,
  },
  uploadImageText: {
    fontFamily: "satoshi",
    color: grey500,
    fontSize: 14,
    lineHeight: 16,
    textAlign: "center",
  },
  uploadImageTrigger: {
    textDecorationLine: "underline",
    color: orange500,
  },
  inputField: {
    flex: 1,
    marginTop: 28,
  },
  input: {
    backgroundColor: grey100,
    height: 51,
    width: "100%",
    marginTop: 6,
    borderRadius: 8,
    paddingLeft: 16,
    fontFamily: "satoshi",
  },
  dropdown: {
    backgroundColor: grey100,
    height: 51,
    width: "100%",
    marginTop: 6,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    paddingRight: 16,
    marginBottom: 20,
  },
  dropdownInput: {
    flex: 1,
    borderRadius: 8,
    paddingLeft: 16,
    fontFamily: "satoshi",
  },
  dropdownNoValue: {
    flex: 1,
    borderRadius: 8,
    paddingLeft: 16,
    fontFamily: "satoshi",
    color: grey50,
  },
  inputLabel: {
    fontSize: 14,
    fontFamily: "satoshi",
    color: grey200,
  },
  submit: {
    width: "100%",
    backgroundColor: grey40,
    paddingVertical: 12,
    borderRadius: 8,
  },
  submitText: {
    textAlign: "center",
    fontFamily: "satoshi-bold",
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.24,
    color: grey50,
  },
  bottom: {
    paddingHorizontal: 16,
    marginBottom: 32,
  },
});
export default VerificationDetailsStyles;
