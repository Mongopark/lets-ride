import { StyleSheet, View, Modal, Pressable } from "react-native";
import React, { ReactNode } from "react";

const ModalLayout = ({
  children,
  setModalVisible,
  modalVisible,
}: {
  children: ReactNode;
  setModalVisible: any;
  modalVisible: any;
}) => {
  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };
  return (
    <Modal
      visible={modalVisible}
      animationType="slide"
      transparent={true}
      onRequestClose={toggleModal}
    >
      <View style={styles.downModal}>
        <Pressable onPress={() => toggleModal()} style={styles.modalCloseBg} />
        {children}
      </View>
    </Modal>
  );
};

export default ModalLayout;

const styles = StyleSheet.create({
  downModal: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "flex-end",
    alignItems: "center",
    position: "relative",
  },
  modalCloseBg: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
});
