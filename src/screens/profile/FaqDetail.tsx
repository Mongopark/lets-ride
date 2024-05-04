import { View, Text, ScrollView, StyleSheet, StatusBar } from "react-native";
import React from "react";
import GoBackHeader from "../../components/header/GoBackHeader";
import { useRoute } from "@react-navigation/native";
import { white, cream, orange500, grey900 } from "../../constants/colors";

const FaqDetail = () => {
  const route = useRoute();
  const { item }: any = route.params;
  return (
    <ScrollView style={styles.screenContainer}>
      <StatusBar
        translucent={true}
        backgroundColor={white}
        barStyle="dark-content"
      />
      <GoBackHeader title="FAQs" />
      <View style={styles.detailsContainer}>
        <Text style={styles.titleText}>{item.title}</Text>
        <Text style={styles.detailText}>{item.detail}</Text>
      </View>
    </ScrollView>
  );
};

export default FaqDetail;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: white,
  },
  detailsContainer: {
    gap: 20,
    paddingVertical: 20,
    paddingHorizontal: 16,
  },
  titleText: {
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderColor: cream,
    fontSize: 18,
    color: grey900,
    lineHeight: 22,
  },
  detailText: {
    fontSize: 16,
    lineHeight: 22.4,
    color: grey900,
    textAlign: "justify",
  },
});
