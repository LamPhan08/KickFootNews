import { useNavigation } from '@react-navigation/native';
import React, { useCallback, useState,useEffect } from 'react';
import firestore, { FirebaseFirestoreTypes } from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import {
    ImageBackground,
    Linking,
    ScrollView,
    Text,
    TouchableOpacity,
    useColorScheme,
    View,
    ToastAndroid
} from 'react-native';
import styles from './styles';
import moment from 'moment'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

interface Route {
    params: {
        article: {
            author: string;
            title: string;
            urlToImage: string;
            publishedAt: string;
            url: string;
            description: string;
            content: string;
            source: {
                name: string
            }
        };
        articleIndex: number;
        
    };
}

export const NewsDetails: React.FC<{ route: Route }> = ({ route }) => {
    const { article, articleIndex } = route?.params;

    const backgroundColor = useColorScheme() === 'dark' ? '#000' : '#fff';
    const color = useColorScheme() === 'dark' ? '#fff' : '#000';
    const contentColor = useColorScheme() === 'dark' ? '#bbb' : '#444';
    const readMoreBgColor = useColorScheme() === 'dark' ? '#222' : '#ddd';

    const handleURLPress = useCallback(() => {
        Linking.openURL(article?.url);
    }, [article]);


    
    const [bookmarked, setBookmarked] = useState(false)

    const handleBookmark = () => { // Hàm để lưu các dữ liệu vào csdl gồm: title, description, url, urlToImage, publishedAt
        
        if(bookmarked) {           
            firestore()
            .collection('bookmarks')
            .doc(auth().currentUser?.uid)
            .collection('articles_saved')
            .doc(article.url.replaceAll('/','.'))
            .delete()
            .then(() => {
              console.log('Artilces removed');
            })           
            ToastAndroid.show('Article removed', ToastAndroid.BOTTOM)
        }
        else {
            firestore()
            .collection('bookmarks')
            .doc(auth().currentUser?.uid)
            .collection('articles_saved')
            .doc(article.url.replaceAll('/','.'))
            .set({
              title: article.title,
              description: article.description,
              url: article.url,
              urlToImage:article.urlToImage,
              publishedAt: article.publishedAt
            })
            .then(() => {
              console.log('Artilces saved');
            })

            ToastAndroid.show('Article saved', ToastAndroid.BOTTOM)
        }
    }
    useEffect(() => {
        async function getBookMarked() { 
            firestore()
            .collection('bookmarks')
            .doc(auth().currentUser?.uid)
            .collection('articles_saved')
            .doc(article.url.replaceAll('/','.'))
                .onSnapshot(
                documentSnapshot => {
                
                    if (documentSnapshot.exists) {
                        setBookmarked(!bookmarked)
                    }
                    else{
                        setBookmarked(bookmarked)
                    }
                });
        }
    
        getBookMarked();
    }, []);

    return (
        <>
            <ScrollView
                bounces={false}
                showsVerticalScrollIndicator={false}
                style={[styles.container, { backgroundColor }]}
                contentContainerStyle={styles.contentContainer}>
                <Text style={[styles.title, { color }]}>{article?.title}</Text>

                <View style={styles.authorPublishedContainer}>


                    <View style={{ flexDirection: 'row' }}>
                        <ImageBackground source={require(`../../assets/author.png`)} style={styles.authorIcon} alt='author'/>
                        <View style={styles.authorAndPublished}>
                            <Text style={styles.name}>Sky Sports</Text>
                            <Text>{moment(article.publishedAt).format('HH:MM DD, MMMM')}</Text>
                        </View>


                    </View>

                    <TouchableOpacity>
                        {bookmarked ? <FontAwesome name='bookmark' size={25} onPress={handleBookmark} color='#000'/> 
                                    : <FontAwesome name='bookmark-o' size={25} onPress={ handleBookmark} color='#000'/>}
                    </TouchableOpacity>
                </View>

                <ImageBackground
                    style={styles.image}
                    source={{ uri: article?.urlToImage }}
                    resizeMode={'cover'}
                />

                <Text style={[styles.content, { color: contentColor }]}>
                    {article?.description}
                </Text>
            </ScrollView>
            <View
                style={[styles.readMoreContainer, { backgroundColor: readMoreBgColor }]}>
                <Text style={[styles.readMoreText, { color }]} numberOfLines={2}>
                    Read more at{' '}
                    <Text style={styles.link} onPress={handleURLPress}>
                        {article?.url}
                    </Text>
                </Text>
            </View>
        </>
    );
};

(NewsDetails as any).sharedElements = (route: any) => {
    const { articleIndex } = route.params;
    return [`article#${articleIndex}-Image`];
};