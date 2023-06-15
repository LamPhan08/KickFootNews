import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        paddingHorizontal: 15,
        paddingTop: 20,
    },

    progress: {
        marginHorizontal: 35,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20
    },

    progressBar: {
        width: '100%',
        backgroundColor: '#00000020',
        height: 15,
        borderRadius: 20,
    },

    progressAnimation: {
        height: 15,
        borderRadius: 20,
        backgroundColor: '#08812f'
    },

    questionCounterContainer: {
        marginLeft: 10,
        marginRight: 10,
    },

    questionCounter: {
        fontSize: 15,
        fontWeight: '600',
        color: '#000'
    },

    questionContainer: {
        marginBottom: 20,
    },

    question: {
        fontSize: 20,
        color: '#000',
        fontWeight: '600',
    },

    image: {
        width: '100%',
        height: 220,
        borderRadius: 10,
        marginBottom: 20,

    },

    option: {
        marginHorizontal: 15,
        marginBottom: 15,
        paddingVertical: 12,
        borderRadius: 5,
        alignItems: 'center',
        elevation: 4,
        backgroundColor: '#fff',
    },

    optionContent: {
        color: '#000',
        fontWeight: '600'
    },

    nextBtn: {
        backgroundColor: '#08812f',
        paddingVertical: 20,
        alignItems: 'center',
        borderRadius: 12
    },

    btnLabel: {
        color: '#fff',
        fontWeight: '600'
    },

    modalContainer: {
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },

    insideModal: {
        backgroundColor: '#fff',
        width: '90%',
        borderRadius: 20,
        padding: 20,
        alignItems: 'center'
    },

    notice: {
        fontSize: 30, 
        fontWeight: 'bold',
        color: '#000'
    },

    modalImage: {
        marginTop: 30,
        height: 100,
        width: 100
    },

    yourScore: {
        color: '#000',
        marginTop: 40,
        fontWeight: '600',
        fontSize: 18
    },

    score: {
        marginTop: 10,
        color: '#08812f',
        fontWeight: 'bold',
        fontSize: 30
    },

    btnZone: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
        gap: 50
    },

    modalBtn: {
        paddingVertical: 15,
        width: 120,
        borderRadius: 10,
        alignItems: 'center'
    },

    modalBtnLabel: {
        fontWeight: '600',
        color: '#fff'
    },

    leaveModal: {
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(52, 52, 52, 0.8)',
        
    },

    confirmQuestion: {
        color: '#000',
        fontWeight: '600',
        fontSize: 20,
        marginTop: 30
    },

    iconClose: {
        textAlign: 'right',
        margin: 10
    },

    insideIntroduction: {
        alignItems: 'center',
        paddingHorizontal: 25
    },

    introductionContainer: {
        marginTop: 40,
        alignItems: 'center'
    },

    introduction: {
        color: '#000',
        fontWeight: 'bold',
        fontSize: 45,
        fontFamily: 'Times New Roman'
    },

    introductionImage: {
        height: 200,
        width: 200,
        marginTop: 50
    }
})