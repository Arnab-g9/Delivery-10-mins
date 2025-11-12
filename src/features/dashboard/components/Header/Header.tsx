import { StyleSheet, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useTheme } from '../../../../theme/ThemeProvider'
import { useStyles } from './Header.styles'
import { default as Text } from "../../../../components/Text/MSText"
import BellIcon from 'react-native-vector-icons/Feather';
import { Switch } from 'react-native-switch';
import { useNavigation } from '@react-navigation/native'
import { ScreenNames } from '../../../../navigation/constants'

const Header = ({ onPressNotification }: any) => {
    const [isEnabled, setIsEnabled] = useState<boolean>(false);
    const { colors } = useTheme();
    const styles = useStyles(colors);
    const handleToggleSwitch = () => {
        setIsEnabled(prev => !prev);
    }

    return (
        <SafeAreaView edges={["top"]} style={styles.container}>
            <View style={styles.innerContainer}>
                <Text varient='semiBold' style={styles.title}>6amMart Delivery</Text>
                <View style={styles.iconsContainer}>
                    <TouchableOpacity onPress={onPressNotification}>
                        <BellIcon name="bell" size={20} />
                    </TouchableOpacity>
                    <Switch
                        value={isEnabled}
                        onValueChange={handleToggleSwitch}
                        circleSize={26}
                        barHeight={28}
                        switchWidthMultiplier={2.8}
                        activeText={'Online'}
                        inActiveText={'Offline'}
                        backgroundInactive={colors.contentDisabled}
                        backgroundActive={colors.primary}
                        renderActiveText={true}
                        renderInActiveText={true}
                        changeValueImmediately
                        activeTextStyle={styles.switchText}
                        inactiveTextStyle={styles.switchText}
                        switchBorderRadius={30}
                        circleBorderWidth={1}
                        innerCircleStyle={styles.circleStyle}
                        outerCircleStyle={styles.circleStyle}
                        circleBorderActiveColor={colors.primary}
                        circleBorderInactiveColor={colors.contentDisabled}
                    />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Header

const styles = StyleSheet.create({})