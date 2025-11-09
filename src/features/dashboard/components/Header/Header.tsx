import { StyleSheet, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useTheme } from '../../../../theme/ThemeProvider'
import { useStyles } from './Header.styles'
import { default as Text } from "../../../../components/Text/MSText"
import BellIcon from 'react-native-vector-icons/Feather';
const Header = () => {
    const { colors } = useTheme();
    const styles = useStyles(colors);
    return (
        <SafeAreaView edges={["top"]} style={styles.container}>
            <View style={styles.innerContainer}>
                <Text varient='semiBold' style={styles.title}>6amMart Delivery</Text>
                <BellIcon name="bell" size={20} />
            </View>
        </SafeAreaView>
    )
}

export default Header

const styles = StyleSheet.create({})