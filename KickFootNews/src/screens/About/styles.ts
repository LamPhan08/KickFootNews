import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        paddingTop: 20,
        height: '100%',
        width: '100%',
    },

    logoAndTitleContainer: {
        alignItems: 'center'
    },

    logo: {
        height: 240,
        width: 240,
        resizeMode: 'contain'
    },

    title: {
        paddingHorizontal: 25,
        textAlign: 'center',
        fontWeight: '600',
        color: '#a9a9a9',
        fontSize: 17,
        fontStyle: 'italic'
    },

    developerIn4: {
        marginHorizontal: 10,
        marginTop: 20,
        marginBottom: 40,
        paddingHorizontal: 20,
        paddingTop: 20,
        paddingBottom: 10,
        backgroundColor: '#fff',
        borderRadius: 10
    },

    name: {
        color: '#000',  
        fontSize: 16,
        fontWeight: 'bold'
    },

    in4Container: {
        marginTop: 10,
    },

    in4Details: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10
    },

    details: {
        marginLeft: 10,
        fontWeight: '600',
        fontSize: 14,
        color: 'grey'
    }
})