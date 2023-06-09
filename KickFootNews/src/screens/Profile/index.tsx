import React, { useState, useEffect } from 'react'
import { ImageBackground, SafeAreaView, View, ScrollView } from 'react-native'
import styles from './styles'
import { Avatar, Title, Caption, Text, TouchableRipple } from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import user from '../../assets/user.png'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import LinearGradient from 'react-native-linear-gradient'
import { useNavigation } from '@react-navigation/native'
import auth from '@react-native-firebase/auth';
import firestore, { FirebaseFirestoreTypes, } from '@react-native-firebase/firestore';
import { GoogleSignin } from '@react-native-google-signin/google-signin'
const Profile = () => {
  const navigation: any = useNavigation();
  const onLogout = () => {
    auth()
      .signOut()
      .then(() => {
        // console.log('User signed out!');
        GoogleSignin.revokeAccess();
        // navigation.replace('Login');
      });
  }
  const [userData, setUserData] = useState({ phone: '', name: '', avatar: '', email: '' });
  const [image, setImage] = useState('');
  const getUser = async () => {
    await firestore()
      .collection('users')
      .doc(auth().currentUser?.uid)
      .onSnapshot(documentSnapshot => {
        // console.log('User data: ', documentSnapshot.data());
        setUserData(documentSnapshot.data() as React.SetStateAction<{ phone: string; name: string; avatar: string; email: string }>);
      });

  }
  useEffect(() => {
    getUser();
  }, []);

  console.log(userData)

  return (
    <>
      <SafeAreaView style={styles.container}>
        <LinearGradient colors={['#59b223', '#08812f']} style={styles.background}>
          <View style={styles.userInfoSection}>
            <View style={{ flexDirection: 'row', marginTop: 15, alignItems: 'center', justifyContent: 'space-between' }}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <ImageBackground source={{
                  uri: image
                    ? image
                    : userData
                      ? userData.avatar ||
                      "https://cdn-icons-png.flaticon.com/512/2815/2815428.png"
                      : "https://cdn-icons-png.flaticon.com/512/2815/2815428.png",
                }} style={{ backgroundColor: '#fff', height: 80, width: 80, borderRadius: 50 }} />

                <Title style={styles.title}>
                  {userData ? userData.name : ''}
                </Title>
              </View>

              <TouchableRipple onPress={() => { navigation.navigate('EditProfile') }}>
                <AntDesign name='edit' size={22} color='#fff' />
              </TouchableRipple>
            </View>
          </View>

          {userData ? <View style={styles.userInfoSection}>
            {userData.hasOwnProperty('phone')
              ? <View style={styles.row}>
                <Icon name="phone" color="#fff" size={20} />
                <Text style={{ color: "#fff", marginLeft: 20 }}>{userData ? userData.phone : ''}</Text>
              </View>
              : null}
            <View style={styles.row}>
              <Icon name="email" color="#fff" size={20} />
              <Text style={{ color: "#fff", marginLeft: 20 }}>{auth().currentUser?.email}</Text>
            </View>
          </View> : null}
        </LinearGradient>

        <ScrollView>
          <View style={styles.quizBoxWrapper}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%', paddingLeft: 15, paddingRight: 10, paddingTop: 7 }}>
              <Text style={{ color: '#08812f', fontWeight: 'bold', fontSize: 20 }}>QUIZZES</Text>
              <TouchableRipple onPress={() => { navigation.navigate('Quizzes') }} style={{ marginTop: 3 }}>
                <View style={{ flexDirection: 'row', }}>
                  <Text style={{ fontWeight: 'bold' }}>See all</Text>
                  <Ionicons name='chevron-forward' size={18} color='#000' />
                </View>
              </TouchableRipple>
            </View>

            <View style={{ borderBottomColor: '#dddddd', borderBottomWidth: 1, marginHorizontal: 15, marginVertical: 5 }}></View>

            <View style={{ flexDirection: 'row', paddingLeft: 15, paddingRight: 15, alignItems: 'center', }}>

              <ImageBackground source={require(`../../assets/quizLogo.png`)} style={{ width: 100, height: 100 }} />
              <Text style={{ color: '#777777', marginLeft: 7, fontWeight: 'bold' }}>Available</Text>

            </View>
          </View>

          <View style={styles.menuWrapper}>
            <Text style={styles.label}>YOURS ONLY</Text>

            <View style={{ marginHorizontal: 15, borderBottomColor: '#dddddd', borderBottomWidth: 1 }}></View>

            <TouchableRipple onPress={() => { navigation.navigate('Bookmarks') }}>
              <View style={styles.menuInsideWrap}>
                <View style={styles.menuItem}>
                  <Icon name="bookmark-outline" color="#000" size={25} />
                  <Text style={styles.menuItemText}>Bookmarks</Text>
                </View>
                <Ionicons name='chevron-forward' size={18} color='#000' />
              </View>
            </TouchableRipple>

          </View>

          <View style={styles.menuWrapper}>
            <Text style={styles.label}>SUPPORT</Text>

            <View style={{ marginHorizontal: 15, borderBottomColor: '#dddddd', borderBottomWidth: 1 }}></View>

            <TouchableRipple onPress={() => { navigation.navigate('About') }}>
              <View style={styles.menuInsideWrap}>
                <View style={styles.menuItem}>
                  <AntDesign name="questioncircleo" color="#000" size={25} />
                  <Text style={styles.menuItemText}>About Us</Text>
                </View>
                <Ionicons name='chevron-forward' size={18} color='#000' />
              </View>
            </TouchableRipple>

            <View style={{ marginHorizontal: 15, borderBottomColor: '#dddddd', borderBottomWidth: 1 }}></View>

            <TouchableRipple onPress={onLogout}>
              <View style={styles.menuInsideWrap}>
                <View style={styles.menuItem}>
                  <Icon name="logout" color="#000" size={25} />
                  <Text style={styles.menuItemText}>Logout</Text>
                </View>
                <Ionicons name='chevron-forward' size={18} color='#000' />
              </View>
            </TouchableRipple>

          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

export default Profile
