import {StyleSheet} from 'react-native'

export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 5,
        paddingHorizontal: 15,
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        marginBottom: 10,
        borderRadius: 20
    },

    iconContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    quizIcon: {
        width: 100,
        height: 100
    },

    quizNameContainer: {
        marginLeft: 7,
    },

    quizName: {
        fontWeight: 'bold',
        fontSize: 16,
        color: '#000',
        marginBottom: 7
    },

    available: {
        fontWeight: '600'
    },

    playButton: {
        backgroundColor: '#08812f',
        paddingVertical: 5,
        paddingHorizontal: 12,
        borderRadius: 5
    },

    buttonLabel: {
        fontWeight: '600',
        color: '#fff'
    }
})