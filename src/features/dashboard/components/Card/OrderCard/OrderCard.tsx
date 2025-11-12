import { Image, StyleSheet, View } from 'react-native'
import React from 'react'
import { useTheme } from '../../../../../theme/ThemeProvider'
import { useStyles } from './Ordercard.styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import {default as Text} from "../../../../../components/Text/MSText"
import UserIcon from "react-native-vector-icons/FontAwesome"
import LocationIcon from "react-native-vector-icons/Entypo"
import PrimaryButton from '../../../../../components/Button/PrimaryButton/PrimaryButton';
import OutlineButton from '../../../../../components/Button/OutlineButton/OutlineButton';
import { useNavigation } from '@react-navigation/native';
import { ScreenNames } from '../../../../../navigation/constants';
const OrderCard = () => {
    const { colors } = useTheme();
    const styles = useStyles(colors);
    const navigation = useNavigation();

    const handlePressDetails = ()=>{

    }
    const handlePressDirection = ()=>{
        // navigation.navigate(ScreenNames.DASHBOARD_SCREEN as never);
    }
    return (
        <View style={styles.container}>
            <View style={styles.orderIdAndPayOptionContainer}>
                <Text>Order Id: <Text varient='semiBold'>#100065</Text></Text>
            </View>
            <View style={styles.row}>
                <UserIcon name={"user"} size={20}/>
                <Text>Store Location</Text>
            </View>
            <View style={styles.row}>
                <LocationIcon name={"location-pin"} size={20}/>
                <Text>House: 00, Road:00, Test City</Text>
            </View>
            <View style={[styles.row, {marginTop: 20}]}>
             <View style={{flex:1}}>
                <OutlineButton title='Details' onPress={handlePressDetails} />
             </View>
             <View style={{flex:1}}>
                <PrimaryButton title='Direction' onPress={handlePressDirection}/>
             </View>
            </View>
        </View>
    )
}

export default OrderCard

const styles = StyleSheet.create({})