import { StyleSheet } from 'react-native';
import commonColors from '../../../theme/colors/commonColors';

export default StyleSheet.create({
    content: {
        flex: 1
    },
    moneyText: {
        fontWeight: "bold"
    },
    stockList: {
        borderRadius: 10,
        margin: 10,
        padding: 5,
        backgroundColor: commonColors.lightgray
    },
    textList: {
        flex: 0.5,
        fontWeight: "bold",
        textAlign: "left",
        color: commonColors.black
    },
    valueList: {
        flex: 0.5,
        textAlign: "right",
        color: commonColors.darkgray
    },
    listItemInput: {
        flexDirection: "column"
    },
    input: {
        width: "100%",
        height: 40,
        justifyContent: "flex-end",
        alignItems: "center",
        flexDirection: "row",
        borderWidth: 1,
        borderColor: commonColors.gray,
        borderRadius: 10,
        padding: 5,
        backgroundColor: commonColors.white,
    },
    inputError: {
        marginTop: 5,
        width: "100%",
        color: commonColors.red,
        textAlign: "left",
    },
    boxValue: {
        margin: 15,
        shadowOffset: {
            width: 0,
            height: 0
        },
        shadowOpacity: 0.20,
        shadowRadius: 8,
        alignSelf: "center",
        textAlignVertical: "center",
        backgroundColor: "white",
        borderRadius: 4,
        height: 55,
        shadowColor: "black",
        width: "95%"
    },
    boxText: {
        flex: 1,
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
    },
    footer: {
        backgroundColor: commonColors.yellow
    },
    footerText: {
        color: commonColors.blue,
        fontWeight: "bold"
    }
});
