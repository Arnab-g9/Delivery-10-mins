import { StyleSheet, View } from 'react-native'
import React from 'react'
import { useTheme } from '../../../../../theme/ThemeProvider'
import { useStyles } from './RunningOrderCard.styles';
import { default as Text } from '../../../../../components/Text/MSText'
import { IrunningOrderMockdataTypes } from '../../../mock/RunningOrderMockData';

interface props {
    data: IrunningOrderMockdataTypes
}

const RunningOrderCard = ({ data }: props) => {
    const { colors } = useTheme();
    const styles = useStyles(colors);
    return (
        <View style={styles.card}>
            <View style={styles.pictureContainer}>

            </View>
            <View style={styles.detailsContainer}>
                <View style={styles.row}>
                    <Text>Order ID: {data.deliveryId}</Text>
                    {
                        data.isPercel && <View style={styles.badge}>
                            <Text>Parcel</Text>
                        </View>
                    }
                </View>
                <Text>{data.type}</Text>
                <Text>{data.date}   <Text>{data.time}</Text></Text>
            </View>
        </View>
    )
}

export default RunningOrderCard
