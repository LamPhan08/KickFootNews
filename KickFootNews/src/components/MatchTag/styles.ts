import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
    line: {
        borderColor: '#ddd',
        borderWidth: 0.5,
    },

    logo: {
        width: 30,
        height: 30
    },

    matchIn4: {
        flexDirection: 'row',
        paddingVertical: 15,
        justifyContent: 'space-between',
    },

    teamIn4: {
        gap: 15,
    },

    teamLogoAndName: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    teamName: {
        marginLeft: 15,
        color: '#000',
        flexWrap: 'wrap',
        // backgroundColor: 'red',
        width: Dimensions.get('window').width/2.7
    },

    matchGoalsAndStatus: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    matchGoals: {
        gap: 25,
        marginRight: 10
    },

    goal: {
        fontSize: 13,
        fontWeight: '600',
        color: '#000'
    },

    matchStatus: {
        textAlign: 'center',
        // backgroundColor: 'red'
    },

    status: {
        fontWeight: '600',
        fontSize: 12,
        width:100,
        textAlign: 'center',
        marginHorizontal: 5
    }
})