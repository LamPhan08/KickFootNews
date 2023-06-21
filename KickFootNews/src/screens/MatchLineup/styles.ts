import {StyleSheet ,Dimensions} from 'react-native'

export default StyleSheet.create({
    teamTab: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 10
    },

    btnTab: {
        width: Dimensions.get('window').width/2.3,
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingVertical: 9,
        paddingHorizontal: 10,
        borderRadius: 5,
        elevation: 3,
        
    },

    btnTabActive: {
        backgroundColor: 'green'
    },

    labelTab: {
        fontWeight: '600',
        textTransform: 'uppercase'
    },

    labelTabActive: {
        color: '#fff'
    },

    formationContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        marginTop: 10,
        backgroundColor: '#fff',
        padding: 10,
        alignItems: 'center',
        borderRadius: 10,
        elevation: 3
    },

    lineupLabelContainer: {
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center'
    },

    lineupIn4: {
        color: '#000',
        fontWeight: '600'
    },

    startingXIAndBenchContainer: {
        backgroundColor: '#fff',
        marginTop: 20,
        paddingHorizontal: 15
    },

    labelContainer: {
        paddingVertical: 15
    },

    label: {
        color: '#000',
        fontWeight: 'bold'
    },

    playerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 15,
        borderTopColor: '#ddd',
        borderTopWidth: 0.5
    },

    playerNameContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 15
    },

    playerName: {
        color: '#000',
        fontWeight: '600',
        fontSize: 15
    },

    playerNumber: {
        color: '#000',
        fontWeight: 'bold',
        fontSize: 18
    },

    notAvailableContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: Dimensions.get('window').height/5,
    },

    notAvailable: {
        // fontWeight: '600',
        color: '#000',
        fontSize: 16,
        
    },

    uniformImage: {
        width: 200,
        height: 200,
        marginBottom: 30
    }
})