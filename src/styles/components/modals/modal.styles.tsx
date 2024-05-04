import { StyleSheet } from "react-native";
import { grey350, grey500, white } from "../../../constants/colors";

const ModalStyles = StyleSheet.create({
    modalContainer: {
        backgroundColor: white,
        width: "100%",
        paddingHorizontal: 16,
        paddingVertical: 20,
        borderRadius: 10,
        paddingBottom: 40,
      },
      closeContainer: {
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 20,
      },
      closeIcon: {
        width: 50,
        height: 5,
        borderRadius: 100,
        backgroundColor: "#D9D9D9",
      },
      modalTitle: {
        fontSize: 20,
        fontFamily: 'satoshi-bold',
        marginBottom: 16,
        textAlign: 'center'
      },
      modalItem: {
        padding: 17,
        justifyContent: "center",
        alignItems: "center",
      },
      actionModalContainer: {
        backgroundColor: white,
        width: "100%",
        borderRadius: 10,
      },
      modalOptions: {
        borderColor: grey350,
        borderTopWidth: 1,
        marginTop: 20,
      },
      modalOptionsTextContainer: {
        borderColor: grey350,
        borderBottomWidth: 1,
      },
      modalOptionsText: {
        fontSize: 16,
        textAlign: 'center',
        fontFamily: 'satoshi-medium',
        paddingVertical: 16,
      }
})
export default ModalStyles;