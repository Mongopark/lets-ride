import { StyleSheet } from "react-native";
import { white } from "../../../constants/colors";

export const Loginstyles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    flex: 1,
    backgroundColor: white,
    justifyContent: "space-between",
    paddingTop: 20,
  },
  inputContainer: {
    marginBottom: 16,
  },
  imageContainer: {
    alignItems: "center",
    marginBottom: 15,
  },
  halfColumnContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  halfColumn: {
    width: "48%",
  },
  logo: {
    width: 67.88,
    height: 20,
  },
  txtContainer: {
    marginTop: 15,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    gap: 5,
  },
  txt: {
    textAlign: "center",
    fontSize: 12,
  },
  loginTxt: {
    fontWeight: "bold",
  },
  txtForgot: {
    textAlign: "right",
  },
  btn: {
    width: "100%",
  },
  logoContainer: {
    marginTop: 22,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  btnBottom: {
    marginBottom: 32,
  },
  loginBtn: {
    paddingBottom: 32,
  },
});
