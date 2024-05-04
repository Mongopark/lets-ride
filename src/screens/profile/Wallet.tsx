import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import GoBackHeader from "../../components/header/GoBackHeader";
import MainButton from "../../components/buttons/mainButton";
import {
  white,
  orange500,
  grey900,
  grey200,
  orange50,
  grey500,
  grey300,
} from "../../constants/colors";
import TransactionCard from "../../components/wallet/TransactionCard";
import { useNavigation } from "@react-navigation/native";
import { transactions } from "../../constants/transactions";
import ModalLayout from "../../components/modals/modalLayout";
import { Formik } from "formik";
import AccountInputs from "../../components/inputs/AccountInputs";
import {
  initialValues,
  validationSchema,
} from "../../validators/profile/withdrawalAmount";
import { Information } from "iconsax-react-native";
import { StatusBar } from "react-native";
import { useGetWalletQuery } from "../../services/wallet";

const Wallet = () => {
  const [WithdrawalModal, setWithdrawalModal] = useState(false);
  const { navigate } = useNavigation<any>();
  const { data: walletData, isSuccess: walletIsSuccess } = useGetWalletQuery();

  return (
    <View style={styles.screenContainer}>
      <StatusBar
        translucent={true}
        backgroundColor={white}
        barStyle="dark-content"
      />
      <GoBackHeader title="Wallet & payout" />
      <View style={styles.mainContainer}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.walletBalanceCard}>
            <Image
              style={styles.logo}
              source={require("../../../assets/images/wallet-icon.png")}
            />
            <Text style={styles.walletText}>Wallet balance</Text>
            <Text style={styles.walletBalance}>
              ₦{walletData?.data.wallet.balance}.00
            </Text>
            <View style={styles.btnContainer}>
              <MainButton
                onPress={() => setWithdrawalModal(true)}
                color={grey900}
                outline={false}
                bG={orange500}
                title="Initiate withdrawal"
              />
            </View>
          </View>
          <View style={styles.accountDetailsContainer}>
            <Text style={styles.detailsTitle}>
              Beneficiary account information
            </Text>
            <View style={styles.rowContainer}>
              <Text style={styles.detailsText}>Bank name</Text>
              <Text style={styles.detailsText}>
                {walletData?.data?.wallet?.bankName}
              </Text>
            </View>
            <View style={styles.rowContainer}>
              <Text style={styles.detailsText}>Account number</Text>
              <Text style={styles.detailsText}>
                {walletData?.data?.wallet.bankAccountNumber}
              </Text>
            </View>
            <View style={styles.rowContainer}>
              <Text style={styles.detailsText}>Account name</Text>
              <Text style={styles.detailsText}>
                {walletData?.data?.wallet?.accountName}
              </Text>
            </View>
          </View>
          <View>
            <View style={[styles.rowContainer, { marginBottom: 14 }]}>
              <Text style={styles.textTitle}>Recent transaction</Text>
              <TouchableOpacity
                onPress={() =>
                  navigate("ProfileNavigator", { screen: "Transactions" })
                }
              >
                <Text style={styles.textBtn}>See all</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.transactions}>
              {transactions.map((item, index) => {
                const { transactionType, description, date, amount } = item;
                return (
                  <TransactionCard
                    key={index}
                    transactionType={transactionType}
                    description={description}
                    date={date}
                    amount={amount}
                  />
                );
              })}
            </View>
            {/* Transaction summary modal */}

            {/* Transaction summary ending */}
            <ModalLayout
              modalVisible={WithdrawalModal}
              setModalVisible={setWithdrawalModal}
              children={
                <View style={styles.modalContainer}>
                  <TouchableOpacity
                    onPress={() => setWithdrawalModal(false)}
                    style={styles.closeContainer}
                  >
                    <View style={styles.closeIcon}></View>
                  </TouchableOpacity>
                  <View style={styles.modalTitle}>
                    <Text style={styles.textTitle}>Withdrawal</Text>
                    <Text style={styles.modalSubTitleSubText}>
                      Kindly enter the amount you will like to withdraw
                    </Text>
                  </View>
                  <View style={styles.inputContainer}>
                    <Formik
                      initialValues={initialValues}
                      validationSchema={validationSchema}
                      onSubmit={() => console.log("WIthdrawal")}
                    >
                      {({
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        values,
                        errors,
                        touched,
                      }) => (
                        <AccountInputs
                          label="Amount"
                          placeholder="eg. ₦500"
                          onChange={handleChange("amount")}
                          onBlur={handleBlur("amount")}
                          touched={touched.amount}
                          value={values.amount}
                          isPassword={false}
                          error={errors.amount}
                        />
                      )}
                    </Formik>
                  </View>
                  <View style={styles.accountDetailsWithdrawalWrapper}>
                    <Information size={24} color={orange500} />
                    <View style={styles.accountDetailsWithdrawalInnerWrapper}>
                      <Text style={styles.detailsTitle}>
                        Beneficiary account information
                      </Text>
                      <View style={styles.rowContainer}>
                        <Text style={styles.detailsText}>Bank name</Text>
                        <Text style={styles.detailsText}>First Bank</Text>
                      </View>
                      <View style={styles.rowContainer}>
                        <Text style={styles.detailsText}>Account number</Text>
                        <Text style={styles.detailsText}>1234567890</Text>
                      </View>
                      <View style={styles.rowContainer}>
                        <Text style={styles.detailsText}>Account name</Text>
                        <Text style={styles.detailsText}>John Doe</Text>
                      </View>
                      <Text style={styles.linkText}>
                        Click here to update details
                      </Text>
                    </View>
                  </View>
                  <MainButton
                    title="Continue"
                    color={grey900}
                    bG={orange500}
                    onPress={() =>
                      navigate("ProfileNavigator", {
                        screen: "ConfirmWithdrawal",
                      })
                    }
                    outline={false}
                  />
                </View>
              }
            />
          </View>
          <ModalLayout
            modalVisible={WithdrawalModal}
            setModalVisible={setWithdrawalModal}
            children={
              <View style={styles.modalContainer}>
                <TouchableOpacity
                  onPress={() => setWithdrawalModal(false)}
                  style={styles.closeContainer}
                >
                  <View style={styles.closeIcon}></View>
                </TouchableOpacity>
                <View style={styles.modalTitle}>
                  <Text style={styles.textTitle}>Withdrawal</Text>
                  <Text style={styles.modalSubTitleSubText}>
                    Kindly enter the amount you will like to withdraw
                  </Text>
                </View>
                <View style={styles.inputContainer}>
                  <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={() => console.log("WIthdrawal")}
                  >
                    {({
                      handleChange,
                      handleBlur,
                      handleSubmit,
                      values,
                      errors,
                      touched,
                    }) => (
                      <AccountInputs
                        label="Amount"
                        placeholder="eg. ₦500"
                        onChange={handleChange("amount")}
                        onBlur={handleBlur("amount")}
                        touched={touched.amount}
                        value={values.amount}
                        isPassword={false}
                        error={errors.amount}
                        isNumber={true}
                      />
                    )}
                  </Formik>
                </View>
                <View style={styles.accountDetailsWithdrawalWrapper}>
                  <Information size={24} color={orange500} />
                  <View style={styles.accountDetailsWithdrawalInnerWrapper}>
                    <Text style={styles.detailsTitle}>
                      Beneficiary account information
                    </Text>
                    <View style={styles.rowContainer}>
                      <Text style={styles.detailsText}>Bank name</Text>
                      <Text style={styles.detailsText}>First Bank</Text>
                    </View>
                    <View style={styles.rowContainer}>
                      <Text style={styles.detailsText}>Account number</Text>
                      <Text style={styles.detailsText}>1234567890</Text>
                    </View>
                    <View style={styles.rowContainer}>
                      <Text style={styles.detailsText}>Account name</Text>
                      <Text style={styles.detailsText}>John Doe</Text>
                    </View>
                    <Text style={styles.linkText}>
                      Click here to update details
                    </Text>
                  </View>
                </View>
                <MainButton
                  title="Continue"
                  color={grey900}
                  bG={orange500}
                  onPress={() =>
                    navigate("ProfileNavigator", {
                      screen: "ConfirmWithdrawal",
                    })
                  }
                  outline={false}
                />
              </View>
            }
          />
        </ScrollView>
      </View>
    </View>
  );
};

export default Wallet;

const styles = StyleSheet.create({
  screenContainer: { flex: 1, backgroundColor: "white" },
  mainContainer: {
    paddingHorizontal: 16,
    position: "relative",
    flex: 1,
    paddingBottom: 32,
  },
  walletBalanceCard: {
    backgroundColor: grey900,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 24,
    justifyContent: "flex-start",
    alignItems: "center",
    marginVertical: 24,
  },
  walletText: {
    color: grey200,
    fontSize: 12,
    fontWeight: "400",
  },
  walletBalance: {
    color: "white",
    fontSize: 32,
    fontWeight: "700",
    marginBottom: 24,
  },
  btnContainer: {
    width: "100%",
  },
  logo: {
    position: "absolute",
    top: 9.5,
    bottom: 10.5,
  },
  accountDetailsContainer: {
    padding: 10,
    borderRadius: 8,
    backgroundColor: orange50,
    gap: 8,
    marginBottom: 24,
  },
  accountDetailsWithdrawalWrapper: {
    padding: 10,
    borderRadius: 8,
    backgroundColor: orange50,
    gap: 16,
    marginBottom: 24,
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  accountDetailsWithdrawalInnerWrapper: {
    gap: 8,
    width: "100%",
    flexShrink: 1,
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  linkText: {
    fontSize: 8,
    fontWeight: "700",
    textDecorationLine: "underline",
    color: orange500,
  },
  detailsText: {
    fontSize: 10,
    fontWeight: "400",
    color: grey500,
  },
  detailsTitle: {
    fontSize: 12,
    fontWeight: "700",
    color: grey500,
  },
  textTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: grey500,
  },
  textBtn: {
    fontSize: 14,
    fontWeight: "500",
    color: grey300,
  },
  transactions: {
    gap: 16,
  },
  modalSubTitleSubText: {
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 18.9,
    color: grey300,
  },
  modalTitle: {
    gap: 6,
    marginBottom: 20,
  },
  modalContainer: {
    backgroundColor: white,
    width: "100%",
    paddingHorizontal: 16,
    paddingVertical: 20,
    borderRadius: 10,
  },
  inputContainer: {
    marginBottom: 20,
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
  modalPriceContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  modalPriceText: {
    fontSize: 30,
  },
});
