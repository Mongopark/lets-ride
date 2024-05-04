import {
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { LOGO_SM } from "../../../assets/images/image";
import { grey900, orange500 } from "../../constants/colors";
import { useState } from "react";
import { TickSquare } from "iconsax-react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../navigation/authNavigator";
import { useNavigation } from "@react-navigation/native";
import RidingDetailsStyles from "../../styles/screens/onboarding/ridingDetails.styles";
import Toast from "react-native-toast-message";
import { useAppDispatch, useTypedSelector } from "../../hooks";
import { RootState } from "../../store";
import { setRidingDetails } from "../../features/signUpSlice";

const RidingDetailsScreen = () => {
  const { navigate } = useNavigation<StackNavigationProp<RootStackParamList>>();
  const dispatch = useAppDispatch();
  const [ridingOption, setRidingOption] = useState<
    "fulltime" | "parttime" | "weekends" | ""
  >("");
  const ridersId = useTypedSelector((store: RootState) => store.register.id);
  const handleSubmit = () => {
    try {
      dispatch(setRidingDetails({ availability: ridingOption }));
      navigate("VerificationDetails");
    } catch (error: any) {
      Toast.show({
        type: "error",
        text1: "Error",
        text2: error.data.message,
        position: "top",
      });
    }
  };
  return (
    <SafeAreaView style={RidingDetailsStyles.safeArea}>
      <View style={RidingDetailsStyles.container}>
        <View>
          <Image source={LOGO_SM} alt="" style={RidingDetailsStyles.image} />
        </View>
        <View style={RidingDetailsStyles.headerContainer}>
          <Text style={RidingDetailsStyles.header}>
            How often would you want to ride?
          </Text>
          <Text style={RidingDetailsStyles.subheader}>
            Select any of the options below that suits your preference.
          </Text>
        </View>
      </View>
      <View style={RidingDetailsStyles.formWrapper}>
        <TouchableOpacity
          style={RidingDetailsStyles.ridingOption}
          onPress={() => setRidingOption("fulltime")}
        >
          <View>
            {ridingOption === "fulltime" ? (
              <TickSquare variant="Bold" size={24} color={orange500} />
            ) : (
              <TickSquare variant="Linear" size={24} color="#2F2F2F" />
            )}
          </View>
          <View>
            <Text style={RidingDetailsStyles.ridingOptionHeader}>
              Full time
            </Text>
            <Text style={RidingDetailsStyles.ridingOptionSubHeader}>
              9 hours, everyday
            </Text>
            <View style={RidingDetailsStyles.ridingOptionTerms}>
              <Text style={RidingDetailsStyles.ridingOptionTerm}>
                {"\u2022"} {"  "}
                Lorem ipsum dolor sit amet, consectetur
              </Text>
              <Text style={RidingDetailsStyles.ridingOptionTerm}>
                {"\u2022"} {"  "}
                Lorem ipsum dolor sit amet, consectetur
              </Text>
              <Text style={RidingDetailsStyles.ridingOptionTerm}>
                {"\u2022"} {"  "}
                Lorem ipsum dolor sit amet, consectetur
              </Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={RidingDetailsStyles.ridingOption}
          onPress={() => setRidingOption("parttime")}
        >
          <View>
            {ridingOption === "parttime" ? (
              <TickSquare variant="Bold" size={24} color={orange500} />
            ) : (
              <TickSquare variant="Linear" size={24} color="#2F2F2F" />
            )}
          </View>
          <View>
            <Text style={RidingDetailsStyles.ridingOptionHeader}>
              Part time
            </Text>
            <Text style={RidingDetailsStyles.ridingOptionSubHeader}>
              6 hours, everyday
            </Text>
            <View style={RidingDetailsStyles.ridingOptionTerms}>
              <Text style={RidingDetailsStyles.ridingOptionTerm}>
                {"\u2022"} {"  "}
                Lorem ipsum dolor sit amet, consectetur
              </Text>
              <Text style={RidingDetailsStyles.ridingOptionTerm}>
                {"\u2022"} {"  "}
                Lorem ipsum dolor sit amet, consectetur
              </Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={RidingDetailsStyles.ridingOption}
          onPress={() => setRidingOption("weekends")}
        >
          <View>
            {ridingOption === "weekends" ? (
              <TickSquare variant="Bold" size={24} color={orange500} />
            ) : (
              <TickSquare variant="Linear" size={24} color="#2F2F2F" />
            )}
          </View>
          <View>
            <Text style={RidingDetailsStyles.ridingOptionHeader}>Weekends</Text>
            <Text style={RidingDetailsStyles.ridingOptionSubHeader}>
              9 hours, saturday & sunday{" "}
            </Text>
            <View style={RidingDetailsStyles.ridingOptionTerms}>
              <Text style={RidingDetailsStyles.ridingOptionTerm}>
                {"\u2022"} {"  "}
                Lorem ipsum dolor sit amet, consectetur
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
      <View style={RidingDetailsStyles.bottom}>
        <TouchableOpacity
          style={
            ridingOption === ""
              ? RidingDetailsStyles.submit
              : RidingDetailsStyles.activeSubmit
          }
          disabled={ridingOption === ""}
          onPress={handleSubmit}
        >
          <Text
            style={[
              ridingOption === ""
                ? RidingDetailsStyles.submitText
                : RidingDetailsStyles.activeSubmitText,
              { color: grey900 },
            ]}
          >
            Next
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
export default RidingDetailsScreen;
