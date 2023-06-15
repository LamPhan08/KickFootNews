import { useNavigation } from '@react-navigation/native';
import React, {useState, useEffect} from 'react'
import { View, Image } from 'react-native';
import styles from './styles';
import logo from '../../assets/logoFootball.png'
import auth from '@react-native-firebase/auth';

const Splash = () => {
    const [isVisible, setIsVisible] = useState(true);
    const navigation: any = useNavigation();

    const hideSplashScreen = () => {
        setIsVisible(false);
    }

    useEffect(() => {
        setTimeout(() => {
            hideSplashScreen();
            auth().onAuthStateChanged(function(user) {
                if (user) {
                    navigation.replace("Home");
                }
                else {
                    navigation.replace("Login");
                }
            })
        }, 1500);
    }, []);

    const renderSplash = () => {
        return (
            <View style={styles.SplashScreen_RootView}>
                <View style={styles.SplashScreen_ChildView}>
                    <Image source={logo} 
                        style={{ width: 280, height: 280, resizeMode: "contain" }} />
                </View>
            </View>
        )
    }

    return (
        <View style={styles.MainContainer}>
            {isVisible === true ? renderSplash(): null}
        </View>
    )
}

export default Splash
