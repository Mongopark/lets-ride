import { StyleSheet } from "react-native";
import { black, grey200, grey30, grey300, grey40, grey500, orange50, orange500, white } from "../../constants/colors";

const DashboardStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: white,
        paddingBottom: -34,
    },
    location: {
        paddingTop: 34,
        paddingBottom: 12,
        paddingHorizontal: 20,
        borderBottomWidth: 1,
        borderBottomColor: grey40,
    },
    locationHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    headerText: {
        fontFamily: 'satoshi-bold',
        fontSize: 20,
        lineHeight: 27,
    },
    locationFilter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 24,
    },
    locationFilterTimeline: {
        backgroundColor: orange50,
        paddingVertical: 10,
        paddingHorizontal: 8,
        borderRadius: 8,
    },
    locationFilterTimelineText: {
        color: grey30,
        fontSize: 12,
        lineHeight: 16,
        fontFamily: 'satoshi'
    },
    locationFilterTimelineTextValue: {
        color: grey500,
        fontFamily: 'satoshi-bold'
    },
    locationFilterChange: {
        color: orange500,
        fontSize: 12,
        lineHeight: 16,
        fontFamily: 'satoshi-bold'
    },
    main:{
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 24,
    },
    doubleMetricsWrapper: {
        flexDirection: 'row',
        gap: 12,
        marginTop: 16,
    },
    metricsWrapper: {
        borderWidth: 1,
        borderRadius: 8,
        borderColor: grey40,
        padding: 12,
    },
    metricsIcon: {
        width: 34,
        height: 34,
        borderRadius: 100,
        backgroundColor: grey40,
        alignItems: 'center',
        justifyContent: 'center',
    },
    metricsContent: {
        marginTop: 24,
    },
    metricsTitle: {
        fontSize: 12,
        lineHeight: 16,
        fontFamily: 'satoshi',
        color: grey30,
    },
    metricsValue: {
        fontSize: 20,
        lineHeight: 27,
        fontFamily: 'satoshi-bold',
        color: black,
    },
    recentDeliveries: {
        marginTop: 45,
    },
    recentDeliveriesTop: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    recentDeliveriesHeader: {
        fontFamily: 'satoshi-bold',
        fontSize: 20,
        lineHeight: 27,
        color: grey500,
    },
    recentDeliveriesSeeAll: {
        color: grey300,
        fontFamily: 'satoshi-medium',
        fontSize: 14,
        lineHeight: 19,
    },
    recentDeliveriesWrapper: {
        paddingBottom: 70,
    }
})
export default DashboardStyles;