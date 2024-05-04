import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
} from "react-native";
import React, { ReactNode, ChangeEvent } from "react";
import {
  grey100,
  grey350,
  grey40,
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
  isNumber?: boolean | undefined;
  maxlength?: number | undefined;
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
  maxlength,
}: AccountInputsProps) => {
  return (
    <View style={styles.nameField}>
      <Text style={styles.label}> {label}</Text>
      <View style={styles.input}>
        <TextInput
          onChangeText={onChange}
          placeholder={placeholder}
          secureTextEntry={isPassword && !showPassword}
          value={value}
          autoFocus={true}
          editable={isEditable}
          style={styles.inputField}
          keyboardType={isNumber ? "numeric" : "default"}
          maxLength={maxlength}
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

const styles = StyleSheet.create({
  nameField: {
    gap: 5,
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    color: grey350,
    fontWeight: "400",
  },
  input: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: grey100,
    borderRadius: 8,
    fontSize: 14,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    color: grey900,
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
  inputField: {
    flex: 1,
  },
});
