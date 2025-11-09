import { Image, StyleSheet } from 'react-native';
import { ColorsType } from '../../../../constants/Ui/colors/colors.types';
import { deviceHeight } from '../../../../utils/getDeviceHeightAndWidth';

export const useStyles = (colors: ColorsType) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background_primary,
      padding: 16,
    },
    contentContainerStyle:{
        flexGrow:1,
    },
    image:{
        width: "100%",
        resizeMode: "contain"
    },
    imageContainer:{
        width: "100%",
        height: deviceHeight*0.7,
        justifyContent: "center",
        alignItems: "center",
    },
    descContainer:{
        // paddingHorizontal: 20
    },
    desc:{
        textAlign: "center"
    },
    input:{
        height: 50,
        borderWidth:1,
        borderRadius: 10,
        borderColor: colors.border_1,
        paddingHorizontal: 15
    },
    inputAndBtnContainer:{
        marginTop: 20,
        gap: 20
    }
  });
