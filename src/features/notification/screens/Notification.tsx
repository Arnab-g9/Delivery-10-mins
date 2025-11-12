import { ScrollView, View } from 'react-native'
import React, { useEffect } from 'react'
import { useTheme } from '../../../theme/ThemeProvider'
import { useStyles } from './Notification.styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { default as Text } from '../../../components/Text/MSText'
import CenteredTitleHeader from '../../../components/Header/CenteredTitleHeader/CenteredTitleHeader';
import { useNavigation } from '@react-navigation/native';

const Notification = () => {
    const { colors } = useTheme();
    const styles = useStyles(colors);
    const navigation = useNavigation();
    useEffect(() => {
        const renderAppHeader = () => (
            <CenteredTitleHeader title='Notification' />
        );
        navigation.setOptions({
            headerShown: true,
            header: renderAppHeader,
        });
    }, []);
    return (
        <SafeAreaView edges={["bottom"]} style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.contentContainer}>
                <Text>No notification found</Text>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Notification
