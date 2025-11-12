import { StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useTheme } from '../../../theme/ThemeProvider'
import { useStyles } from './CenteredTitleHeader.styles'
import LeftIcon from 'react-native-vector-icons/AntDesign'
import { default as Text } from "../../../components/Text/MSText"
import { useNavigation } from '@react-navigation/native'

interface props {
    title: string,
    isBackPress?: boolean,
    onBackBtnPress?: () => void
}

const CenteredTitleHeader = ({ title, isBackPress=true, onBackBtnPress }: props) => {
    const { colors } = useTheme();
    const styles = useStyles(colors);
    const navigation = useNavigation();
    const handleBackPress = () => {
        navigation.goBack();
    }
    return (
        <SafeAreaView edges={["top"]} style={styles.header}>
            {
                isBackPress && <TouchableOpacity onPress={onBackBtnPress ?? handleBackPress}>
                    <LeftIcon name={"left"} size={20} />
                </TouchableOpacity>
            }
            <View style={styles.titleContainer}>
                <Text varient='semiBold'>{title}</Text>
            </View>
        </SafeAreaView>
    )
}

export default CenteredTitleHeader

const styles = StyleSheet.create({})