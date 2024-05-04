import { Box, NotificationBing, Ranking, Wallet } from "iconsax-react-native";
import { ScrollView, Text, View, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { black, grey500 } from "../../constants/colors";
import DashboardStyles from "../../styles/tabs/dashboard.styles";
import DeliveriesCard from "../../components/cards/deliveriesCard";
import { StatusBar } from "expo-status-bar";
import { useTypedSelector } from "../../hooks";

const DashboardTab = () => {
  const token = useTypedSelector((store) => store.user.accessToken);
  console.log(token);
  return (
    <SafeAreaView style={DashboardStyles.container}>
      <StatusBar style="dark" translucent={true} />
      <View style={DashboardStyles.location}>
        <View style={DashboardStyles.locationHeader}>
          <Text style={DashboardStyles.headerText}>Dashboard</Text>
          <NotificationBing size={24} color={black} />
        </View>
        {/* <View style={DashboardStyles.locationFilter}>
          <View style={DashboardStyles.locationFilterTimeline}>
            <Text style={DashboardStyles.locationFilterTimelineText}>
              Timeline:
              <Text style={DashboardStyles.locationFilterTimelineTextValue}>
                {" "}
                This week
              </Text>
            </Text>
          </View>
          <TouchableOpacity>
            <Text style={DashboardStyles.locationFilterChange}>
              Change filter
            </Text>
          </TouchableOpacity>
        </View> */}
      </View>
      <ScrollView style={DashboardStyles.main}>
        <View style={DashboardStyles.metricsWrapper}>
          <View style={DashboardStyles.metricsIcon}>
            <Wallet variant="Outline" size={24} color={grey500} />
          </View>
          <View style={DashboardStyles.metricsContent}>
            <Text style={DashboardStyles.metricsTitle}>Wallet balance</Text>
            <Text style={DashboardStyles.metricsValue}>₦0.00</Text>
          </View>
        </View>
        <View style={DashboardStyles.doubleMetricsWrapper}>
          <View style={[DashboardStyles.metricsWrapper, { flex: 1 }]}>
            <View style={DashboardStyles.metricsIcon}>
              <Box variant="Outline" size={24} color={grey500} />
            </View>
            <View style={DashboardStyles.metricsContent}>
              <Text style={DashboardStyles.metricsTitle}>Total deliveries</Text>
              <Text style={DashboardStyles.metricsValue}>0</Text>
            </View>
          </View>
          <View style={[DashboardStyles.metricsWrapper, { flex: 1 }]}>
            <View style={DashboardStyles.metricsIcon}>
              <Ranking variant="Outline" size={24} color={grey500} />
            </View>
            <View style={DashboardStyles.metricsContent}>
              <Text style={DashboardStyles.metricsTitle}>Highest rating</Text>
              <Text style={DashboardStyles.metricsValue}>0.0</Text>
            </View>
          </View>
        </View>
        <View style={DashboardStyles.recentDeliveries}>
          <View style={DashboardStyles.recentDeliveriesTop}>
            <Text style={DashboardStyles.recentDeliveriesHeader}>
              Recent deliveries{" "}
            </Text>
            <Text style={DashboardStyles.recentDeliveriesSeeAll}>See all</Text>
          </View>
        </View>
        <View style={DashboardStyles.recentDeliveriesWrapper}>
          <DeliveriesCard id="5739GHD" name="John Doe" status="New" />
          <DeliveriesCard id="5739GHD" name="John Doe" status="Ongoing" />
          <DeliveriesCard id="5739GHD" name="John Doe" status="Completed" />
          <DeliveriesCard id="5739GHD" name="John Doe" status="Ongoing" />
          <DeliveriesCard id="5739GHD" name="John Doe" status="Completed" />
          <DeliveriesCard id="5739GHD" name="John Doe" status="Completed" />
          <DeliveriesCard id="5739GHD" name="John Doe" status="Completed" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default DashboardTab;
