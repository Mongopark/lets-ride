import { StyleSheet } from "react-native";
import { grey500, white } from "../../../constants/colors";

export const SplashScreenStyles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: grey500,
    },
    image: {
        width: 189,
        height: 71,
    },
    text: {
        marginTop: 16,
        color: white,
        fontSize: 12,
        fontWeight: '500',
        lineHeight: 16.2,
    }
})