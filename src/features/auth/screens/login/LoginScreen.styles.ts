import { Platform, StatusBar, StyleSheet } from 'react-native';
import { ColorsType } from '../../../../constants/Ui/colors/colors.types';
import { EdgeInsets } from 'react-native-safe-area-context';
import { deviceHeight } from '../../../../utils/getDeviceHeightAndWidth';

export const useStyles = (colors: ColorsType) => StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: colors.background_primary,
        padding: 16,
    },
    contentContainer:{
        flexGrow: 1,
    },
    upperSection:{
        height: deviceHeight*0.4,
        // backgroundColor: "red"
        justifyContent: "flex-end",
        gap: 30,
        alignItems: "center",
        paddingBottom: 50
    },
    logoName:{
        fontSize: 40
    },
    signIn:{
        fontSize: 30
    },
    middleSection:{
        height: deviceHeight*0.4,
        // backgroundColor: "green"
    },
    inputContainerSection:{
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderWidth:1,
        borderRadius: 5,
        borderColor: colors.border_1,
        gap: 10
    },
    lowerSection:{
        flex:1,
        // height: deviceHeight*0.1,
        // backgroundColor: "yellow"
        gap: 20
    },
    separator:{
        borderBottomWidth: 1,
        borderColor: colors.border_1
    },
    checkboxAndforgotPasswordContainer:{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 15,
        paddingHorizontal: 10
    },
    forgotPassword:{
        color: colors.primary,
    }
})