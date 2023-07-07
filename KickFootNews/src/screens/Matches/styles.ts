import {Dimensions, StyleSheet} from 'react-native'

export default StyleSheet.create({
    matchesContainer: {
        flex: 1,
        marginBottom: 60
    },
    calendarStrip: {
        paddingTop: 5, 
        paddingBottom: 15, 
        height: 85, 
        borderBottomLeftRadius: 20, 
        borderBottomRightRadius: 20
    },

    matchContainer: {
        backgroundColor: '#fff',
        elevation: 3,
        paddingLeft: 15,
        marginBottom: 15,
    },

    leagueIn4: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10
    },

    logo: {
        width: 30,
        height: 30
    },

    leagueNameAndRound: {
        marginLeft: 15,
        justifyContent: 'space-between'
    },

    leagueName: {
        color: '#000',
        fontWeight: 'bold',
        fontSize: 16
    },
    

    leagueRound: {
        fontWeight: '400',
        fontSize: 15,
        color: 'grey'
    },

    noMatches: {
        marginTop: Dimensions.get('window').height/3,
        justifyContent: 'center',
        alignItems: 'center',
    },

    noMatchesNotification: {
        color: '#000',
        fontSize: 16,
        // fontWeight: '600',
        marginTop: 30
    },

    footballPlayer: {
        width: 200,
        height: 200
    }

})