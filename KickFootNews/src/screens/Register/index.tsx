import React, { useState, useEffect } from 'react'
import { View, Text, ScrollView, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native'
import { Formik } from 'formik'
import * as yup from 'yup'
import { useNavigation } from '@react-navigation/native';
import { scale } from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/Ionicons'
import styles from '../Login/styles'
import auth from '@react-native-firebase/auth';

const signInValidationSchema = yup.object().shape({
  email: yup.string()
    .email('Please enter a valid email!')
    .required('Email is requred!'),
  password: yup.string().required('Password is required!')
});

const Register = () => {
  const navigation: any = useNavigation();
  const [showPassword, setShowPassword] = useState(true);
  // const [showSpinner, setShowSpinner] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rePass, setRePass] = useState('');

  const onRegister = () => {
    console.log('Register');
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        console.log('User account created & signed in!');
        navigation.navigate('Login')
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
  }

  useEffect(() => {
  }, []);

  return (
    <View style={styles.loginMain}>
      <View>
        <View style={styles.headerContainer}>
          <Text style={styles.welcomeText}>
            Welcome
          </Text>
          <Text style={styles.signInText}>
            Sign up to access more features.
          </Text>
        </View>

        <View style={styles.formContainer}>
          <Formik
            // validationSchema={signInValidationSchema}
            initialValues={{
              name: '',
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
                      placeholder="Enter Name"
                      onChangeText={username => setUsername(username)}
                    />

                    {(errors.name && touched.name) &&
                      <Text style={{ fontSize: scale(10), color: 'red', marginTop: scale(5) }}>{errors.name}</Text>
                    }
                  </View>

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
                  <View style={styles.wrapper}>
                    <View style={styles.inputPassword}>
                      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        {/* <View> */}
                        <TextInput
                          placeholder="Re-enter Password"
                          secureTextEntry={showPassword}
                          style={{ height: scale(50), color: 'black', width: '93%', fontWeight: 'bold' }}
                          onChangeText={rePass => setRePass(rePass)}
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

                </View>


                <View style={styles.btnContainer}>
                  <TouchableOpacity
                    onPress={handleSubmit}
                    style={{ backgroundColor: "#08812f", height: scale(50), borderRadius: scale(10), flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }} onPress={onRegister}>
                    <Text style={{ color: '#fff', marginLeft: scale(5), fontWeight: 'bold', fontSize: 16 }} >
                      Register
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
              Already have an account?
            </Text>

            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text style={styles.signText}> Sign In</Text>
            </TouchableOpacity>
          </View>


        </View>
      </View>
    </View>
  )
}

export default Register
