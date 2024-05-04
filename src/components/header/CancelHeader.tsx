import { Text, View, StyleSheet } from "react-native";
import React from "react";
import { CloseCircle, Call } from "iconsax-react-native";
import { useNavigation } from "@react-navigation/native";
import { grey40, grey900 } from "../../constants/colors";

type CancelHeaderProps = {
  title: string;
};

const CancelHeader = ({ title }: CancelHeaderProps) => {
  const { goBack } = useNavigation();
  return (
    <View style={styles.headerContainer}>
      <CloseCircle
        size="24"
        color={grey900}
        onPress={() => {
          goBack();
        }}
      />
      <Text style={styles.title}>{title}</Text>

      <Call size="24" color={grey900} />
    </View>
  );
};

export default CancelHeader;

export const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 15,
    borderBottomColor: grey40,
    borderBottomWidth: 1,
    paddingHorizontal: 15,
    width: "100%",
    paddingTop: 24,
    backgroundColor: "white",
    marginTop: 50,
  },
  title: {
    fontSize: 17,
    fontWeight: "500",
  },
});
