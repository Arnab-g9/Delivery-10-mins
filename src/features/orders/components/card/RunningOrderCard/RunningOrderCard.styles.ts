import { Platform, StatusBar, StyleSheet } from 'react-native';
import { EdgeInsets } from 'react-native-safe-area-context';
import { ColorsType } from '../../../../../constants/Ui/colors/colors.types';
export const useStyles = (colors: ColorsType) =>
  StyleSheet.create({
    card: {
      paddingHorizontal: 20,
      paddingVertical: 10,
      borderRadius: 5,
      flexDirection: 'row',
      gap: 20,
      backgroundColor: colors.background_primary,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 2,

      elevation: 3,
    },
    pictureContainer: {
      height: 80,
      width: 80,
      borderRadius: 5,
      backgroundColor: 'pink',
    },
    detailsContainer: {
      gap: 8,
      flex:1
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    badge: {
      paddingHorizontal: 10,
      paddingVertical: 3,
      borderRadius: 5,
      backgroundColor: "green"
    },
  });
