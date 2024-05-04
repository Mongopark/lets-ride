import { View, Text, StyleSheet, Image, Modal } from "react-native";
import React, { useState } from "react";
import MainButton from "../buttons/mainButton";
import {
  white,
  grey300,
  grey500,
  grey100,
  cream,
  grey900,
  orange500,
} from "../../constants/colors";
import { Location } from "iconsax-react-native";
import { useNavigation } from "@react-navigation/native";
import StatusPill from "../utilities/StatusPill";
import ModalLayout from "../modals/modalLayout";
import { TouchableOpacity } from "react-native";
import OrderCard from "../cards/orderCard";

interface PropType {
  id: string;
  name: string;
  status: string;
}

const OrderDetailsContent: React.FC<any> = ({ id, name, status }) => {
  const { navigate } = useNavigation<any>();
  const navigation = useNavigation<any>();

  const handleOrderPicked = () => {
    navigate("OrderNavigator", { screen: "OrderPicked" });
  };

  return (
    <View style={styles.container}>
      <View style={styles.deliveryId}>
        <Text style={styles.orderIdText}>Order ID: {id}</Text>
      </View>
      <View style={styles.paymentDetailsContainer}>
        <Text style={styles.detailsTitle}>Restaurant address</Text>
        <View style={styles.locationContainer}>
          <Location size="24" color={grey300} />
          <Text style={styles.locationText}>Admiralty road, Lekki phase 1</Text>
        </View>
        <Text style={styles.timeAway}>You are 5 minutes away from the restaurant</Text>
      </View>
      <OrderCard/>
      <View style={styles.sectionContainer}>
        <Text style={styles.detailsTitle}>Payment details</Text>
        <View style={styles.paymentDetailsContainer}>
          <View style={styles.flexRow}>
            <Text style={styles.paymentDetailsText}>Payment method</Text>
            <Text style={styles.paymentDetailsValue}>Cash on delivery</Text>
          </View>
          <View style={styles.flexRow}>
            <Text style={styles.paymentDetailsText}>Subtotal</Text>
            <Text style={styles.paymentDetailsValue}>₦1,500.00</Text>
          </View>
          <View style={styles.flexRow}>
            <Text style={styles.paymentDetailsText}>Delivery fee</Text>
            <Text style={styles.paymentDetailsValue}>₦500.00</Text>
          </View>
          <View style={styles.flexRow}>
            <Text style={styles.paymentDetailsText}>VAT</Text>
            <Text style={styles.paymentDetailsValue}>₦100.00</Text>
          </View>
          <View style={styles.flexRow}>
            <Text style={styles.statusText}>Order status</Text>
            <StatusPill status={status} />
          </View>
        </View>
      </View>
      <View style={styles.flexRow}>
        <Text style={styles.detailsTitle}>Total</Text>
        <Text style={styles.detailsTitle}>₦2,000.00</Text>
      </View>
      <View style={styles.buttonContainer}>
        <MainButton
          title="Order picked up"
          bG={orange500}
          onPress={() => handleOrderPicked()}
          outline={false}
          color={grey900}
        />
      </View>
    </View>
  );
};

export default OrderDetailsContent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: "white",
  },
  orderIdText: {
    fontSize: 14,
    fontFamily: 'satoshi-bold',
    lineHeight: 19,
    color: '#2f2f2f',
  },
  deliveryId: {
    paddingVertical: 16,
    borderBottomColor: '#f4f4f6',
    borderBottomWidth: 1,
  },
  detailsTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: grey500,
  },
  timeAway: {
    color: grey500,
    fontSize: 12,
    lineHeight: 16,
  },
  locationText: {
    fontSize: 16,
    fontWeight: "400",
    lineHeight: 15.6,
    color: grey500,
  },
  flexRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  paymentDetailsContainer: {
    paddingTop: 16,
    gap: 16,
    marginBottom: 16,
    borderBottomColor: cream,
    borderBottomWidth: 1,
    paddingBottom: 16,
  },
  paymentDetailsText: {
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 15.6,
    color: grey300,
  },
  paymentDetailsValue: {
    fontSize: 14,
    fontWeight: "400",
    color: grey500,
  },
  sectionContainer: {
    marginTop: 16,
    paddingTop: 16,
    gap: 14,
    borderTopColor: '#f4f4f6',
    borderTopWidth: 1,
  },
  locationContainer: {
    flexDirection: "row",
    gap: 6,
    alignItems: "center",
  },
  buttonContainer: {
    marginTop: "auto",
    marginBottom: 32,
  },
  statusValue: {
    lineHeight: 22,
    fontWeight: "500",
    fontSize: 12,
    color: "#38B000",
    backgroundColor: "#EBF7E5",
    textAlign: "center",
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 1,
    borderColor: "#38B000",
    borderWidth: 1,
  },
  statusText: {
    color: "#A9ABB8",
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 15.6,
  },
  foodItemContainer: {
    flexDirection: "row",
    gap: 10,
    paddingBottom: 16,
    marginBottom: 16,
    borderBottomColor: cream,
    borderBottomWidth: 1,
  },
  img: {
    width: "100%",
    height: "100%",
  },
  foodDetails: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
    gap: 6,
    flexShrink: 1,
  },
  foodTitle: {
    fontSize: 16,
    fontWeight: "500",
    color: grey500,
  },
  description: {
    fontSize: 14,
    fontWeight: "400",
    color: grey300,
  },
  imgContainer: {
    width: 80,
    height: 80,
    overflow: "hidden",
    borderRadius: 8,
    marginRight: 10,
  },
  singleBtn: {
    flex: 0.5,
  },
  modalContainer: {
    backgroundColor: white,
    width: "100%",
    paddingHorizontal: 16,
    paddingVertical: 20,
    borderRadius: 10,
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
  modalTitle: {
    color: grey500,
    fontSize: 18,
    fontWeight: "700",
    textAlign: "center",
  },
  modalSubTitle: {
    fontSize: 14,
    color: grey300,
    textAlign: "center",
  },
  titleContainer: {
    gap: 6,
    marginBottom: 40,
  },
});
