import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import OnBoarding from '../screens/OnBoarding'
import Login from '../screens/Login'

const Stack = createNativeStackNavigator()
export default function StackNav() {
  return (
    <Stack.Navigator>
        <Stack.Screen
        name="OnBoarding"
        component={OnBoarding}
        />
        <Stack.Screen
        name="Login"
        component={Login}
        />
    </Stack.Navigator>
  )
}