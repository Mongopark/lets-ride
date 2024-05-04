import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { ArrowLeft2 } from "iconsax-react-native";
import { grey40, grey900 } from "../../constants/colors";
import { useNavigation } from "@react-navigation/native";

type GoBackHeaderProps = {
  title: string;
};

const GoBackHeader = ({ title }: GoBackHeaderProps) => {
  const navigation = useNavigation();
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity>
        <ArrowLeft2
          size="24"
          color={grey900}
          onPress={() => {
            navigation.goBack();
          }}
        />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
      <View />
    </View>
  );
};

export default GoBackHeader;

export const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 15,
    borderBottomColor: grey40,
    borderBottomWidth: 1,
    paddingHorizontal: 15,
    width: "100%",
    backgroundColor: "white",
    marginTop: 40,
  },
  title: {
    fontSize: 17,
    fontWeight: "500",
  },
});
