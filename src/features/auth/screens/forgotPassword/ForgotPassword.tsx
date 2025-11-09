import { Image, ScrollView, StyleSheet, TextInput, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useTheme } from '../../../../theme/ThemeProvider'
import { useStyles } from './ForgotPassword.styles'
import { ImageSource } from '../../../../constants/assets/images'
import {default as Text} from '../../../../components/Text/MSText'
import PrimaryButton from '../../../../components/Button/PrimaryButton/PrimaryButton'

const ForgotPassword = () => {
    const {colors} = useTheme();
    const styles = useStyles(colors);
    const handlePressCta = ()=>{
        console.log("Button pressed ===>")
    }
  return (
   <SafeAreaView edges={["bottom"]} style={styles.container}>
    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.contentContainerStyle}>
        <View style={styles.imageContainer}>
            <Image source={ImageSource.forgotpassword} style={styles.image}/>
        </View>
        <View style={styles.descContainer}>
            <Text style={styles.desc}>Please enter your registered Mobile Number so that we can help you to recover your passowrd.</Text>
        </View>
        <View style={styles.inputAndBtnContainer}>
            <TextInput placeholder='Phone' style={styles.input} />
            <PrimaryButton title='Next' onPress={handlePressCta} />
        </View>
    </ScrollView>
   </SafeAreaView>
  )
}

export default ForgotPassword

const styles = StyleSheet.create({})