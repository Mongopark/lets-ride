import { StyleSheet } from "react-native";
import { white, grey300, grey900 } from "../../../constants/colors";

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    flex: 1,
    backgroundColor: white,
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    color: grey900,
    // marginVertical: 15,
    marginTop: 60,
    marginBottom: 10,
  },
  version: {
    position: "absolute",
    left: "40%",
    opacity: 0.3,
    textAlign: "center",
    fontSize: 12,
    bottom: 20,
  },
  modalContainer: {
    backgroundColor: "white",
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderRadius: 10,
    width: "100%",
  },
  modalTitle: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 5,
    color: white,
  },
  modalDesc: {
    fontSize: 16,
    fontWeight: "400",
    lineHeight: 21.6,
    textAlign: "center",
    color: grey300,
  },
  btns: {
    width: "100%",
    flexDirection: "row",
    marginVertical: 15,
    justifyContent: "space-between",
  },
  btn: {
    width: "48%",
  },
});
