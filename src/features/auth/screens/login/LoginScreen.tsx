import { ScrollView, StyleSheet, TextInput, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useTheme } from '../../../../theme/ThemeProvider'
import { useStyles } from './LoginScreen.styles'
import PrimaryButton from '../../../../components/Button/PrimaryButton/PrimaryButton'
import { default as Text } from '../../../../components/Text/MSText';
import TextWithLinkButton from '../../../../components/Button/TextWithLinkButton/TextWithLinkButton'
import { useNavigation } from '@react-navigation/native'
import { ScreenNames } from '../../../../navigation/stack/constants'


const LoginScreen = () => {
    const { colors } = useTheme();
    const styles = useStyles(colors);
    const navigation = useNavigation();
    const handlePrimaryCtaPress = () => {
        navigation.navigate(ScreenNames.DASHBOARD_SCREEN as never);
    }
    const handleLinkBtnPress = () => {
        console.log("link button pressed ===>");
    }
    return (
        <SafeAreaView edges={["bottom"]} style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.contentContainer}>
                {/* for logo and Text */}
                <View style={styles.upperSection}>
                    <Text style={styles.logoName} varient='bold'>6amMart</Text>
                    <Text style={styles.signIn} varient='bold'>SIGN IN</Text>
                </View>
                <View style={styles.middleSection}>
                    <View style={styles.inputContainerSection}>
                        <TextInput placeholder='Phone' />
                        <View style={styles.separator} />
                        <TextInput placeholder='Password' />
                    </View>
                    <View style={styles.checkboxAndforgotPasswordContainer}>
                        <Text varient='medium'>Remember me</Text>
                        <Text varient='medium' style={styles.forgotPassword}>Forgot Password?</Text>
                    </View>
                </View>
                <View style={styles.lowerSection}>
                    <PrimaryButton title='Sign In' onPress={handlePrimaryCtaPress} />
                    <TextWithLinkButton text='Join as a' link='Delivery man' onPress={handleLinkBtnPress} />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default LoginScreen

const styles = StyleSheet.create({})