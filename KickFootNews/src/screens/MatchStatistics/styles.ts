import {StyleSheet, Dimensions} from 'react-native'

export default StyleSheet.create({
    overallContainer: {
        marginHorizontal: 10,
        backgroundColor: '#fff',
        marginVertical: 10,
        borderRadius: 10,
        paddingHorizontal: 15,
        paddingVertical: 15,
        elevation: 3,
    },

    logoAndTeamStat: {
        flexDirection: 'row', 
        justifyContent: 'space-between',
        width: '100%',
        alignItems: 'center'
    },

    logo: {
        width: '20%',
        height: 40,
        resizeMode: 'contain',
    },

    statValue: {
        fontSize: 14,
        color: '#000'
    },

    valueAndTypeContainer: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    statValueContainer: {
        width: '20%',
        alignItems: 'center',
        gap: 20
    },

    typeContainer: {
        alignItems: 'center',
        gap: 20
    },

    notAvailableContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: Dimensions.get('window').height/5,
    },

    footballPassImage: {
        width: 200,
        height: 200,
        marginBottom: 30,
        resizeMode: 'contain'
    },

    notAvailable: {
        color: '#000',
        fontSize: 16,
    }
})