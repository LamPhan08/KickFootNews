import React, { useState, useEffect } from 'react'
import { View, Text, ScrollView, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native'
import styles from './styles'
import { Formik } from 'formik'
import * as yup from 'yup'
import { useNavigation } from '@react-navigation/native';
import { scale } from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/Ionicons'



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

              navigation.navigate('Home')

            }}>

            {({ handleChange, handleBlur, handleSubmit, isValid, values, errors, touched }) => (
              <View>
                <View style={styles.inputContainer}>
                  <View style={styles.wrapper}>
                    <TextInput
                      style={styles.inputEmail}
                      placeholder="Enter Email"
                      keyboardType="email-address"
                      onChangeText={handleChange('email')}
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
                          onChangeText={handleChange('password')}
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
                    style={{ backgroundColor: "#65A844", height: scale(50), borderRadius: scale(10), flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ color: '#fff', marginLeft: scale(5), fontWeight: 'bold', fontSize: 16 }}>
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
            <Text style={{color: "#65A844", fontWeight:"bold", fontSize: 15}}>
              Or continue with
            </Text>

            <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: '5%', gap: 30}}>
              <TouchableOpacity style={{padding: 10, backgroundColor: '#d8d8d8', borderRadius: 50}}>
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
