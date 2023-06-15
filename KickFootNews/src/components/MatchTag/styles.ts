import { StyleSheet } from "react-native";

export default StyleSheet.create({
    line: {
        borderColor: '#ddd',
        borderWidth: 0.5
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
        
    },

    matchGoalsAndStatus: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingRight: 15
    },

    matchGoals: {
        gap: 25,
        marginRight: 15
    },

    goal: {
        fontSize: 16,
        fontWeight: '600',
        color: '#000'
    },

    matchStatus: {
        paddingLeft: 30,
    },

    status: {
        fontWeight: '600'
    }
})