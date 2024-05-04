import { StyleSheet } from "react-native";
import { grey350 } from "../../../constants/colors";

export const styles = StyleSheet.create({
  container: {
    paddingVertical: 25,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 0.2,
    borderBottomColor: grey350,
  },
  leftSide: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    width: "80%",
  },
  title: {
    fontSize: 16,
    fontWeight: "400",
  },
});
