import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useTheme } from '../../../theme/ThemeProvider'
import { useStyles } from './RunningOrderScreen.styles'
import CenteredTitleHeader from '../../../components/Header/CenteredTitleHeader/CenteredTitleHeader'
import { useNavigation } from '@react-navigation/native'
import { runningOrderMockData } from '../mock/RunningOrderMockData'
import RunningOrderCard from '../components/card/RunningOrderCard/RunningOrderCard'

const RunningOrderScreen = () => {
  const {colors} = useTheme();
  const styles = useStyles(colors);
  const navigation = useNavigation();

      useEffect(() => {
        const renderAppHeader = () => (
            <CenteredTitleHeader title={'Running Orders'}  />
        );
        navigation.setOptions({
            headerShown: true,
            header: renderAppHeader,
        });
    }, []);

  return (
   <SafeAreaView edges={["bottom"]} style={styles.container}>
    <FlatList data={runningOrderMockData} showsVerticalScrollIndicator={false} contentContainerStyle={{gap: 20, paddingHorizontal: 4, paddingVertical: 20}} renderItem={({item, index})=><RunningOrderCard data={item}  />} keyExtractor={(item)=>item.deliveryId} />
   </SafeAreaView>
  )
}

export default RunningOrderScreen
