import React, {  useEffect, useContext, useState, createContext} from 'react'
import { View, Text, TouchableOpacity, ImageBackground, TextInput, Alert} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather'
import styles from './styles'
import firestore, { FirebaseFirestoreTypes } from '@react-native-firebase/firestore';
import { firebase } from '@react-native-firebase/auth';
import auth from '@react-native-firebase/auth';
import {MediaType, launchCamera, launchImageLibrary} from 'react-native-image-picker';
const EditProfile = () => {
 
   const [image, setImage] = useState('');
   const [uploading, setUploading] = useState(false);
   const [transferred, setTransferred] = useState(0);
   const [userData, setUserData] = useState({ phone: '', name: '',avatar: ''});
   
   const getUser = async() => {
    const currentUser = await firestore()
    .collection('users')
    .doc(auth().currentUser?.uid)
    .get()
    .then((documentSnapshot) => {
      if( documentSnapshot.exists ) {
        console.log('User Data', documentSnapshot.data());
        setUserData(documentSnapshot.data() as React.SetStateAction<{ phone: string; name: string; avatar: string }>);
      }
    })
  }

  const handleUpdate = async() => {
    firestore()
    .collection('users')
    .doc(auth().currentUser?.uid)
    .set({
      name: userData.name,
      phone: userData.phone,
      avatar: image
    })
    .then(() => {
        
      console.log('User Updated!');
      Alert.alert(
        'Profile Updated!',
        'Your profile has been updated successfully.'
      );
    })
  }
  let options = {
    saveToPhotos : true,
    mediaType: 'photo' as MediaType,
  };
  const handleImageSelection = async() => {
    const result = await launchImageLibrary(options);
    setImage(result.assets[0].uri)
  }
  
   useEffect(() => {
    getUser();
  }, []);


    return (
        
        <View style={{ alignItems: 'center', marginTop: 10 }}>
            <TouchableOpacity onPress={handleImageSelection}>
                <View
                    style={{
                        height: 100,
                        width: 100,
                        borderRadius: 15,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                    <ImageBackground
                        source={{
                            uri: image
                            ? image
                            : userData
                            ? userData.avatar ||
                            "https://cdn-icons-png.flaticon.com/512/2815/2815428.png"
                            :"https://cdn-icons-png.flaticon.com/512/2815/2815428.png",
                        }}
                        style={{ height: 100, width: 100, borderColor: '#ddd', borderWidth: 1, borderRadius: 15 }}
                        imageStyle={{ borderRadius: 15 }}>
                        {/* <View
                            style={{
                                flex: 1,
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                            <Icon
                                name="camera"
                                size={35}
                                color="#fff"
                                style={{
                                    opacity: 0.7,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderWidth: 1,
                                    borderColor: '#fff',
                                    borderRadius: 10,
                                }}
                            />
                        </View> */}
                    </ImageBackground>
                </View>
            </TouchableOpacity>

            <Text style={{ marginTop: 10, fontSize: 18, fontWeight: 'bold', color: '#000' }}>
                
                {userData ? userData.name : ''}
            </Text>

            <View style={styles.action}>
                <FontAwesome name="user-o" color='#000' size={20} />
                <TextInput
                    placeholder="Name"
                    placeholderTextColor="#666666"
                    value={userData ? userData.name : ''}
                    onChangeText={(txt) => setUserData({...userData, name: txt})}
                    autoCorrect={false}
                    style={[
                        styles.textInput,
                        {
                            color: '#000'
                        },
                    ]} />
            </View>

            <View style={styles.action}>
                <Feather name="phone" color='#000' size={20} />
                <TextInput
                    placeholder="Phone"
                    placeholderTextColor="#666666"
                    keyboardType="number-pad"
                    value={userData ? userData.phone : ''}
                    onChangeText={(txt) => setUserData({...userData, phone: txt})}
                    autoCorrect={false}
                    style={[
                        styles.textInput,
                        {
                            color: '#000'
                        },
                    ]}
                />
            </View>

            <View style={styles.action}>
                <FontAwesome name="envelope-o" color='#000' size={20} />
                <TextInput
                    placeholder="Email"
                    placeholderTextColor="#666666"
                    keyboardType="email-address"
                    autoCorrect={false}
                    style={[
                        styles.textInput,
                        {
                            color: '#000'
                        },
                    ]}
                />
            </View>

            <TouchableOpacity style={styles.commandButton} onPress={handleUpdate}>
                <Text style={styles.panelButtonTitle}>Submit</Text>
            </TouchableOpacity>
        </View>
    )
}

export default EditProfile
