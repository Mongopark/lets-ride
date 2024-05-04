import { StyleSheet } from "react-native";
import { cream, grey300, grey500, orange500 } from "../../../constants/colors";

const DeliveriesCardStyles = StyleSheet.create({
  container: {
    paddingVertical: 16,
    borderBottomColor: cream,
    borderBottomWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  id: {
    fontFamily: "satoshi-medium",
    fontSize: 18,
    lineHeight: 24,
    color: grey500,
  },
  name: {
    marginTop: 10,
    fontSize: 12,
    lineHeight: 16,
    fontFamily: "satoshi",
    color: grey300,
  },
  deliveryStatus: {
    borderRadius: 5,
    borderWidth: 1,

    paddingHorizontal: 10,
    paddingVertical: 2,
  },
  deliveryStatusText: {
    fontSize: 12,
    fontFamily: "satoshi",
    lineHeight: 16,
  },
  ongoing: {
    borderColor: "#ED9449",
    backgroundColor: "#F3E3C7",
  },
  ongoingText: {
    color: "#ED9449",
  },
  new: {
    borderColor: orange500,
    backgroundColor: "#FFF8E7",
  },
  newText: {
    color: orange500,
  },
  completed: {
    borderColor: "#38B000",
    backgroundColor: "#EBF7E5",
  },
  comletedText: {
    color: "#38B000",
  },
  statusContainer: {
    paddingHorizontal: 10,
    paddingVertical: 1,
    borderRadius: 5,
  },
  statusText: {
    leading: 22,
    fontWeight: "500",
  },
  status: {
    lineHeight: 22,
    fontWeight: "500",
    fontSize: 12,
    textAlign: "center",
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 1,
    borderWidth: 1,
  },
});
export default DeliveriesCardStyles;
