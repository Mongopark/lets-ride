import { View, Text, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { styles } from "../../styles/screens/account/wallet";
import ModalView from "../modals/modalLayout";
import MainButton from "../buttons/mainButton";
import { green, grey900, red, orange500 } from "../../constants/colors";
import { useNavigation } from "@react-navigation/native";

const TransactionSummary: React.FC<any> = ({
  summaryModal,
  setSummaryModal,
  transactionType,
  amount,
}) => {
  const { navigate } = useNavigation<any>();
  const [typeCredit, setTypeCredit] = useState(false);
  useEffect(() => {
    if (transactionType === "Credit") {
      setTypeCredit(true);
    } else if (transactionType === "Debit") {
      setTypeCredit(false);
    }
  }, []);
  return (
    <ModalView
      modalVisible={summaryModal}
      setModalVisible={setSummaryModal}
      children={
        <View style={styles.modalContainer}>
          <TouchableOpacity
            onPress={() => setSummaryModal(false)}
            style={styles.closeContainer}
          >
            <View style={styles.closeIcon}></View>
          </TouchableOpacity>
          <View style={styles.modalTitle}>
            <Text style={styles.textTitle}>Transaction summary</Text>
          </View>
          <View style={styles.modalPriceContainer}>
            {typeCredit ? (
              <Text style={[styles.modalPriceText, { color: green }]}>
                {amount}
              </Text>
            ) : (
              <Text style={[styles.modalPriceText, { color: red }]}>
                {amount}
              </Text>
            )}
          </View>
          {transactionType === "Debit" && (
            <View style={styles.accountDetailsWithdrawalWrapper}>
              <View style={styles.accountDetailsWithdrawalInnerWrapper}>
                <View style={styles.rowContainer}>
                  <Text style={styles.detailsText}>Transaction type</Text>
                  <Text style={styles.detailsText}>{transactionType}</Text>
                </View>
                <View style={styles.rowContainer}>
                  <Text style={styles.detailsText}>Reference ID</Text>
                  <Text style={styles.detailsText}>
                    IUB28392UG943203IR2T4953YIMGOTVF
                  </Text>
                </View>
              </View>
            </View>
          )}
          <View style={styles.accountDetailsWithdrawalWrapper}>
            <View style={styles.accountDetailsWithdrawalInnerWrapper}>
              <Text style={styles.detailsTitle}>
                Beneficiary account information
              </Text>
              <View style={styles.rowContainer}>
                <Text style={styles.detailsText}>Bank name</Text>
                <Text style={styles.detailsText}>First Bank</Text>
              </View>
              <View style={styles.rowContainer}>
                <Text style={styles.detailsText}>Account number</Text>
                <Text style={styles.detailsText}>1234567890</Text>
              </View>
              <View style={styles.rowContainer}>
                <Text style={styles.detailsText}>Account name</Text>
                <Text style={styles.detailsText}>John Doe</Text>
              </View>
              <Text style={styles.linkText}>Click here to update details</Text>
            </View>
          </View>
          <MainButton
            title="Report an issue"
            color={grey900}
            bG={orange500}
            onPress={() =>
              navigate("ProfileNavigator", {
                screen: "ConfirmWithdrawal",
              })
            }
            outline={true}
          />
        </View>
      }
    />
  );
};

export default TransactionSummary;
