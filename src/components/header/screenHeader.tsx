import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import { grey900 } from '../../constants/colors';


type ScreenHeaderProps = {
  title: string;
  desc: string;
};
const ScreenHeader = ({title, desc}: ScreenHeaderProps) => {
  return (
    <View style={styles.screenHeader}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.desc}>{desc}</Text>
    </View>
  );
};

export default ScreenHeader;

export const styles = StyleSheet.create({
    screenHeader: {
      paddingHorizontal: 10,
      marginTop: 20,
      marginBottom: 15,
    },
    title: {
      fontSize: 24,
      fontWeight: '700',
      color: grey900,
      textAlign: 'center',
      marginBottom: 5,
    },
    desc: {
      fontSize: 14,
      textAlign: 'center',
      marginTop: 10,
      color: '#A9ABB8',
      marginVertical: 10,
    },
  });