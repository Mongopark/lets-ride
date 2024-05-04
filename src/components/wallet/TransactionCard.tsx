import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { green, grey300, grey500, cream, red } from "../../constants/colors";
import TransactionSummary from "./TransactionSummary";

interface itemProps {
  transactionType: string;
  description: string;
  date: string;
  amount: number;
}

interface PropTypes {
  item: itemProps;
}

const TransactionCard: React.FC<itemProps> = ({
  transactionType,
  description,
  date,
  amount,
}) => {
  const [summaryModal, setSummaryModal] = useState(false);
  const [typeCredit, setTypeCredit] = useState(false);
  useEffect(() => {
    if (transactionType === "Credit") {
      setTypeCredit(true);
    } else if (transactionType === "Debit") {
      setTypeCredit(false);
    }
  }, []);
  return (
    <>
      <TouchableOpacity
        style={styles.container}
        onPress={() => setSummaryModal(true)}
      >
        <View style={styles.rowContainer}>
          <Text style={styles.transactionType}>{description}</Text>
          {typeCredit ? (
            <Text style={styles.greenPrice}>+ ₦{amount}</Text>
          ) : (
            <Text style={styles.redPrice}>+ ₦{amount}</Text>
          )}
        </View>
        <Text style={styles.transactionDate}>{date}</Text>
      </TouchableOpacity>
      <TransactionSummary
        summaryModal={summaryModal}
        setSummaryModal={setSummaryModal}
        transactionType={transactionType}
        amount={amount}
      />
    </>
  );
};

export default TransactionCard;

const styles = StyleSheet.create({
  container: {
    gap: 3,
    paddingBottom: 16,
    borderBottomColor: cream,
    borderBottomWidth: 1,
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  transactionType: {
    fontSize: 16,
    fontWeight: "500",
    letterSpacing: -0.32,
    color: grey500,
  },
  greenPrice: {
    color: green,
    fontSize: 14,
    fontWeight: "500",
    lineHeight: 16,
  },
  redPrice: {
    color: red,
    fontSize: 14,
    fontWeight: "500",
    lineHeight: 16,
  },
  transactionDate: {
    fontSize: 10,
    fontWeight: "400",
    lineHeight: 13.5,
    color: grey300,
  },
});
