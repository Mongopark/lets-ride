import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React from "react";
import GoBackHeader from "../../components/header/GoBackHeader";
import { useNavigation } from "@react-navigation/native";
import { white, cream, grey900 } from "../../constants/colors";
import { ArrowRight2 } from "iconsax-react-native";
import { StatusBar } from "react-native";

const Faq = () => {
  const { navigate } = useNavigation<any>();
  const frequentlyAskedQuestions = [
    {
      icon: true,
      title: "What is NDIA?",
      index: 1,
      detail:
        "NDIA is a cutting-edge food delivery platform that connects customers with local vendors and dedicated riders, providing a seamless and convenient ordering experience.",
    },
    {
      icon: true,
      title: "How does NDIA work for customers?",
      index: 2,
      detail:
        "NDIA allows customers to browse through a wide variety of vendors, select their desired meals, place orders, track deliveries in real-time, and enjoy delicious food delivered to their doorstep.",
    },
    {
      icon: true,
      title: "What benefits does NDIA offer to vendors?",
      index: 3,
      detail:
        "NDIA empowers vendors by expanding their customer reach, increasing visibility, and providing a user-friendly platform to manage orders, update menus, communicate with customers, and boost sales.",
    },
    {
      icon: true,
      title: "How can riders join NDIA?",
      index: 4,
      detail:
        " Riders can apply to join NDIA's dedicated fleet through our rider recruitment process. We welcome passionate individuals who own a mode of transportation and are committed to providing exceptional delivery services.",
    },
    {
      icon: true,
      title: "How does NDIA ensure the safety and quality of food deliveries?",
      index: 5,
      detail:
        "NDIA places a high emphasis on safety and quality. We carefully vet vendors to ensure compliance with hygiene standards, and our dedicated riders follow secure delivery protocols to maintain food freshness and integrity.",
    },
    {
      icon: true,
      title: "Can I order from multiple vendors in one order?",
      index: 6,
      detail:
        "Currently, NDIA supports ordering from a single vendor per order. However, you can place multiple orders from different vendors if needed.",
    },
    {
      icon: true,
      title: "What payment methods are accepted on NDIA?",
      index: 7,
      detail:
        "NDIA accepts various payment methods, including credit/debit cards, mobile wallets, and in some cases, cash on delivery. We prioritize convenient and secure payment options for our customers.",
    },
    {
      icon: true,
      title: "How can I track my order?",
      index: 8,
      detail:
        "NDIA provides real-time order tracking through our app, allowing you to monitor the progress of your delivery from the moment it is dispatched until it reaches your location.",
    },
    {
      icon: true,
      title: " What if I have an issue with my order or need customer support?",
      index: 9,
      detail:
        "NDIA offers dedicated customer support via our in-app chat feature, where you can reach out to our team for assistance with any order-related issues or inquiries.",
    },
    {
      icon: true,
      title: "Are there any fees associated with using NDIA?",
      index: 10,
      detail:
        "NDIA charges a nominal commission fee to vendors for utilizing our platform's services.",
    },
  ];
  return (
    <ScrollView style={styles.screenContainer}>
      <StatusBar
        translucent={true}
        backgroundColor={white}
        barStyle="dark-content"
      />
      <GoBackHeader title="FAQ" />
      <View style={styles.container}>
        {frequentlyAskedQuestions.map((item, index) => {
          return (
            <TouchableOpacity
              style={styles.faqContainer}
              key={index}
              onPress={() => {
                navigate("ProfileNavigator", {
                  screen: "FaqDetail",
                  params: { item },
                });
              }}
            >
              <Text style={styles.faqTitle}>{item.title}</Text>
              <View>
                <ArrowRight2 size="24" color={grey900} />
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </ScrollView>
  );
};

export default Faq;

const styles = StyleSheet.create({
  screenContainer: {
    backgroundColor: white,
    flex: 1,
  },
  container: {
    paddingHorizontal: 16,
    flex: 1,
    gap: 20,
    paddingTop: 20,
  },

  faqContainer: {
    borderBottomWidth: 1,
    borderBottomColor: cream,
    paddingBottom: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 12,
  },
  faqTitle: {
    color: grey900,
    fontSize: 16,
    width: "80%",
  },
});
