import { StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import GoBackHeader from "../../components/header/GoBackHeader";
import { SafeAreaView } from "react-native-safe-area-context";
import OrderDetailsContent from "../../components/deliveries/OrderDetailsContent";
import {
  cream,
  grey300,
  grey350,
  grey40,
  grey50,
  grey500,
  grey900,
  orange50,
  orange500,
  white,
} from "../../constants/colors";
import MainButton from "../../components/buttons/mainButton";
import StatusPill from "../../components/utilities/StatusPill";
import { Location } from "iconsax-react-native";

interface ParamType {
  id: string;
  name: string;
  status: string;
}

const OngoingDetails = () => {
  const { navigate } = useNavigation<any>();
  const route = useRoute();
  const { id, name, status }: any = route.params;
  const handleOrderPicked = () => {
    navigate("OrderNavigator", { screen: "OrderPicked" });
  };
  return (
    <View style={styles.screen}>
      <StatusBar
        backgroundColor={white}
        translucent={true}
        barStyle={"dark-content"}
      />
      <GoBackHeader title="Ongoing Order details" />
      {/* <OrderDetailsContent id={id} name={name} status={status} /> */}
      <View style={styles.container}>
        <Text style={styles.orderIdText}>Order ID: {id}</Text>
        <View style={styles.paymentDetailsContainer}>
          <Text style={styles.detailsTitle}>Restaurant address</Text>
          <View style={styles.locationContainer}>
            <Location size="24" color={grey300} />
            <Text style={styles.locationText}>
              Admiralty road, Lekki phase 1
            </Text>
          </View>
        </View>
        <View style={styles.paymentDetailsContainer}>
          <Text style={styles.detailsTitle}>Destination address</Text>
          <View style={styles.locationContainer}>
            <Location size="24" color={grey300} />
            <Text style={styles.locationText}>
              Admiralty road, Lekki phase 1
            </Text>
          </View>
        </View>
        <View style={styles.paymentDetailsContainer}>
          <Text style={styles.detailsTitle}>Next stop</Text>
          <View style={styles.locationContainer}>
            <Text style={styles.locationText}>
              Admiralty road, Lekki phase 1
            </Text>
          </View>
        </View>
        <View style={styles.statusContainer}>
          <Text style={styles.lightText}>Order status</Text>
          <StatusPill status="Ongoing" />
        </View>
        <View style={styles.detailContainer}>
          <View style={styles.rowContainer}>
            <Text style={styles.detailText}>Destination address</Text>
            <Text style={styles.rightText}>
              Hope Harriman street, Admiralty road, Lekki phase 1
            </Text>
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
    </View>
  );
};

export default OngoingDetails;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: white,
  },
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: "white",
  },
  orderIdText: {
    fontSize: 14,
    fontWeight: "700",
    color: grey500,
    paddingBottom: 16,
    paddingTop: 16,
    borderBottomColor: cream,
    borderBottomWidth: 1,
    marginBottom: 16,
  },
  detailsTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: grey500,
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
    gap: 14,
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
  detailText: {
    color: grey500,
    fontSize: 10,
    fontWeight: "400",
  },
  rightText: {
    textAlign: "right",
    color: grey500,
    fontSize: 10,
    fontWeight: "400",
    width: 166,
  },
  detailContainer: {
    padding: 10,
    backgroundColor: orange50,
    borderRadius: 8,
    gap: 4,
    marginBottom: 20,
  },
  rowContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 20,
  },
  statusContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
    paddingBottom: 16,
    borderBottomColor: grey40,
    borderBottomWidth: 1,
  },
  lightText: {
    fontSize: 14,
    lineHeight: 16,
    color: grey350,
  },
});
