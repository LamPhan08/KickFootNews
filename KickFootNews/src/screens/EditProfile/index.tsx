import React from 'react'
import { View, Text, TouchableOpacity, ImageBackground, TextInput } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather'
import styles from './styles'


const EditProfile = () => {
    return (
        <View style={{ alignItems: 'center', marginTop: 10 }}>
            <TouchableOpacity>
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
                            uri: "https://cdn-icons-png.flaticon.com/512/2815/2815428.png",
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
                Fetch tên từ csdl rùi bỏ vào đây
            </Text>

            <View style={styles.action}>
                <FontAwesome name="user-o" color='#000' size={20} />
                <TextInput
                    placeholder="Name"
                    placeholderTextColor="#666666"
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

            <TouchableOpacity style={styles.commandButton} onPress={() => { }}>
                <Text style={styles.panelButtonTitle}>Submit</Text>
            </TouchableOpacity>
        </View>
    )
}

export default EditProfile
