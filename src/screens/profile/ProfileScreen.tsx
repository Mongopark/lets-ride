import React, { useState } from "react";
import { View, Text } from "react-native";
import Dropdown from "../../components/dropDown/Dropdown";
import {
  User,
  MessageRemove,
  MessageText,
  Wallet,
  Briefcase,
} from "iconsax-react-native";
import { white, grey900, orange500 } from "../../constants/colors";
import ModalLayout from "../../components/modals/modalLayout";
import MainButton from "../../components/buttons/mainButton";
import { styles } from "../../styles/screens/account/ProfileScreen";
import { useNavigation } from "@react-navigation/native";
// import {useAppDispatch} from '../../redux/store';
// import {logoutUser} from '../../redux/actions/authAction';
import TextAloneHeader from "../../components/header/TextAloneHeader";
import { StatusBar } from "react-native";
import { ProfileStackParamList } from "../../navigation/ProfileNavigator";
import { RootStackParamList } from "../../navigation/authNavigator";
import { useLoginMutation, useLogoutMutation } from "../../services/auth";
import { useTypedSelector } from "../../hooks";
import { RootState } from "../../store";
import LoadingModal from "../../modals/LoadingModal";

const accountDetails = [
  {
    icon: <User size="24" color={grey900} />,
    title: "Personal details",
    index: 1,
  },
  {
    icon: <Briefcase size="24" color={grey900} />,
    title: "Business details",
    index: 2,
  },
  {
    icon: <Wallet size="24" color={grey900} />,
    title: "Wallet & payout",
    index: 3,
  },
  {
    icon: <MessageText size="24" color={grey900} />,
    title: "Chat with support",
    index: 4,
  },
  {
    icon: <MessageRemove size="24" color={grey900} />,
    title: "FAQ",
    index: 5,
  },
  {
    icon: null,
    title: "Delete my account and data",
    index: 6,
  },
  {
    icon: null,
    title: "Log out",
    index: 7,
  },
];

const ProfileScreen = () => {
  const { navigate } = useNavigation<any>();
  const [modalVisible, setModalVisible] = useState(false);
  const refreshToken = useTypedSelector(
    (store: RootState) => store.user.refreshToken
  );
  const [logout, { isLoading }] = useLogoutMutation();
  const handleLogOut = async () => {
    try {
      const logoOutResponse = await logout({
        refreshToken: refreshToken,
      }).unwrap();
      console.log(logoOutResponse);
    } catch (error) {
      console.log(error);
    }
    console.log("Console");
  };
  const handleDropdownEvent = (e: any) => {
    switch (e.index) {
      case 1:
        navigate("PersonalDetails");
        break;
      case 2:
        navigate("BusinessDetails");
        break;
      case 3:
        navigate("Wallet");
        break;
      case 4:
        navigate("ChatWithSupport");
        break;
      case 5:
        navigate("Faq");
        break;
      case 6:
        setModalVisible(true);
        break;
      case 7:
        console.log("Something");
        break;
      default:
        break;
    }
  };
  //
  //
  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={white}
        translucent={true}
        barStyle={"dark-content"}
      />
      <TextAloneHeader title="My account" />
      {accountDetails.map((item, index) => (
        <View key={index}>
          <Dropdown onPress={(e) => handleDropdownEvent(e)} element={item} />
        </View>
      ))}
      <ModalLayout
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        children={
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>
              Are you sure you want to delete your account?
            </Text>
            <Text style={styles.modalDesc}>
              Note that deleting your account cannot be undone so we need you to
              confirm before we proceed with your request.
            </Text>
            <View style={styles.btns}>
              <View style={styles.btn}>
                <MainButton
                  title="Cancel"
                  outline={true}
                  onPress={() => setModalVisible(false)}
                  bG={""}
                  color={grey900}
                />
              </View>
              <View style={styles.btn}>
                <MainButton
                  title="Delete account"
                  outline={false}
                  onPress={() => console.log("deleteAccount")}
                  bG={orange500}
                  color={grey900}
                />
              </View>
            </View>
          </View>
        }
      />
      <Text style={styles.version}>Ndia • Version 1.0</Text>
      {isLoading && <LoadingModal />}
    </View>
  );
};

//
//
export default ProfileScreen;
