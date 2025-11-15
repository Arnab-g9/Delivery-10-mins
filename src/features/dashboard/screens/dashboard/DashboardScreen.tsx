import { ScrollView, StyleSheet, View } from 'react-native'
import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useTheme } from '../../../../theme/ThemeProvider'
import { useStyles } from './DashboardScreen.styles'
import { useNavigation } from '@react-navigation/native'
import OrderCard from '../../components/Card/OrderCard/OrderCard'
import { default as Text } from '../../../../components/Text/MSText'
import Header from '../../components/Header/Header'
import WalletIcon from "react-native-vector-icons/AntDesign"
import { ScreenNames } from '../../../../navigation/constants'

const DashboardScreen = () => {
    const { colors } = useTheme();
    const styles = useStyles(colors);
    const navigation = useNavigation();

    const handlePressViewAll = () => {
        navigation.navigate(ScreenNames.RUNNING_ORDERS as never);
    }

    const handlePressNotification = () => {
        navigation.navigate(ScreenNames.NOTIFICATION_SCREEN as never);
    }

    useEffect(() => {
        const renderAppHeader = () => (
            <Header onPressNotification={handlePressNotification} />
        );
        navigation.setOptions({
            headerShown: true,
            header: renderAppHeader,
        });
    }, []);
    return (
        <SafeAreaView edges={["bottom"]} style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.contentContainerStyle}>
                <View style={styles.header}>
                    <Text>Active Order</Text>
                    <Text style={styles.viewAll} onPress={handlePressViewAll}>View All</Text>
                </View>
                <OrderCard />
                {/* Earnings section */}
                <View style={styles.earningsSection}>
                    <Text>Earnings</Text>
                    <View style={styles.earningCard}>
                        {/* upper section */}
                        <View style={styles.earningCardHeader}>
                            <View>
                                <WalletIcon name={"wallet"} size={50} color={colors.primaryCtaText} />
                            </View>
                            <View style={styles.balanceContainer}>
                                <Text varient='medium' style={styles.earningCardCommonText}>Balance</Text>
                                <Text varient='medium' style={[styles.earningCardCommonText, styles.balanceText]}>$ 1,875.21</Text>
                            </View>
                        </View>

                        {/* lower section */}
                        <View style={styles.earningContainerSection}>
                            <View style={styles.box}>
                                <Text style={styles.earningCardCommonText}>Today</Text>
                                <Text style={styles.earningCardCommonText}>$ 0.00</Text>
                            </View>
                            <View style={styles.box}>
                                <Text style={styles.earningCardCommonText}>Today</Text>
                                <Text style={styles.earningCardCommonText}>$ 0.00</Text>
                            </View>
                            <View style={styles.boxWithoutBorder}>
                                <Text style={styles.earningCardCommonText}>Today</Text>
                                <Text style={styles.earningCardCommonText}>$ 0.00</Text>
                            </View>
                        </View>
                    </View>
                </View>
                {/* orders section */}
                <View style={styles.orderSection}>
                    <Text>Orders</Text>
                    <View style={styles.row}>
                        <View style={[styles.card, styles.black]}>
                            <Text varient='semiBold' style={styles.cardTitle} >0</Text>
                            <Text varient='semiBold' style={styles.cardTitle}>Today's Orders</Text>
                        </View>
                        <View style={[styles.card, styles.red]}>
                            <Text varient='semiBold' style={styles.cardTitle}>0</Text>
                            <Text varient='semiBold' style={styles.cardTitle}>This Week Orders</Text>
                        </View>
                    </View>
                    <View style={styles.fullCard}>
                        <Text varient='semiBold' style={styles.cardTitleSecondary} >20</Text>
                        <Text varient='semiBold' style={styles.cardTitleSecondary}>Total Orders</Text>
                    </View>
                    <View style={[styles.fullCard, styles.blackFullcard]}>
                        <Text varient='semiBold' style={styles.cardTitle} >$ 0.00</Text>
                        <Text varient='semiBold' style={styles.cardTitle}>Cash In Your Hand</Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default DashboardScreen

const styles = StyleSheet.create({})