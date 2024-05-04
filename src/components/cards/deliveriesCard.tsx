import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import DeliveriesCardStyles from "../../styles/components/cards/deliveriesCard.styles";
import { useEffect, useState } from "react";
import {
  black,
  green,
  grey500,
  lightGreen,
  lightRed,
  orange50,
  orange500,
  red,
  white,
} from "../../constants/colors";
import ModalLayout from "../modals/modalLayout";
import MainButton from "../buttons/mainButton";
import { styles } from "../../styles/tabs/deliveries";
import StatusPill from "../utilities/StatusPill";
import { useNavigation } from "@react-navigation/native";

const DeliveriesCard = ({
  id,
  name,
  status,
}: {
  id: string;
  name: string;
  status: string;
}) => {
  const [incoming, setIncoming] = useState(false);
  const [statusText, setStatusText] = useState("");
  const [statusBg, setStatusBg] = useState("");
  const { navigate } = useNavigation<any>();
  useEffect(() => {
    switch (status) {
      case "Ongoing":
        setStatusText(orange500);
        setStatusBg(orange50);
        break;
      case "Completed":
        setStatusText(green);
        setStatusBg(lightGreen);
        break;
      case "New":
        setStatusText(red);
        setStatusBg(lightRed);
        break;
      default:
        setStatusText(black);
        setStatusBg(black);
        break;
    }
  });

  const handleDecline = () => {
    setIncoming(false);
  };

  const handleAccept = () => {
    setIncoming(false)
    navigate("OrderNavigator", {
      screen: "OrderDetails",
      params: { id: "84300NDS", name: "John Doe", status: "Ongoing" },
    });
  };

  const handleCardClick = () => {
    if (status === "New") {
      setIncoming(true);
      return;
    } else if (status === "Ongoing") {
      navigate("OrderNavigator", {
        screen: "OngoingDetails",
        params: { id: "84300NDS", name: "John Doe", status: "Ongoing" },
      });
    }
  };
  return (
    <TouchableOpacity
      style={DeliveriesCardStyles.container}
      onPress={() => handleCardClick()}
    >
      <View>
        <Text style={DeliveriesCardStyles.id}>Delivery ID: {id}</Text>
        <Text style={DeliveriesCardStyles.name}>{name}</Text>
      </View>
      <View style={DeliveriesCardStyles.statusContainer}>
        <StatusPill status={status} />
      </View>
      {status === "New" && (
        <ModalLayout
          modalVisible={incoming}
          setModalVisible={() => setIncoming(!incoming)}
          children={
            <View style={styles.modalContainer}>
              <TouchableOpacity
                onPress={() => setIncoming(false)}
                style={styles.closeContainer}
              >
                <View style={styles.closeIcon} />
              </TouchableOpacity>
              <View>
                <View style={styles.modalTop}>
                  <Text style={styles.modalTitle}>Incoming delivery</Text>
                  <View style={styles.rowContainer}>
                    <Text style={styles.idText}>Delivery ID: 84300NDS</Text>
                    <Text style={styles.modalPrice}>₦2,100</Text>
                  </View>
                </View>
                <View style={styles.detailContainer}>
                  <View style={styles.rowContainer}>
                    <Text style={styles.detailText}>Restaurant name</Text>
                    <Text style={styles.rightText}>Chicken republic</Text>
                  </View>
                  <View style={styles.rowContainer}>
                    <Text style={styles.detailText}>Restaurant address</Text>
                    <Text style={styles.rightText}>
                      Ligali Ayorinde street, VI
                    </Text>
                  </View>
                </View>
              </View>
              <Text style={styles.timeAway}>You are 5 minutes away from the restaurant</Text>
              <View style={styles.btnsContainer}>
                <View style={styles.btnContainer}>
                  <MainButton
                    title="Decline"
                    onPress={() => handleDecline()}
                    outline={true}
                    color={grey500}
                    bG={white}
                  />
                </View>
                <View style={styles.btnContainer}>
                  <MainButton
                    title="Accept"
                    onPress={() => handleAccept()}
                    outline={false}
                    color={grey500}
                    bG={orange500}
                  />
                </View>
              </View>
            </View>
          }
        />
      )}
    </TouchableOpacity>
  );
};
export default DeliveriesCard;
