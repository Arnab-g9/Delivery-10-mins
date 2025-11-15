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
    black: {
        backgroundColor: colors.card_bg_secondary
    },
    red: {
        backgroundColor: colors.primary
    },
    cardTitle: {
        fontSize: 20,
        color: colors.primaryCtaText
    },
    cardTitleSecondary: {
        fontSize: 20,
        color: colors.contentPrimary
    },
    orderSection: {
        marginTop: 16,
        gap: 5
    },
    fullCard: {
        height: 150,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.primaryCtaText,
        marginTop: 10,
        borderRadius: 5,
        gap: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        margin: 2
    },
    blackFullcard: {
        backgroundColor: colors.card_bg_secondary
    },
    earningsSection: {
        marginTop: 16,
        gap: 5
    },
    earningCard: {
        padding: 20,
        backgroundColor: colors.primary,
        borderRadius: 5,
    },
    earningCardHeader: {
        flexDirection: "row", gap: 20, alignContent: "center",
    },
    balanceContainer: {
        gap: 5
    },
    earningCardCommonText: {
        fontSize: 16, color: colors.primaryCtaText,
        fontWeight: '700',
    },
    balanceText: {
        fontSize: 24
    },
    earningContainerSection: {
        flexDirection: "row", alignItems: "center", marginTop: 40
    },
    box: {
        gap: 10, flex: 1, justifyContent: "center", alignItems: "center", borderRightWidth: 1, borderColor: colors.primaryCtaText
    },
    boxWithoutBorder: {
        gap: 10, flex: 1, justifyContent: "center", alignItems: "center"
    }
});