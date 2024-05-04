import { View, StyleSheet, TextInput } from "react-native";
import React, { useRef } from "react";
import { grey100 } from "../../constants/colors";

interface PinInputProps {
  length: number;
  pinValues: string[];
  onPinChange: (index: any, value: any) => void;
}

const PinInput: React.FC<PinInputProps> = ({
  length,
  pinValues,
  onPinChange,
}) => {
  const pinInputs = Array.from({ length }, (_, index) => index);
  const inputRefs = pinInputs.map(() => useRef<TextInput>(null));

  const handleTextChange = (text: string, index: number) => {
    onPinChange(index, text);
    if (text) {
      if (index < length - 1) {
        inputRefs[index + 1].current?.focus();
      }
    } else {
      // Handle backspace key manually
      if (index > 0) {
        inputRefs[index - 1].current?.focus();
      }
    }
  };
  return (
    <View style={styles.pinInputContainer}>
      {pinInputs.map((_, index) => (
        <TextInput
          key={index}
          ref={inputRefs[index]}
          style={styles.pinInput}
          onChangeText={(text) => handleTextChange(text, index)}
          keyboardType="numeric"
          maxLength={1}
          autoFocus={index === 0}
          // onKeyPress={handleKeyPress}
          value={pinValues[index]}
        />
      ))}
    </View>
  );
};

export default PinInput;

const styles = StyleSheet.create({
  pinInputContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
    marginBottom: 40,
  },
  pinInput: {
    textAlign: "center",
    height: 56,
    width: 56,
    backgroundColor: grey100,
    borderRadius: 8,
    fontSize: 21,
    fontWeight: "700",
    lineHeight: 24,
  },
});
