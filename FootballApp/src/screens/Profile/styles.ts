import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
    },

    background: {
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
    },

    userInfoSection: {
        paddingHorizontal: 15,
        marginBottom: 25,
    },

    title: {
        fontSize: 24,
        fontWeight: '500',
        marginLeft: 10,
        color: '#fff'
    },

    row: {
        flexDirection: 'row',
        marginBottom: 10
    },

    quizBoxWrapper: {
        flexDirection: 'column',
        backgroundColor: '#fff',
        marginTop: 20
    },

    infoBox: {
        width: '50%',
        justifyContent: 'center',
        alignItems: 'center'
    },

    menuWrapper: {
        marginTop: 20,
        backgroundColor: '#fff'
    },
    label: {
        marginLeft: 15,
        fontSize: 16,
        fontWeight: 'bold',
        paddingVertical: 7
    },

    menuItem: {
        flexDirection: 'row',
        paddingVertical: 15,
        paddingHorizontal: 15,
    },

    menuItemText: {
        color: '#000',
        marginLeft: 20,
        fontWeight: 'bold',
        fontSize: 16,
        lineHeight: 25
    },

    menuInsideWrap: {
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'space-between', 
        paddingRight: 10,
    }
})