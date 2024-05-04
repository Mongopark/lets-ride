import { Image, StyleSheet, Text, View } from "react-native"
import { HAMBURGER } from "../../../assets/images/image";
import { grey300, grey500 } from "../../constants/colors";

const OrderCard = () => {
    return(
        <View style={styles.cardWrapper}>
            <View style={styles.cardDescription}>
                <View>
                    <Image source={HAMBURGER} style={styles.cardImg}/>
                </View>
                <View style={styles.cardDescriptionText}>
                    <Text numberOfLines={2} style={styles.cardDescriptionHeader}>Food name: Lorem ipsum & seit dolors</Text>
                    <Text numberOfLines={2} style={styles.cardDescriptionValue}>Description: Lorem ipsum & seit dolors</Text>
                </View>
            </View>
            <View>
                <Text style={styles.cardDetailsPrice}>₦1,500.00</Text>
                <Text style={styles.cardDetailsPrevPrice}>₦2,500.00</Text>
            </View>
        </View>
    )
}
export default OrderCard;

const styles = StyleSheet.create({
    cardWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 14,
    },
    cardDescription: {
        flex: 1,
        flexDirection: 'row',
        gap: 10,
    },
    cardImg: {
        width: 80,
        height: 80,
        resizeMode: 'cover',
    },
    cardDescriptionText: {
        flex: 1,
    },
    cardDescriptionHeader: {
        fontSize: 16,
        fontFamily: 'satoshi-medium',
        lineHeight: 22,
        color: grey500,
    },
    cardDescriptionValue: {
        marginTop: 6,
        fontSize: 14,
        fontFamily: 'satoshi',
        lineHeight: 18,
        color: grey300,
    },
    cardDetailsPrice: {
        color: grey500,
        fontFamily: 'satoshi',
        fontSize: 14,
        lineHeight: 18,
        textAlign: 'right',
    },
    cardDetailsPrevPrice: {
        marginTop: 6,
        color: grey300,
        fontFamily: 'satoshi',
        fontSize: 12,
        lineHeight: 16,
        textAlign: 'right',
        textDecorationLine: 'line-through',
    }
})