import { StyleSheet } from "react-native";
import {
  white,
  grey200,
  grey300,
  grey500,
  orange50,
  orange500,
  grey900,
} from "../../../constants/colors";

export const styles = StyleSheet.create({
  screenContainer: { flex: 1, backgroundColor: "white" },
  mainContainer: {
    paddingHorizontal: 16,
    position: "relative",
    flex: 1,
  },
  walletBalanceCard: {
    backgroundColor: grey900,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 24,
    justifyContent: "flex-start",
    alignItems: "center",
    marginVertical: 24,
  },
  walletText: {
    color: grey200,
    fontSize: 12,
    fontWeight: "400",
  },
  walletBalance: {
    color: "white",
    fontSize: 32,
    fontWeight: "700",
    marginBottom: 24,
  },
  btnContainer: {
    width: "100%",
  },
  logo: {
    position: "absolute",
    top: 9.5,
    bottom: 10.5,
  },
  accountDetailsContainer: {
    padding: 10,
    borderRadius: 8,
    backgroundColor: orange50,
    gap: 8,
    marginBottom: 24,
  },
  accountDetailsWithdrawalWrapper: {
    padding: 10,
    borderRadius: 8,
    backgroundColor: orange50,
    gap: 16,
    marginBottom: 24,
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  accountDetailsWithdrawalInnerWrapper: {
    gap: 8,
    width: "100%",
    flexShrink: 1,
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  linkText: {
    fontSize: 8,
    fontWeight: "700",
    textDecorationLine: "underline",
    color: orange500,
  },
  detailsText: {
    fontSize: 10,
    fontWeight: "400",
    color: grey500,
  },
  detailsTitle: {
    fontSize: 12,
    fontWeight: "700",
    color: grey500,
  },
  textTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: grey500,
  },
  textBtn: {
    fontSize: 14,
    fontWeight: "500",
    color: grey300,
  },
  transactions: {
    gap: 16,
  },
  modalSubTitleSubText: {
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 18.9,
    color: grey300,
  },
  modalTitle: {
    gap: 6,
    marginBottom: 20,
  },
  modalContainer: {
    backgroundColor: white,
    width: "100%",
    paddingHorizontal: 16,
    paddingVertical: 20,
    borderRadius: 10,
  },
  inputContainer: {
    marginBottom: 20,
  },
  closeContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  closeIcon: {
    width: 50,
    height: 5,
    borderRadius: 100,
    backgroundColor: "#D9D9D9",
  },
  modalPriceContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  modalPriceText: {
    fontSize: 30,
  },
});
