import { StyleSheet } from "react-native";
import { getStatusBarHeight, isIphoneX } from "react-native-iphone-x-helper";

export default StyleSheet.create({
    container: {
        flex: 1,
        flexGrow: 1,
        backgroundColor: '#fff'
    },

    trendingContainer: {
        marginVertical: 20,
        paddingHorizontal: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',   
    },

    trending: {
        color: '#000',
        fontSize: 16,
        fontWeight: '600'
    },

    showAllIcon: {
        backgroundColor: '#fff',
        padding: 3,
        borderRadius: 50,
        elevation: 5
    },

});