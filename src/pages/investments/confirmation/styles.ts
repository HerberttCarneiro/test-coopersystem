import { StyleSheet } from 'react-native';
import commonColors from '../../../theme/colors/commonColors';

export default StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        paddingTop: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },

    buttonView: {
        marginTop: 35,
        backgroundColor: commonColors.yellow,
    },
    buttonText: {
        fontWeight: "bold",
        color: commonColors.blue,
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    informationText: {
        paddingHorizontal: 35,
    },
    modalText: {
        marginBottom: 15,
        color: commonColors.blue,
        textTransform: "uppercase",
        fontWeight: "bold",
        textAlign: "center"
    }
});
