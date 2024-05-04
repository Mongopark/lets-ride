import React from "react";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { grey500, orange500 } from "../../constants/colors";
import { RootStackParamList } from "../../navigation/authNavigator";
import { WELCOME_BG } from "../../../assets/images/image";
import { WelcomeStyles } from "../../styles/screens/auth/welcome.styles";
import {
  StatusBar,
  View,
  TouchableOpacity,
  ImageBackground,
  Text,
} from "react-native";

const WelcomeScreen = () => {
  const { navigate } = useNavigation<StackNavigationProp<RootStackParamList>>();
  const handleSkip = () => {
    navigate("PersonalDetails");
    // navigate("BankDetails");
  };

  return (
    <View style={WelcomeStyles.container}>
      <StatusBar
        barStyle={"dark-content"}
        backgroundColor="rgba(0,0,0,0)"
        translucent={true}
      />
      <View style={WelcomeStyles.main}>
        <ImageBackground source={WELCOME_BG} style={WelcomeStyles.background}>
          <View>
            <Text style={WelcomeStyles.header}>
              Welcome to <Text style={{ color: orange500 }}>Ndia’</Text>
            </Text>
          </View>
          <View>
            <Text style={WelcomeStyles.subheader}>
              Order food from local vendors around you, we’ve got you covered.
            </Text>
          </View>
        </ImageBackground>
      </View>
      <View>
        <View>
          <Text style={WelcomeStyles.terms}>
            By registering, you accept our{" "}
            <Text
              style={{ textDecorationLine: "underline" }}
              onPress={() => navigate("Terms")}
            >
              Terms & Conditions
            </Text>
          </Text>
        </View>
        <TouchableOpacity onPress={handleSkip} style={WelcomeStyles.button}>
          <Text style={WelcomeStyles.buttonCTA}>Get Started</Text>
        </TouchableOpacity>
        <View>
          <Text style={WelcomeStyles.logIn}>
            Have an account already?{" "}
            <Text
              style={{ color: grey500, fontWeight: "700" }}
              onPress={() => navigate("Login")}
            >
              Log in
            </Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

export default WelcomeScreen;
