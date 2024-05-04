import {StyleSheet} from 'react-native';
import { grey350, grey500, grey900, orange500, white } from '../../../constants/colors';

export const WelcomeStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
    paddingHorizontal: 20,
    paddingBottom: 45,
  },
  main: {
    flex: 1,
    justifyContent: 'center',
  },
  background: {
    height: 390.44,
    width: '100%',
    maxWidth: 350.04,
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingTop: 73.31,
    resizeMode: 'cover',
  },
  header: {
    fontWeight: '600',
    fontSize: 24,
    lineHeight: 26.4,
    textAlign: 'center',
    color: grey900,
  },
  subheader: {
    fontSize: 14,
    fontWeight: '400',
    textAlign: 'center',
    color: grey350,
    marginTop: 12,
    maxWidth: 311,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: orange500,
    height: 58,
    borderRadius: 8,
    marginTop: 20,
  },
  buttonCTA: {
    color: grey500,
    fontWeight: '700',
    fontSize: 16,
    letterSpacing: 0.015,
  },
  terms: {
    color: grey350,
    fontSize: 12,
    fontWeight: '400',
    textAlign: 'center',
    lineHeight: 16,
  },
  logIn: {
    color: grey350,
    fontSize: 12,
    fontWeight: '400',
    textAlign: 'center',
    marginTop: 10,
  },
});
