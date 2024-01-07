import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import tw from 'twrnc'

import Login from './screens/Login';
import OnBoarding from './screens/OnBoarding';

export default function App() {
  return (
    <OnBoarding />
  );
}