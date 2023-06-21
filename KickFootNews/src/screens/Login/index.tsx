import React, { useState, useEffect } from 'react'
import { View, Text, ScrollView, TextInput, TouchableOpacity, ToastAndroid, ActivityIndicator } from 'react-native'
import styles from './styles'
import { Formik } from 'formik'
import * as yup from 'yup'
import { useNavigation } from '@react-navigation/native';
import { scale } from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/Ionicons'
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import firestore, { FirebaseFirestoreTypes } from '@react-native-firebase/firestore';

const signInValidationSchema = yup.object().shape({
  email: yup.string()
    .email('Please enter a valid email!')
    .required('Email is requred!'),
  password: yup.string().required('Password is required!')
});

const Login = () => {
  const navigation: any = useNavigation();
  const [showPassword, setShowPassword] = useState(true);
  const [showSpinner, setShowSpinner] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onLogin = () => {
    if (email === '' || password === '') {
      ToastAndroid.show("Please input full information!", ToastAndroid.SHORT)
    }
    else {
      setShowSpinner(true)
      
      auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => {
          console.log('User logged in! (Email & Password)');
          navigation.replace('Home')
          setShowSpinner(false)
        })
        .catch(error => {
          if (error.code === 'auth/email-already-in-use') {
            ToastAndroid.show("The email address is already in use!", ToastAndroid.SHORT)
          }

          if (error.code === 'auth/invalid-email') {
            ToastAndroid.show("The email address is badly formatted!", ToastAndroid.SHORT)
          }
          else {
            ToastAndroid.show("Invalid email or password!", ToastAndroid.SHORT)
          }
          setShowSpinner(false)

        });
    }
  };

  GoogleSignin.configure({
    webClientId: '269627309539-55jdltj2n4tt6res0826ce8vrjpckmss.apps.googleusercontent.com',
  });

  // // const onGoogleButtonPress = async () => {
  // const onGoogleButtonPress = () => {
  //   // // (this function isn't finished yet)
  //   // Check if your device supports Google Play
  //   // await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
  //   // // Get the users ID token
  //   // const { idToken } = GoogleSignin.signIn();

  //   // // Create a Google credential with the token
  //   // const googleCredential = await auth.GoogleAuthProvider.credential(idToken);

  //   // // Sign-in the user with the credential
  //   // auth().signInWithCredential(googleCredential)
  //   // .then(() => {
  //   //     console.log('User logged in!');
  //   //     navigation.navigate('Home')
  //   //   })
  //   //   .catch(error => {
  //   //     if (error.code === 'auth/email-already-in-use') {
  //   //       console.log('That email address is already in use!');
  //   //     }

  //   //     if (error.code === 'auth/invalid-email') {
  //   //       console.log('That email address is invalid!');
  //   //     }

  //   //     console.error(error);
  //   //   });
  // }

  async function onGoogleButtonPress() {
    // Check if your device supports Google Play
    await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
    // Get the users ID token
    const { idToken } = await GoogleSignin.signIn();

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);
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
                    style={{ backgroundColor: "#08812f", height: scale(50), borderRadius: scale(10), flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }} onPress={onLogin}>
                    <Text style={{ color: '#fff', marginLeft: scale(5), fontWeight: 'bold', fontSize: 16 }} >
                      Login
                    </Text>
                    {showSpinner && (<ActivityIndicator color={'#fff'} style={{marginLeft: 3}}/>)}
                  </TouchableOpacity>

                </View>
              </View>
            )}
          </Formik>



        </View>

        <View style={styles.footerContainer}>

          <View style={styles.footerContainerInner}>
            <Text style={{ fontWeight: 'bold' }}>
              Don't have an account?
            </Text>

            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
              <Text style={styles.signText}> Sign Up</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.otherLogin}>
            <Text style={{ color: "#08812f", fontWeight: "bold", fontSize: 15 }}>
              Or continue with
            </Text>

            <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: '5%', gap: 30 }}>
              <TouchableOpacity style={{ padding: 10, backgroundColor: '#d8d8d8', borderRadius: 50 }}
                onPress={() => onGoogleButtonPress()
                  .then(() => {
                    console.log('Signed in with Google!');
                    firestore()
                    .collection('users')
                    .doc(auth().currentUser?.uid)
                    .set({
                      name: auth().currentUser?.displayName,
                      email: auth().currentUser?.email
                    })
                    .then(() => {
                      console.log('User Signed up!');
                    })
                    navigation.navigate('Home');
                  }
                  )
                }>
                <Icon name='logo-google' size={30} color='black' />
              </TouchableOpacity>
              <TouchableOpacity style={{ padding: 10, backgroundColor: '#d8d8d8', borderRadius: 50 }}>
                <Icon name='logo-facebook' size={30} color='black' />
              </TouchableOpacity>
            </View>
          </View>


        </View>
      </ScrollView>
    </View>
  )
}

export default Login
