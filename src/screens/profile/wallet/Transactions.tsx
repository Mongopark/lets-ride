import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import GoBackHeader from "../../../components/header/GoBackHeader";
import { white, orange500 } from "../../../constants/colors";
import FilterCard from "../../../components/utilities/FilterCard";
import { transactions } from "../../../constants/transactions";
import TransactionCard from "../../../components/wallet/TransactionCard";
import { StatusBar } from "expo-status-bar";

const filterCardContent = [
  {
    title: "Timeline: ",
    filter: "This week",
  },
  {
    title: "Order status: ",
    filter: "All",
  },
];

const Transactions = () => {
  return (
    <ScrollView style={styles.screenContainer}>
      <StatusBar translucent={true} backgroundColor={white} style="dark" />
      <GoBackHeader title="Transactions" />
      <View style={styles.screenContentContainer}>
        <View style={styles.filterContainer}>
          {filterCardContent.map((item, index) => {
            const { title, filter } = item;
            return (
              <FilterCard key={index} filterTIle={title} filterBy={filter} />
            );
          })}
          <TouchableOpacity
            onPress={() => console.log("Change filter pressed")}
          >
            <Text style={styles.filterText}>Change filter</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.transactions}>
          {transactions.map((item, index) => {
            const { transactionType, description, date, amount } = item;
            return (
              <TransactionCard
                transactionType={transactionType}
                description={description}
                date={date}
                amount={amount}
              />
            );
          })}
        </View>
      </View>
    </ScrollView>
  );
};

export default Transactions;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: "white",
  },
  screenContentContainer: {
    flex: 1,
    padding: 16,
  },
  filterContainer: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 24,
  },
  filterText: {
    fontSize: 12,
    fontWeight: "700",
    color: orange500,
  },
  transactions: {
    gap: 16,
  },
});
