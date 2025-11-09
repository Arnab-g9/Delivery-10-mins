import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import App from '../../../App'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ScreenNames } from './constants';
import LoginScreen from '../../features/auth/screens/login/LoginScreen';
import DashboardScreen from '../../features/dashboard/screens/dashboard/DashboardScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const AppNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
            >
                <Stack.Screen
                    name={ScreenNames.LOGIN_SCREEN}
                    component={LoginScreen}
                />
                <Stack.Screen
                    name={ScreenNames.DASHBOARD_SCREEN}
                    component={DashboardScreen}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigation

