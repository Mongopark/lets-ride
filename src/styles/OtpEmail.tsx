import { StyleSheet } from "react-native";
import { white } from "../constants/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: white,
  },

  screenContainer: {
    width: "100%",
    paddingHorizontal: 16,
    flex: 1,
    justifyContent: "space-between",
  },
  btn: {
    position: "absolute",
    bottom: 10,
    width: "100%",
    marginLeft: 10,
  },
  btnContainer: {
    paddingBottom: 32,
  },
});
