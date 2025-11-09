import { StyleSheet } from 'react-native';
import { ColorsType } from '../../../../../constants/Ui/colors/colors.types';

export const useStyles = (colors: ColorsType) =>
  StyleSheet.create({
    container: {
      padding: 10,
      borderRadius: 10,
      gap: 10,
      backgroundColor: colors.background_primary,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,

      elevation: 5,
      marginHorizontal: 1,
      marginVertical: 10
    },
    orderIdAndPayOptionContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    row: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 10,
    },
  });
