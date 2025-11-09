import { StyleSheet } from 'react-native';
import { ColorsType } from '../../../../constants/Ui/colors/colors.types';

export const useStyles = (colors: ColorsType) => StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background_primary,
        padding: 16,
    },
    contentContainerStyle: {
        flexGrow: 1,
        // backgroundColor: "red"
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderColor: colors.border_1,
    },
    viewAll: {
        color: colors.primary
    },
    row: {
        flexDirection: "row",
        gap: 16,
    },
    card: {
        flex: 1,
        height: 200,
        borderRadius: 5,
        justifyContent: "center",
        alignItems: "center",
        gap: 10
    },
    green: {
        backgroundColor: "green"
    },
    pink: {
        backgroundColor: colors.primary
    },
    cardTitle: {
        fontSize: 20,
        color: colors.primaryCtaText
    },
    orderSection: {
        marginTop: 16,
        gap: 5
    },
    fullCard: {
        height: 150,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "green",
        marginTop: 10,
        borderRadius: 5,
        gap: 10
    },
    earningsSection: {
        marginTop: 16,
        gap: 5
    },
    earningCard: {
        padding: 20,
        backgroundColor: "green",
        borderRadius: 5,
    }
});