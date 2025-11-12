import { Platform, StatusBar, StyleSheet } from 'react-native';
import { EdgeInsets } from 'react-native-safe-area-context';
import { ColorsType } from '../../../constants/Ui/colors/colors.types';

export const useStyles = (colors: ColorsType) => StyleSheet.create({
  header:{
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.background_primary,
    padding: 20
  },
  titleContainer:{
    flex:1,
    alignItems: "center"
  }
});