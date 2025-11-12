import { Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ScreenNames } from '../constants';
import LoginScreen from '../../features/auth/screens/login/LoginScreen';
import DashboardScreen from '../../features/dashboard/screens/dashboard/DashboardScreen';
import RunningOrderScreen from '../../features/orders/screens/RunningOrderScreen';
import ProfileScreen from '../../features/profile/screens/ProfileScreen/ProfileScreen';
import { useTheme } from '../../theme/ThemeProvider';
import { SafeAreaView } from 'react-native-safe-area-context';
import HomeIcon from 'react-native-vector-icons/FontAwesome6'
import TaskIcon from 'react-native-vector-icons/FontAwesome5'
import MyOrders from 'react-native-vector-icons/Feather'
import UserIcon from 'react-native-vector-icons/Feather'
import Notification from '../../features/notification/screens/Notification';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const AppNavigation = () => {
    const { colors } = useTheme();

    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
            // initialRouteName={ScreenNames.PROFILE_SCREEN}
            >
                <Stack.Screen
                    name={ScreenNames.LOGIN_SCREEN}
                    component={LoginScreen}
                />
                <Stack.Screen
                    name={ScreenNames.HOME_SCREEN}

                >
                    {
                        () => {
                            return (
                                <SafeAreaView edges={["bottom"]} style={{ flex: 1, backgroundColor: colors.background_primary }}>
                                    <Tab.Navigator
                                        initialRouteName={ScreenNames.DASHBOARD_SCREEN}
                                        screenOptions={{
                                            headerShown: false,
                                            tabBarActiveTintColor: colors.primary,
                                            tabBarInactiveTintColor: colors.contentPrimary,
                                            tabBarStyle: {
                                                backgroundColor: colors.card_bg_primary,
                                                borderTopWidth: 0,
                                                borderTopLeftRadius: 20,
                                                borderTopRightRadius: 20,
                                                paddingBottom: 5,
                                                height: 60,
                                            },
                                            tabBarHideOnKeyboard: true,
                                            tabBarIconStyle: { marginTop: 5 },
                                            tabBarLabelStyle: {
                                                fontSize: 12,
                                                marginTop: 0,
                                            },
                                        }}
                                    >
                                        <Tab.Screen
                                            name={ScreenNames.DASHBOARD_SCREEN}
                                            component={DashboardScreen}
                                            options={{
                                                tabBarIcon: ({ focused }) => (
                                                    <HomeIcon
                                                        name={'house'}
                                                        size={20}
                                                        color={
                                                            focused ? colors.primary : colors.contentPrimary
                                                        }
                                                    />
                                                ),
                                                tabBarLabel: ({ focused }) => (
                                                    <Text style={{ color: focused ? colors.primary : colors.contentPrimary }}>Home</Text>
                                                )
                                            }}
                                        />
                                        <Tab.Screen
                                            name={ScreenNames.ORDER_REQUEST}
                                            component={DashboardScreen}
                                            options={{
                                                tabBarIcon: ({ focused }) => (
                                                    <TaskIcon
                                                        name={'tasks'}
                                                        size={20}
                                                        color={
                                                            focused ? colors.primary : colors.contentPrimary
                                                        }
                                                    />
                                                ),
                                                tabBarLabel: ({ focused }) => (
                                                    <Text style={{ color: focused ? colors.primary : colors.contentPrimary }}>Order Request</Text>
                                                )
                                            }}
                                        />
                                        <Tab.Screen
                                            name={ScreenNames.MY_ORDER}
                                            component={DashboardScreen}
                                            options={{
                                                tabBarIcon: ({ focused }) => (
                                                    <MyOrders
                                                        name={'shopping-bag'}
                                                        size={20}
                                                        color={
                                                            focused ? colors.primary : colors.contentPrimary
                                                        }
                                                    />
                                                ),
                                                tabBarLabel: ({ focused }) => (
                                                    <Text style={{ color: focused ? colors.primary : colors.contentPrimary }}>My Orders</Text>
                                                )
                                            }}
                                        />
                                        <Tab.Screen
                                            name={ScreenNames.PROFILE_SCREEN}
                                            component={ProfileScreen}
                                            options={{
                                                tabBarIcon: ({ focused }) => (
                                                    <UserIcon
                                                        name={'user'}
                                                        size={20}
                                                        color={
                                                            focused ? colors.primary : colors.contentPrimary
                                                        }
                                                    />
                                                ),
                                                tabBarLabel: ({ focused }) => (
                                                    <Text style={{ color: focused ? colors.primary : colors.contentPrimary }}>Profile</Text>
                                                )
                                            }}
                                        />
                                    </Tab.Navigator>
                                    <SafeAreaView edges={['bottom']} style={{ backgroundColor: colors.background_primary }} />
                                </SafeAreaView>
                            )
                        }
                    }
                </Stack.Screen>
                <Stack.Screen
                    name={ScreenNames.RUNNING_ORDERS}
                    component={RunningOrderScreen}
                />
                <Stack.Screen
                    name={ScreenNames.PROFILE_SCREEN}
                    component={ProfileScreen}
                />
                <Stack.Screen
                    name={ScreenNames.NOTIFICATION_SCREEN}
                    component={Notification}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigation

