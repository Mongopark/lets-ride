import { View, Text, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import {
  black,
  green,
  lightGreen,
  lightRed,
  orange50,
  orange500,
  red,
} from "../../constants/colors";

interface PropTypes {
  status: string;
}

const StatusPill: React.FC<PropTypes> = ({ status }) => {
  const [bg, setBg] = useState("");
  const [textColor, setTextColor] = useState("");

  useEffect(() => {
    switch (status) {
      case "Ongoing":
        setTextColor(orange500);
        setBg(orange50);
        break;
      case "Completed":
        setTextColor(green);
        setBg(lightGreen);
        break;
      case "New":
        setTextColor(red);
        setBg(lightRed);
        break;
      default:
        setTextColor(black);
        setBg(black);
        break;
    }
  }, []);
  return (
    <Text
      style={[
        styles.status,
        { color: textColor || '#fff' },
      ]}
    >
      {status}
    </Text>
  );
};

export default StatusPill;

const styles = StyleSheet.create({
  status: {
    lineHeight: 22,
    fontWeight: "500",
    fontSize: 12,
    textAlign: "center",
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 1,
    borderWidth: 1,
  },
});
