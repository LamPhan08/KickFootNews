import {StyleSheet, Dimensions} from 'react-native'

export default StyleSheet.create({
    scoreContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        elevation: 4,
        paddingVertical: 50,
        paddingHorizontal: 3,
        marginTop: 5,
        borderRadius: 5,
        // marginHorizontal: 5
    },

    team: {
        alignItems: 'center',
        width: Dimensions.get('window').width/3.1
    },

    teamLogo: {
        width: 50,
        height: 50
    },

    teamName: {
        color: '#000',
        fontWeight: '600',
        textAlign: 'center',
        fontSize: 12,
        marginTop: 5
    },

    scoreAndStatusZone: {
        alignItems: 'center'
    },

    score: {
        color: '#000',
        fontSize: 30,
        fontWeight: 'bold'
    },

    status: {
        fontSize: 13,
        fontWeight: '600',
        color: 'grey'
    },

    eventContainer: {
        marginTop: 30,
        backgroundColor: '#fff',
        paddingHorizontal: 15
    },

    labelContainer: {
        paddingVertical: 15
    },

    label: {
        color: '#000',
        fontWeight: 'bold',
    },

    homeEventItemContainer: {
        paddingVertical: 20,
        borderTopColor: '#ddd',
        borderTopWidth: 0.5,
        flexDirection: 'row',
        alignItems: 'center'
    },

    awayEventItemContainer: {
        paddingVertical: 20,
        borderTopColor: '#ddd',
        borderTopWidth: 0.5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },

    elapsedTime: {
        color: '#000',
        fontWeight: '600',
    },

    eventIcon: {
        width: 35,
        height: 35,
        marginHorizontal: 20,
        resizeMode: 'contain'
    },

    playerName: {
        color: '#000',
        fontWeight: '600',
        fontSize: 15
    },

    leftMoreIn4Zone: {
        alignItems: 'flex-start'
    },

    rightMoreIn4Zone: {
        alignItems: 'flex-end'
    },

    moreIn4: {
        fontSize: 14
    },

    matchIn4: {
        marginTop: 30,
        marginBottom: 30,
        backgroundColor: '#fff',
        paddingHorizontal: 15
    },

    detailsIn4Container: {
        borderTopColor: '#ddd',
        borderTopWidth: 0.5,
        paddingVertical: 20,
        gap: 20
    },

    detailsItem: {
        flexDirection: 'row',
        alignItems: 'center',
        
    },

    leagueLogo: {
        width: 30,
        height: 30,
        resizeMode: 'contain'
    },

    in4LabelContainer: {
        marginLeft: 20
    },

    in4Label: {
        color: '#000',
        fontWeight: '600',
        fontSize: 15
    },

    displayedIn4: {
        fontSize: 14,
        color: 'grey'
    }
})