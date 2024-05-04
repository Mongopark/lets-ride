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

const RidingDetailsStyles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: white,
  },
  container: {
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
    textAlign: "center",
    maxWidth: 311,
  },
  subheader: {
    marginTop: 12,
    fontSize: 14,
    color: grey300,
    fontFamily: "satoshi",
    textAlign: "center",
    maxWidth: 311,
  },
  formWrapper: {
    marginTop: 40,
    width: "100%",
    gap: 16,
    flex: 1,
    paddingHorizontal: 16,
    paddingBottom: 60,
  },
  submit: {
    width: "100%",
    backgroundColor: grey40,
    paddingVertical: 12,
    borderRadius: 8,
  },
  activeSubmit: {
    width: "100%",
    backgroundColor: orange500,
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
  activeSubmitText: {
    textAlign: "center",
    fontFamily: "satoshi-bold",
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.24,
    color: white,
  },
  bottom: {
    paddingHorizontal: 16,
    marginBottom: 32,
  },
  ridingOption: {
    backgroundColor: grey100,
    borderRadius: 8,
    padding: 14,
    flexDirection: "row",
    gap: 22,
  },
  ridingOptionCheckbox: {
    width: 20,
    height: 20,
    borderColor: grey500,
    borderWidth: 2,
    borderRadius: 4,
  },
  ridingOptionHeader: {
    fontFamily: "satoshi-bold",
    fontSize: 16,
    lineHeight: 21.16,
  },
  ridingOptionSubHeader: {
    marginTop: 1,
    fontSize: 12,
    fontFamily: "satoshi",
    color: grey500,
  },
  ridingOptionTerms: {
    marginTop: 12,
  },
  ridingOptionTerm: {
    fontFamily: "satoshi",
    fontSize: 10,
    lineHeight: 13.5,
    color: grey500,
  },
});
export default RidingDetailsStyles;
