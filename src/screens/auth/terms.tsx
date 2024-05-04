import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../navigation/authNavigator";
import { SafeAreaView } from "react-native-safe-area-context";
import { TermsStyles } from "../../styles/screens/auth/terms.styles";

const TermsScreen = () => {
	const { navigate } = useNavigation<StackNavigationProp<RootStackParamList>>();
	return (
		<SafeAreaView>
			<ScrollView>
				<View style={TermsStyles.container}>
					<View>
						<Text style={TermsStyles.header}>Terms & Conditions</Text>
						<Text style={TermsStyles.date}>Updated May 5, 2023</Text>
					</View>
					<View style={TermsStyles.body}>
						<Text style={TermsStyles.bodyText}>
							Acceptance of Terms and Conditions By accessing and using the NDIA
							platform, you agree to comply with the terms and conditions outlined
							below. These terms govern your use of the NDIA website, mobile
							applications, and associated services.
						</Text>
					</View>
					<View style={TermsStyles.section}>
						<Text style={TermsStyles.sectionHeader}>User Responsibilities</Text>
						<View style={TermsStyles.orderedList}>
							<Text style={TermsStyles.bodyTextList}>1.</Text>
							<Text style={TermsStyles.bodyText}>
								Customers: Customers are responsible for providing accurate and
								up-to-date information when placing orders. NDIA is not liable for
								any issues arising from incorrect or incomplete information
								provided by customers.
							</Text>
						</View>
						<View style={TermsStyles.orderedList}>
							<Text style={TermsStyles.bodyTextList}>2.</Text>
							<Text style={TermsStyles.bodyText}>
								Vendors: Vendors are responsible for maintaining accurate product
								listings, pricing, and availability on the NDIA platform. NDIA
								reserves the right to take necessary action if vendors violate
								terms or fail to meet quality standards.
							</Text>
						</View>
						<View style={TermsStyles.orderedList}>
							<Text style={TermsStyles.bodyTextList}>3.</Text>
							<Text style={TermsStyles.bodyText}>
								Riders: Riders are responsible for delivering orders promptly and
								ensuring the safety and integrity of the delivered items. They
								should adhere to delivery protocols and guidelines provided by
								NDIA.
							</Text>
						</View>
					</View>
					<View style={TermsStyles.section}>
						<Text style={TermsStyles.sectionHeader}>Ordering and Delivery</Text>
						<View style={TermsStyles.orderedList}>
							<Text style={TermsStyles.bodyTextList}>1.</Text>
							<Text style={TermsStyles.bodyText}>
								Orders: Customers can place orders through the NDIA platform,
								selecting their desired vendor and items. NDIA is not responsible
								for the quality or accuracy of the products provided by vendors.
							</Text>
						</View>
						<View style={TermsStyles.orderedList}>
							<Text style={TermsStyles.bodyTextList}>2.</Text>
							<Text style={TermsStyles.bodyText}>
								Delivery: NDIA strives to provide accurate delivery estimates, but
								actual delivery times may vary depending on various factors. NDIA
								is not responsible for delays caused by external circumstances
								beyond its control.
							</Text>
						</View>
					</View>
					<View style={TermsStyles.section}>
						<Text style={TermsStyles.sectionHeader}>Payment and Fees</Text>
						<View style={TermsStyles.orderedList}>
							<Text style={TermsStyles.bodyTextList}>1.</Text>
							<Text style={TermsStyles.bodyText}>
								Customers: Customers agree to pay for their orders through the
								payment methods accepted on the NDIA platform. NDIA reserves the
								right to charge applicable taxes, delivery fees, or service
								charges.
							</Text>
						</View>
						<View style={TermsStyles.orderedList}>
							<Text style={TermsStyles.bodyTextList}>2.</Text>
							<Text style={TermsStyles.bodyText}>
								Vendors: Vendors agree to pay a commission fee to NDIA based on
								the agreed-upon percentage of each order's total value. Commission
								rates may vary based on sales volume or promotional offers.
							</Text>
						</View>
					</View>
					<View style={TermsStyles.section}>
						<Text style={TermsStyles.sectionHeader}>
							Cancellations and Refunds
						</Text>
						<View style={TermsStyles.orderedList}>
							<Text style={TermsStyles.bodyTextList}>1.</Text>
							<Text style={TermsStyles.bodyText}>
								Customers: Customers can cancel orders before they are confirmed
								by the vendor. Refunds for canceled orders are subject to the
								vendor's refund policy.
							</Text>
						</View>
						<View style={TermsStyles.orderedList}>
							<Text style={TermsStyles.bodyTextList}>2.</Text>
							<Text style={TermsStyles.bodyText}>
								Vendors: Vendors may have their own cancellation and refund
								policies, which should be communicated to customers clearly. NDIA
								is not responsible for vendor policies regarding cancellations or
								refunds.
							</Text>
						</View>
					</View>
					<View style={TermsStyles.section}>
						<Text style={TermsStyles.sectionHeader}>Intellectual Property</Text>
						<View style={TermsStyles.orderedList}>
							<Text style={TermsStyles.bodyText}>
								NDIA retains all rights to its website, mobile applications,
								logos, trademarks, and other intellectual property. Users are
								prohibited from using, copying, or reproducing any NDIA
								intellectual property without prior written consent.
							</Text>
						</View>
					</View>
					<View style={TermsStyles.section}>
						<Text style={TermsStyles.sectionHeader}>
							Privacy and Data Protection
						</Text>
						<View style={TermsStyles.orderedList}>
							<Text style={TermsStyles.bodyText}>
								NDIA takes privacy and data protection seriously. By using the
								platform, you acknowledge and agree to the NDIA Privacy Policy,
								which outlines how personal information is collected, used, and
								protected.
							</Text>
						</View>
					</View>
					<View style={TermsStyles.section}>
						<Text style={TermsStyles.sectionHeader}>
							Limitation of Liability
						</Text>
						<View style={TermsStyles.orderedList}>
							<Text style={TermsStyles.bodyText}>
								NDIA is not liable for any direct, indirect, incidental, or
								consequential damages arising from the use or inability to use the
								platform, including but not limited to loss of profits, data, or
								business opportunities.
							</Text>
						</View>
					</View>
					<View style={TermsStyles.section}>
						<Text style={TermsStyles.sectionHeader}>
							Modifications to Terms and Conditions
						</Text>
						<View style={TermsStyles.orderedList}>
							<Text style={TermsStyles.bodyText}>
								NDIA reserves the right to modify or update these terms and
								conditions at any time. Users will be notified of any significant
								changes, and continued use of the platform constitutes acceptance
								of the modified terms.
							</Text>
						</View>
					</View>
					<View style={TermsStyles.section}>
						<Text style={TermsStyles.sectionHeader}>
							Governing Law and Jurisdiction
						</Text>
						<View style={TermsStyles.orderedList}>
							<Text style={TermsStyles.bodyText}>
								These terms and conditions are governed by the laws of Nigeria.
								Any disputes arising from the use of the NDIA platform shall be
								subject to the exclusive jurisdiction of the courts in Nigeria.
							</Text>
						</View>
					</View>
					<View style={TermsStyles.section}>
						<View style={TermsStyles.orderedList}>
							<Text style={TermsStyles.bodyText}>
								By accessing and using the NDIA platform, you indicate your
								acceptance of these terms and conditions. If you do not agree with
								any part of these terms, please refrain from using the NDIA
								platform.
							</Text>
						</View>
					</View>
					<TouchableOpacity
						onPress={() => navigate("Welcome")}
						style={TermsStyles.button}
					>
						<Text style={TermsStyles.buttonCTA}>Get Started</Text>
					</TouchableOpacity>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};
export default TermsScreen;
