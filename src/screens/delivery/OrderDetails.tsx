import { StatusBar, StyleSheet, View } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import GoBackHeader from "../../components/header/GoBackHeader";
import { SafeAreaView } from "react-native-safe-area-context";
import OrderDetailsContent from "../../components/deliveries/OrderDetailsContent";
import { white } from "../../constants/colors";

interface ParamType {
  id: string;
  name: string;
  status: string;
}

const OrderDetails = () => {
  const route = useRoute();
  const { id, name, status }: any = route.params;
  return (
    <View style={styles.screen}>
      <StatusBar
        backgroundColor={white}
        translucent={true}
        barStyle={"dark-content"}
      />
      <GoBackHeader title="Delivery details" />
      <OrderDetailsContent id={id} name={name} status={status} />
    </View>
  );
};

export default OrderDetails;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: white,
  },
});
