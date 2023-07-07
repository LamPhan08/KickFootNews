import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        flexGrow: 1,
        paddingTop: 10,
        backgroundColor: '#fff'
    },

    list: {
        flex: 1,
        flexGrow: 1,
        paddingVertical: 8,
    },

    noSearchResults: {
        alignItems: 'center',
        marginTop: 50
    }
});