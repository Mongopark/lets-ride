import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, Image, Linking, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import {
  black,
  cream,
  grey300,
  grey50,
  grey500,
  grey900,
  orange50,
  orange500,
  white,
} from "../../constants/colors";
import { StatusBar } from "expo-status-bar";
import ModalLayout from "../../components/modals/modalLayout";
import MainButton from "../../components/buttons/mainButton";
import { ArrowLeft, Call, CloseCircle, Location, MessageText, Star, Star1, StarSlash } from "iconsax-react-native";
import MapView from "react-native-maps";
import { useNavigation } from "@react-navigation/native";
import { RIDER_PROFILE } from "../../../assets/images/image";
import OrderCard from "../../components/cards/orderCard";

const OrderPicked = () => {
  const [customer, setCustomer] = useState(false);
  const [ contactInfoActive, setContactInfoActive ] = useState<boolean>(false);

  const navigation = useNavigation();
  useEffect(() => {
    setCustomer(true);
  }, []);
  return (
    <View style={styles.screenContainer}>
      <StatusBar translucent={true} style={"dark"} backgroundColor={white} />
      <View style={styles.contentContainer}>
        <View style={styles.topBar}>
          <TouchableOpacity onPress={() => navigation.goBack() }>
            <View style={styles.goBackBtn}>
              <ArrowLeft size={12} color={grey900} />
            </View>
          </TouchableOpacity>
        </View>
        <MapView
          style={{ flex: 1 }}
          initialRegion={{
            latitude: 6.517912,
            longitude: 3.385983,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }}
        />
      </View>
      <ModalLayout
        modalVisible={customer}
        setModalVisible={() => setCustomer(!customer)}
        children={
          <View style={styles.modalContainer}>
            <TouchableOpacity
              onPress={() => setCustomer(false)}
              style={styles.closeContainer}
            >
              <View style={styles.closeIcon} />
            </TouchableOpacity>
            <View>
              <View style={styles.modalTop}>
                <Text style={styles.modalTitle}>Delivery address</Text>
                <View style={styles.deliveryAddress}>
                  <Location size="24" color={grey300} />
                  <Text style={styles.idText}>Admiralty road, Lekki phase 1</Text>
                </View>
              </View>
              <View style={styles.modalTop}>
                <Text style={styles.modalTitle}>Delivery details</Text>
                <View style={styles.rowContainer}>
                  <Text style={styles.idText}>Delivery ID: 84300NDS</Text>
                  <Text style={styles.modalPrice}>₦2,100</Text>
                </View>
              </View>
              <View style={styles.detailContainer}>
                <View style={styles.deliveryAddress}>
                  <Text style={styles.comments}>Comments:</Text>
                  <Text style={styles.commentBody}>
                    Hope Harriman street, Admiralty road, Lekki phase 1
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.btnsContainer}>
              <View style={styles.btnContainer}>
                <MainButton
                  title="Contact customer"
                  onPress={() => setContactInfoActive(true)}
                  outline={true}
                  color={grey500}
                  bG={white}
                />
              </View>
              <View style={styles.btnContainer}>
                <MainButton
                  title="Drop-off complete"
                  onPress={() => console.log("Drop-off complete")}
                  outline={false}
                  color={grey500}
                  bG={orange500}
                />
              </View>
            </View>
            <ModalLayout
              modalVisible={contactInfoActive}
              setModalVisible={() => setContactInfoActive(true)}
              children={
                <View style={styles.contactInfoModalContainer}>
                  <View style={styles.contactInfoModalTop}>
                    <TouchableOpacity onPress={() => setContactInfoActive(false)}>
                      <CloseCircle color="#000000" size={24}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.contactInfoModalTopHelpBtn}>
                      <Text>Help</Text>
                    </TouchableOpacity>
                  </View>
                  <ScrollView style={styles.contactInfoModal}>
                    <View style={styles.contactInfoModalMain}>
                      <View>
                        <Text style={styles.contactInfoModalMainHeader}>Contact customer</Text>
                      </View>
                      <View>
                        <Text style={styles.contactInfoModalMainDeliveryLabel}>Estimated delivery time: <Text style={styles.contactInfoModalMainDeliveryValue}>11:40 AM</Text> </Text>
                      </View>
                      <View style={styles.contactInfoModalMainStatusContainer}>
                        <View style={styles.contactInfoModalMainStatusDeliveryBar}></View>
                        <View style={styles.contactInfoModalMainStatusDeliveryBar}></View>
                        <View style={styles.contactInfoModalMainStatusDeliveryBar}></View>
                        <View style={styles.contactInfoModalMainStatusDeliveryBar}></View>
                        <View style={styles.contactInfoModalMainStatusDeliveryBar}></View>
                      </View>
                      <MapView
                        style={{ width: '100%', height: 343 }}
                        initialRegion={{
                          latitude: 6.517912,
                          longitude: 3.385983,
                          latitudeDelta: 0.01,
                          longitudeDelta: 0.01,
                        }}
                      />
                    </View>
                    <View style={styles.contactInfoModalCustomerDetails}>
                      <View>
                        <Text style={styles.contactInfoModalCustomerDetailsHeader}>Customer’s details</Text>
                      </View>
                      <View style={styles.contactInfoModalCustomerDetailsContainer}>
                        <View style={styles.contactInfoModalCustomerDetailsContainerDetails}>
                          <View>
                            <Image source={RIDER_PROFILE} style={styles.contactInfoModalCustomerDetailsContainerDetailsImg}/>
                          </View>
                          <View style={styles.contactInfoModalCustomerDetailsContainerDetailsText}>
                            <Text style={styles.contactInfoModalCustomerDetailsContainerDetailsTextName}>Harry Johnson</Text>
                            <View style={styles.contactInfoModalCustomerDetailsContainerDetailsRating}>
                              <Text>★</Text>
                              <Text style={styles.contactInfoModalCustomerDetailsContainerDetailsRatingText}>4.1</Text>
                            </View>
                          </View>
                        </View>
                        <View style={styles.contactInfoModalCustomerDetailsContainerActions}>
                          <TouchableOpacity onPress={() => Linking.openURL(`tel:+2348162344034`)}><Call color="#2F2F2F" size={24}/></TouchableOpacity>
                        </View>
                      </View>
                    </View>
                    <View style={styles.contactInfoModalOrder}>
                      <Text style={styles.contactInfoModalCustomerDetailsHeader}>Order</Text>
                      <OrderCard/>
                    </View>
                  </ScrollView>
                </View>
              }
            />
          </View>
        }
      />
    </View>
  );
};

export default OrderPicked;

const styles = StyleSheet.create({
  contactInfoModalContainer: {
    backgroundColor: white,
    maxHeight: '80%',
    width: "100%",
    borderRadius: 10,
  },
  contactInfoModal: {
    paddingBottom: 55,
  },
  contactInfoModalTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: grey50,
    paddingHorizontal: 16,
    paddingTop: 9,
    paddingBottom: 21,
  },
  contactInfoModalTopHelpBtn: {
    backgroundColor: orange500,
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 18,
  },
  contactInfoModalMain: {
    paddingTop: 21,
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  contactInfoModalMainHeader: {
    color: grey500,
    textAlign: 'center',
    fontFamily: 'satoshi-bold',
    fontSize: 24,
    fontWeight: '700',
    letterSpacing: -0.12,
    marginBottom: 12,
  },
  contactInfoModalMainDeliveryLabel: {
    color: grey300,
    textAlign: 'center',
    fontFamily: 'satoshi',
    fontSize: 14,
    fontWeight: '400',
  },
  contactInfoModalMainDeliveryValue: {
    color: grey500,
    textAlign: 'center',
    fontFamily: 'satoshi-medium',
    fontSize: 14,
    fontWeight: '500',
  },
  contactInfoModalMainStatusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    paddingHorizontal: 16,
  },
  contactInfoModalMainStatusDeliveryBar: {
    borderRadius: 38,
    height: 3,
    width: '20%',
    backgroundColor: orange500,
    maxWidth: 343,
    marginTop: 16,
    marginBottom: 38,
  },
  contactInfoModalCustomerDetails: {
    marginTop: 32,
    paddingHorizontal: 16,
  },
  contactInfoModalCustomerDetailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: grey50,
  },
  contactInfoModalCustomerDetailsContainerActions: {
    flexDirection: 'row',
    gap: 16,
    alignItems: 'center',
  },
  contactInfoModalCustomerDetailsContainerDetails: {
    flexDirection: 'row',
    gap: 14,
  },
  contactInfoModalCustomerDetailsContainerDetailsImg: {
    width: 64,
    height: 64,
    borderRadius: 64,
  },
  contactInfoModalCustomerDetailsContainerDetailsText: {
    gap: 8,
    alignItems: 'flex-start',
  },
  contactInfoModalCustomerDetailsContainerDetailsTextName: {
    color: grey500,
    fontSize: 14,
    fontFamily: 'satoshi-medium',
    lineHeight: 19,
    fontWeight: '500',
  },
  contactInfoModalCustomerDetailsContainerDetailsRating: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    paddingVertical: 4,
    paddingHorizontal: 6,
    borderRadius: 18,
    backgroundColor: grey50,
  },
  contactInfoModalCustomerDetailsContainerDetailsRatingText: {
    color: grey500,
    fontSize: 12,
    lineHeight: 16,
    fontFamily: 'satoshi',
  },
  contactInfoModalCustomerDetailsHeader: {
    color: grey500,
    fontSize: 20,
    fontWeight: '700',
    lineHeight: 27,
    fontFamily: 'satoshi-bold',
    marginBottom: 14,
  },
  contactInfoModalOrder: {
    paddingTop: 16,
    paddingBottom: 55,
    paddingHorizontal: 16,
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
  deliveryAddress: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  closeIcon: {
    width: 50,
    height: 5,
    borderRadius: 100,
    backgroundColor: "#D9D9D9",
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
  },
  modalPrice: {
    fontWeight: "700",
    fontSize: 14,
    lineHeight: 19,
    color: grey500,
  },
  idText: {
    color: grey500,
    fontSize: 14,
    lineHeight: 19,
  },
  modalTop: {
    marginBottom: 20,
    gap: 12,
    paddingBottom: 20,
    borderBottomColor: cream,
    borderBottomWidth: 1,
  },
  modalTitle: {
    fontWeight: "700",
    fontSize: 18,
    lineHeight: 24.3,
    color: grey500,
  },
  btnsContainer: {
    flexDirection: "row",
    gap: 16,
    paddingTop: 20,
    marginBottom: 32,
  },
  btnContainer: {
    flex: 0.5,
  },
  rowContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 20,
  },
  stopContainer: {
    marginBottom: 20,
    gap: 12,
  },
  screenContainer: {
    flex: 1,
    backgroundColor: white,
  },
  contentContainer: {
    flex: 1,
  },
  topBar: {
    position: 'absolute',
    zIndex: 500,
    paddingHorizontal: 16,
    justifyContent: "flex-start",
    marginTop: 40,
    paddingTop: 20,
  },
  goBackBtn: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: white,
    height: 32,
    width: 32,
    borderRadius: 16,
  },
  comments: {
    color: black,
    fontFamily: 'satoshi-bold',
    fontSize: 10,
    lineHeight: 19,
  },
  commentBody: {
    color: grey500,
    fontSize: 10,
    lineHeight: 19,
  }
});
