import React, { useState, useEffect } from 'react'
import { View, Text, ScrollView, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native'
import styles from './styles'
import { Formik } from 'formik'
import * as yup from 'yup'
import { useNavigation } from '@react-navigation/native';
import { scale } from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/Ionicons'
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';


const signInValidationSchema = yup.object().shape({
  email: yup.string()
    .email('Please enter a valid email!')
    .required('Email is requred!'),
  password: yup.string().required('Password is required!')
});

const Login = () => {
  const navigation: any = useNavigation();
  const [showPassword, setShowPassword] = useState(true);
  // const [showSpinner, setShowSpinner] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onLogin = () => {
    console.log('Login');
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log('User logged in!');
        navigation.navigate('Home')
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
      });
  };

  GoogleSignin.configure({
    webClientId: '269627309539-2vpmu1dbes2cno06idlcfkpi8boulbkt.apps.googleusercontent.com',
  });

  const onGoogleButtonPress = () => {
    // (this function isn't finished yet)
    // // Check if your device supports Google Play
    // GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
    // // Get the users ID token
    // const { idToken } = GoogleSignin.signIn();

    // // Create a Google credential with the token
    // const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // // Sign-in the user with the credential
    // auth().signInWithCredential(googleCredential)
    // .then(() => {
    //     console.log('User logged in!');
    //     navigation.navigate('Home')
    //   })
    //   .catch(error => {
    //     if (error.code === 'auth/email-already-in-use') {
    //       console.log('That email address is already in use!');
    //     }

    //     if (error.code === 'auth/invalid-email') {
    //       console.log('That email address is invalid!');
    //     }

    //     console.error(error);
    //   });
  }

  useEffect(() => {
  }, []);

  return (
    <View style={styles.loginMain}>
      <ScrollView showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
        <View style={styles.headerContainer}>
          <Text style={styles.welcomeText}>
            Welcome
          </Text>
          <Text style={styles.signInText}>
            Sign in to access more features.
          </Text>
        </View>

        <View style={styles.formContainer}>
          <Formik
            // validationSchema={signInValidationSchema}
            initialValues={{
              email: '',
              password: ''
            }}
            onSubmit={values => {
              // console.log("values ", values);
              // loginUser(values).then(res => {
              //   console.log("Response ", res);
              //   setShowSpinner(false);
              //   navigation.navigate('Home');
              //   updateUserLogin(res, true);
              //   updateUserAccessToken(res.token);
              //   showSnackBar('Successfully LoggedIn');
              //   setTokenInterceptor(res);

              //   console.log("User coming from state", user);
              //   console.log("iosLoggedIn coming from state", isLoggedIn);


              // }).catch(err => {
              //   console.log("Error ", err.response.data?.msg);
              //   showSnackBar(err.response.data?.msg, 'ERROR');
              // })
              console.log(values)
              // setShowSpinner(false);

              // navigation.navigate('Home')

            }}>

            {({ handleChange, handleBlur, handleSubmit, isValid, values, errors, touched }) => (
              <View>
                <View style={styles.inputContainer}>
                  <View style={styles.wrapper}>
                    <TextInput
                      style={styles.inputEmail}
                      placeholder="Enter Email"
                      keyboardType="email-address"
                      onChangeText={email => setEmail(email)}
                    />
                    {(errors.email && touched.email) &&
                      <Text style={{ fontSize: 10, color: 'red', marginTop: scale(5) }}> {errors.email}</Text>}
                  </View>

                  <View style={styles.wrapper}>
                    <View style={styles.inputPassword}>
                      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        {/* <View> */}
                        <TextInput
                          placeholder="Enter Password"
                          secureTextEntry={showPassword}
                          style={{ height: scale(50), color: 'black', width: '93%', fontWeight: 'bold' }}
                          onChangeText={password => setPassword(password)}
                        />
                        {/* </View> */}


                        <TouchableOpacity
                          onPress={() => setShowPassword(prevState => !prevState)}
                          style={{ alignSelf: 'center' }}>
                          <Icon name={showPassword ? 'key-outline' : 'key'} size={20} color='black' />
                        </TouchableOpacity>
                      </View>
                      


                    </View>
                    {(errors.password && touched.password) &&
                          <Text style={{ fontSize: 10, color: 'red', marginTop: scale(5) }}> {errors.password}</Text>}
                  </View>

                  <View style={styles.forgotPasswordContainer}>
                    <TouchableOpacity>
                      <Text style={styles.forgotPasswordText}>
                        Forgot Password?
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>


                <View style={styles.btnContainer}>
                  <TouchableOpacity
                    onPress={handleSubmit}
                    style={{ backgroundColor: "#08812f", height: scale(50), borderRadius: scale(10), flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }} onPress={onLogin}>
                    <Text style={{ color: '#fff', marginLeft: scale(5), fontWeight: 'bold', fontSize: 16 }} >
                      Login
                    </Text>
                    {/* {showSpinner && (<ActivityIndicator color={'#fff'} />)} */}
                  </TouchableOpacity>

                </View>
              </View>
            )}
          </Formik>



        </View>

        <View style={styles.footerContainer}>

          <View style={styles.footerContainerInner}>
            <Text style={{fontWeight: 'bold'}}>
              Don't have an account?
            </Text>

            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
              <Text style={styles.signText}> Sign Up</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.otherLogin}>
            <Text style={{color: "#08812f", fontWeight:"bold", fontSize: 15}}>
              Or continue with
            </Text>

            <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: '5%', gap: 30}}>
              <TouchableOpacity style={{padding: 10, backgroundColor: '#d8d8d8', borderRadius: 50}} onPress={onGoogleButtonPress}>
                <Icon name='logo-google' size={30} color = 'black'/>
              </TouchableOpacity>
              <TouchableOpacity style={{padding: 10, backgroundColor: '#d8d8d8', borderRadius: 50}}>
                <Icon name='logo-facebook' size={30} color = 'black'/>
              </TouchableOpacity>
            </View>
        </View>
        

        </View>
      </ScrollView>
    </View>
  )
}

export default Login
