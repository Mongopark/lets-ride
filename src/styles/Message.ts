import { StyleSheet } from "react-native";
import { white } from "../constants/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: white,
  },
  messageContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  btn: {
    position: "absolute",
    bottom: 32,
    width: "100%",
    marginLeft: 16,
  },
  successDescription: {
    fontSize: 24,
    lineHeight: 32,
    fontWeight: "500",
    textAlign: "center",
    width: 210,
  },
  descriptionContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  screenContainer: {
    flex: 1,
    backgroundColor: white,
  },
});
