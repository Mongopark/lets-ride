import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { grey200, grey500, orange50 } from "../../constants/colors";

interface PropTypes {
  filterTIle: string;
  filterBy: string;
}

const FilterCard: React.FC<PropTypes> = ({ filterTIle, filterBy }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.filterTitle}>{filterTIle} </Text>
      <Text style={styles.filterBy}>{filterBy}</Text>
    </View>
  );
};

export default FilterCard;

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    backgroundColor: orange50,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 8,
    paddingVertical: 10,
    fontWeight: "400",
  },
  filterTitle: {
    color: grey200,
    fontSize: 12,
  },
  filterBy: {
    color: grey500,
    fontWeight: "600",
    fontSize: 12,
  },
});
