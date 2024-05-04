import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "../../styles/tabs/deliveries";
import { Candle, SearchNormal1 } from "iconsax-react-native";
import {
  black,
  grey300,
  grey500,
  orange500,
  white,
} from "../../constants/colors";
import DeliveriesCard from "../../components/cards/deliveriesCard";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import ModalLayout from "../../components/modals/modalLayout";
import MainButton from "../../components/buttons/mainButton";
import { useNavigation } from "@react-navigation/native";

const demoDeliveries = [
  { id: "5739GHD", name: "John Doe", status: "New" },
  { id: "5739GHD", name: "John Doe", status: "Completed" },
  { id: "5739GHD", name: "John Doe", status: "Completed" },
  { id: "5739GHD", name: "John Doe", status: "Ongoing" },
  { id: "5739GHD", name: "John Doe", status: "New" },
  { id: "5739GHD", name: "John Doe", status: "Ongoing" },
  { id: "5739GHD", name: "John Doe", status: "Completed" },
  { id: "5739GHD", name: "John Doe", status: "New" },
  { id: "5739GHD", name: "John Doe", status: "Ongoing" },
  { id: "5739GHD", name: "John Doe", status: "Completed" },
  { id: "5739GHD", name: "John Doe", status: "Completed" },
  { id: "5739GHD", name: "John Doe", status: "Ongoing" },
  { id: "5739GHD", name: "John Doe", status: "Completed" },
  { id: "5739GHD", name: "John Doe", status: "New" },
  { id: "5739GHD", name: "John Doe", status: "Completed" },
  { id: "5739GHD", name: "John Doe", status: "New" },
];

const filterTexts = [
  { text: "All" },
  { text: "New" },
  { text: "Ongoing" },
  { text: "Completed" },
];

const DeliveriesTab = () => {
  const [incoming, setIncoming] = useState(true);
  const [active, setActive] = useState<boolean>(false);
  const [filterTextsItems, setFilterTextsItems] = useState(filterTexts);
  const [tabCounts, setTabCounts] = useState({
    all: 0,
    new: 0,
    ongoing: 0,
    completed: 0,
  });
  const [filteredItems, setFilteredItems] = useState([
    { id: "", name: "", status: "" },
  ]);
  const [activeFilter, setActiveFilter] = useState("All");
  const { navigate } = useNavigation<any>();

  const handleDecline = () => {
    setIncoming(false);
  };

  const handleAccept = () => {
    setIncoming(false);
    navigate("OrderNavigator", {
      screen: "OrderDetails",
      params: { id: "84300NDS", name: "John Doe", status: "Ongoing" },
    });
  };

  useEffect(() => {
    setIncoming(true);
    setFilteredItems(demoDeliveries);
  }, []);

  const filterDeliveries = (status: string) => {
    setActiveFilter(status);
    if (status == "All") {
      setFilteredItems(demoDeliveries);
      return;
    }
    const newItems = demoDeliveries.filter((item) => {
      return item.status === status;
    });
    setFilteredItems(newItems);
  };

  return (
    <SafeAreaView style={styles.screenContainer}>
      <StatusBar translucent={true} style="dark" backgroundColor="white" />
      <View style={styles.topContainer}>
        <View style={styles.rowContainer}>
          <Text style={styles.tabTitle}>Deliveries</Text>
          <TouchableOpacity onPress={() => setActive(!active)}>
            <View
              style={active ? styles.activeActivityBar : styles.activityBar}
            >
              <View style={styles.activityBarDot}></View>
              <Text
                style={
                  active ? styles.activeActivityBarText : styles.activityBarText
                }
              >
                {active ? "Online" : "Offline"}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.filterBtnContainer}>
          {filterTextsItems.map((item, index) => {
            const { text } = item;
            return (
              <TouchableOpacity
                key={index}
                onPress={() => filterDeliveries(text)}
                style={
                  activeFilter === text
                    ? styles.activeFilterTextContainer
                    : styles.filterTextContainer
                }
              >
                <Text
                  style={[
                    styles.filterText,
                    activeFilter === text ? activeTab.active : null,
                  ]}
                >
                  {text} (7)
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
      <View style={styles.contentContainer}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {filteredItems.map((item, index) => {
            const { id, name, status } = item;
            return (
              <DeliveriesCard key={index} id={id} name={name} status={status} />
            );
          })}
        </ScrollView>
      </View>
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
    </SafeAreaView>
  );
};
export default DeliveriesTab;

const activeTab = StyleSheet.create({
  active: {
    color: orange500,
  },
});
