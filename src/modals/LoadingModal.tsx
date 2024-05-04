import { StyleSheet, View, Modal, ActivityIndicator } from "react-native";
import { orange500 } from "../constants/colors";

const LoadingModal = () => {
  return (
    <Modal
      visible={true}
      animationType="fade"
      transparent={true}
      //   onRequestClose={toggleModal}
    >
      <View style={styles.modalContainer}>
        <ActivityIndicator size="large" color={orange500} />
      </View>
    </Modal>
  );
};

export default LoadingModal;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
});
