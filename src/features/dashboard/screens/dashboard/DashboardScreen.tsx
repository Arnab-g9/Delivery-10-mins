import { ScrollView, StyleSheet, View } from 'react-native'
import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useTheme } from '../../../../theme/ThemeProvider'
import { useStyles } from './DashboardScreen.styles'
import { useNavigation } from '@react-navigation/native'
import OrderCard from '../../components/Card/OrderCard/OrderCard'
import { default as Text } from '../../../../components/Text/MSText'
import Header from '../../components/Header/Header'

const DashboardScreen = () => {
    const { colors } = useTheme();
    const styles = useStyles(colors);
    const navigation = useNavigation();
    useEffect(() => {
        const renderAppHeader = () => (
            <Header />
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
                    <Text style={styles.viewAll}>View All</Text>
                </View>
                <OrderCard />
                {/* Earnings section */}
                <View style={styles.earningsSection}>
                    <Text>Earnings</Text>
                    <View style={styles.earningCard}>
                        {/* upper section */}
                        <View style={{ flexDirection: "row", gap: 20, alignContent: "center" }}>
                            <View>
                                <Text>icon</Text>
                            </View>
                            <View style={{ gap: 10 }}>
                                <Text>Balance</Text>
                                <Text>$ 1,875.21</Text>
                            </View>
                        </View>

                        {/* lower section */}
                        <View style={{ flexDirection: "row", alignItems: "center", marginTop: 40 }}>
                            <View style={{ gap: 10, flex: 1, justifyContent: "center", alignItems: "center", borderRightWidth: 1 }}>
                                <Text>Today</Text>
                                <Text>$ 0.00</Text>
                            </View>
                            <View style={{ gap: 10, flex: 1, justifyContent: "center", alignItems: "center", borderRightWidth: 1 }}>
                                <Text>Today</Text>
                                <Text>$ 0.00</Text>
                            </View>
                            <View style={{ gap: 10, flex: 1, justifyContent: "center", alignItems: "center" }}>
                                <Text>Today</Text>
                                <Text>$ 0.00</Text>
                            </View>
                        </View>
                    </View>
                </View>
                {/* orders section */}
                <View style={styles.orderSection}>
                    <Text>Orders</Text>
                    <View style={styles.row}>
                        <View style={[styles.card, styles.green]}>
                            <Text varient='semiBold' style={styles.cardTitle} >0</Text>
                            <Text varient='semiBold' style={styles.cardTitle}>Today's Orders</Text>
                        </View>
                        <View style={[styles.card, styles.pink]}>
                            <Text varient='semiBold' style={styles.cardTitle}>0</Text>
                            <Text varient='semiBold' style={styles.cardTitle}>This Week Orders</Text>
                        </View>
                    </View>
                    <View style={styles.fullCard}>
                        <Text varient='semiBold' style={styles.cardTitle} >20</Text>
                        <Text varient='semiBold' style={styles.cardTitle}>Total Orders</Text>
                    </View>
                    <View style={styles.fullCard}>
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