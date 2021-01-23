import { StyleSheet } from 'react-native';
import commonColors from '../../../theme/colors/commonColors';

export default StyleSheet.create({
    safeAreaViewTop: {
        flex: 1, backgroundColor: commonColors.blue
    },
    safeAreaViewBottom: {
        flex: 0, backgroundColor: commonColors.white
    },
    disableItem: {
        marginLeft: 0,
        backgroundColor: commonColors.lightgray
    },
    enableItem: {
        marginLeft: 0,
        backgroundColor: commonColors.white
    },
    moneyText: {
        fontWeight: "bold"
    }
});
