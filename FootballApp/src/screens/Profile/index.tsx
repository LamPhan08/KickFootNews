import React from 'react'
import { Image, SafeAreaView, View, ScrollView } from 'react-native'
import styles from './styles'
import { Avatar, Title, Caption, Text, TouchableRipple } from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import user from '../../assets/user.png'
import Ionicons from 'react-native-vector-icons/Ionicons'
import quizImage from '../../assets/quizLogo.png'
import AntDesign from 'react-native-vector-icons/AntDesign'
import LinearGradient from 'react-native-linear-gradient'
import { useNavigation } from '@react-navigation/native'

const Profile = () => {
  const navigation: any = useNavigation();

  return (
    <>
      <SafeAreaView style={styles.container}>
        <LinearGradient colors={['#ffd500', '#65a844']} style={styles.background}>
          <View style={styles.userInfoSection}>
            <View style={{ flexDirection: 'row', marginTop: 15, alignItems: 'center' }}>
              <Avatar.Image source={{ uri: "https://cdn-icons-png.flaticon.com/512/2815/2815428.png" }} size={80} style={{ backgroundColor: '#fff' }} />

              <Title style={styles.title}>
                User
              </Title>
            </View>
          </View>

          <View style={styles.userInfoSection}>
            <View style={styles.row}>
              <Icon name="phone" color="#fff" size={20} />
              <Text style={{ color: "#fff", marginLeft: 20 }}>0123456789</Text>
            </View>
            <View style={styles.row}>
              <Icon name="email" color="#fff" size={20} />
              <Text style={{ color: "#fff", marginLeft: 20 }}>user@gmail.com</Text>
            </View>
          </View>
        </LinearGradient>

        <ScrollView>
          <View style={styles.quizBoxWrapper}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%', paddingLeft: 15, paddingRight: 10, paddingTop: 7 }}>
              <Text style={{ color: '#65A844', fontWeight: 'bold', fontSize: 20 }}>QUIZZES</Text>
              <TouchableRipple onPress={() => {navigation.navigate('Quiz')}} style={{ marginTop: 3 }}>
                <View style={{ flexDirection: 'row', }}>
                  <Text style={{ fontWeight: 'bold' }}>See all</Text>
                  <Ionicons name='chevron-forward' size={18} color='#000' />
                </View>
              </TouchableRipple>
            </View>

            <View style={{ borderBottomColor: '#dddddd', borderBottomWidth: 1, marginHorizontal: 15, marginVertical: 5 }}></View>

            <View style={{ flexDirection: 'row', paddingLeft: 15, paddingRight: 15, alignItems: 'center', }}>

              <Image source={quizImage} style={{ width: 100, height: 100 }} />
              <Text style={{ color: '#777777', marginLeft: 7, fontWeight: 'bold' }}>Available</Text>

            </View>
          </View>

          <View style={styles.menuWrapper}>
            <Text style={styles.label}>YOURS ONLY</Text>

            <View style={{ marginHorizontal: 15, borderBottomColor: '#dddddd', borderBottomWidth: 1 }}></View>

            <TouchableRipple onPress={() => {navigation.navigate('Bookmark')}}>
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

            <TouchableRipple onPress={() => {navigation.navigate('About')}}>
              <View style={styles.menuInsideWrap}>
                <View style={styles.menuItem}>
                  <AntDesign name="questioncircleo" color="#000" size={25} />
                  <Text style={styles.menuItemText}>About</Text>
                </View>
                <Ionicons name='chevron-forward' size={18} color='#000' />
              </View>
            </TouchableRipple>

            <View style={{ marginHorizontal: 15, borderBottomColor: '#dddddd', borderBottomWidth: 1 }}></View>

            <TouchableRipple onPress={() => {navigation.navigate('Login')}}>
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
