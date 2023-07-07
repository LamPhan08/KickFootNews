import { StyleSheet, Dimensions } from "react-native";
import { moderateScale } from "react-native-size-matters";

export default StyleSheet.create({
    loginMain: {
        flex: 1,
        paddingLeft: moderateScale(20),
        paddingRight: moderateScale(20),
        backgroundColor: '#fff'
    },
    headerContainer: {
        height: Dimensions.get('window').height/4, justifyContent: 'center'
    },
    welcomeText: {
        fontSize: moderateScale(30),
        fontWeight: 'bold',
        color: '#08812f'
    },
    signInText: {
        color: 'black',
        fontSize: moderateScale(15),
        letterSpacing: 0.5,
        fontWeight: 'bold'
    },
    formContainer: {
        
    },
    inputContainer: {

    },
    wrapper: {
        marginTop: moderateScale(30)
    },

    inputEmail: {
        height: moderateScale(55),
        color: 'black',
        borderWidth: moderateScale(1),
        borderColor: 'gray',
        borderRadius: moderateScale(8),
        paddingHorizontal: moderateScale(10),
        fontWeight: 'bold',
        paddingLeft: 16
    },

    inputPassword: {
        height: moderateScale(55),
        color: 'black',
        borderWidth: moderateScale(1),
        borderColor: 'gray',
        borderRadius: moderateScale(8),
        paddingHorizontal: moderateScale(10),
        fontWeight: 'bold',
    },
    forgotPasswordContainer: {
        alignItems: 'flex-end'
    },
    forgotPasswordText: {
        fontSize: moderateScale(12),
        fontWeight: 'bold'
    },
    btnContainer: {
        marginTop: '10%'
    },
    footerContainer: {
        marginTop: '5%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    },
    footerContainerInner: {
        flexDirection: 'row'
    },
    signText: {
        marginLeft: moderateScale(5),
        color: 'black',
        fontWeight: 'bold'
    },

    otherLogin: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '10%',
        width: '100%'
    }
})