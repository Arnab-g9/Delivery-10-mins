import { StyleSheet } from 'react-native';
import { ColorsType } from '../../../../constants/Ui/colors/colors.types';

export const useStyles = (colors: ColorsType) => StyleSheet.create({
    container: {
        padding: 16,
        backgroundColor: colors.background_primary
    },
    innerContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    title: {
        fontSize: 16
    },
    circleStyle: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    iconsContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 20,
    },
    // switchWrapper: {},
    switchText: {
        fontSize: 11,
        fontWeight: '600',
    },
})