import { Text, TextInput, TouchableOpacity, View } from "react-native";
import React, { ReactNode, ChangeEvent } from "react";
import { StyleSheet } from "react-native";
import {
  grey100,
  grey40,
  grey50,
  grey500,
  grey900,
  orange500,
} from "../../constants/colors";

type AccountInputsProps = {
  label: string;
  placeholder?: string;
  icon?: boolean;
  variant?: ReactNode;
  onChange: (e: string | ChangeEvent<any>) => void;
  onBlur: (e: string | ChangeEvent<any>) => void;
  touched: any;
  error: any;
  value: string;
  showPassword?: boolean;
  toggleIcon?: () => void;
  isPassword: boolean;
  isEditable?: boolean;
  isNumber?: boolean;
  maxLength?: number | undefined;
  noAutoFocus?: boolean,
  placeholderTextColor?: string,
};

const AccountInputs = ({
  label,
  placeholder,
  icon,
  variant,
  onChange,
  touched,
  error,
  value,
  showPassword,
  toggleIcon,
  isPassword,
  isEditable,
  isNumber,
  maxLength,
  noAutoFocus,
  placeholderTextColor
}: AccountInputsProps) => {
  return (
    <View style={styles.nameField}>
      <Text style={styles.label}> {label}</Text>
      <View style={styles.input}>
        <TextInput
          onChangeText={onChange}
          autoComplete="email"
          placeholder={placeholder}
          secureTextEntry={isPassword && !showPassword}
          value={value}
          autoFocus={noAutoFocus ? false : true}
          editable={isEditable}
          style={styles.inputBox}
          keyboardType={isNumber ? "numeric" : "default"}
          maxLength={maxLength}
          placeholderTextColor={placeholderTextColor || grey50}
        />
        <TouchableOpacity onPress={toggleIcon}>
          {icon ? variant : null}
        </TouchableOpacity>
      </View>
      {touched && error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

export default AccountInputs;

export const styles = StyleSheet.create({
  nameField: {
    gap: 5,
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    color: "#A9ABB8",
    fontWeight: "400",
  },
  inputBox: {
    flex: 1,
    height: "100%",
    // paddingHorizontal: 16,
    paddingVertical: 16,
    fontFamily: "satoshi",
  },
  input: {
    backgroundColor: grey100,
    borderRadius: 8,
    fontSize: 14,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    color: grey900,
    paddingHorizontal: 16,
    gap: 16,
  },
  error: {
    fontSize: 12,
    color: "red",
  },
  fileInputContainer: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: grey40,
    borderRadius: 8,
    fontSize: 14,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    color: grey900,
    borderWidth: 1,
    borderStyle: "dashed",
    borderColor: grey40,
  },
  inputTextContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  inputLink: {
    color: orange500,
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 16,
    textDecorationLine: "underline",
  },
  subText: {
    color: grey500,
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 16,
  },
});
