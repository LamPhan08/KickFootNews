import React, { useState, useEffect } from 'react'
import { FlatList, SafeAreaView, View, Text, TouchableOpacity, Image } from 'react-native'
import TrendingNewsArticle from '../../components/TrendingNewsArticle';
import styles from './styles'
import firestore, { FirebaseFirestoreTypes } from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import manReading from '../../assets/manReading.jpg'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { useNavigation } from '@react-navigation/native';

//Dữ liệu mẫu
// const exampleDatas = [
//   {
//     author: "",
//     title: "Scottish Premiership: How did your club's season go?",
//     urlToImage: "https://e0.365dm.com/23/05/1600x900/skysports-scottish-premiership_6168606.jpg?20230526150251",
//     url: "https://www.skysports.com/football/news/11095/12895289/scottish-premiership-every-clubs-season-assessed",
//     publishedAt: "2023-06-05T08:00:00Z",
//     description: "With another dramatic Scottish Premiership season finished, Sky Sports assesses who earned top marks, who could have done more and who were the star men?",
//   },
//   {
//     author: "",
//     title: "Papers: Everton line up Weghorst at end of Man Utd loan",
//     urlToImage: "https://e0.365dm.com/19/10/1600x900/skysports-paper-talk-papers_4819668.jpg?20200516213727",
//     url: "https://www.skysports.com/football/news/11095/12896570/everton-line-up-wout-weghorst-signing-at-end-of-man-utd-loan-paper-talk",
//     publishedAt: "2023-06-04T21:54:00Z",
//     description: "All the top stories and transfer rumours from Monday's newspapers...",
//   },
//   {
//     author: "",
//     title: "Ibrahimovic announces retirement from football aged 41",
//     urlToImage: "https://e0.365dm.com/23/06/1600x900/skysports-zlatan-ibrahimovic_6178434.jpg?20230604224048",
//     url: "https://www.skysports.com/football/news/11095/12896566/zlatan-ibrahimovic-ac-milan-star-retires-from-football-aged-41-after-final-game-for-serie-a-side",
//     publishedAt: "2023-06-04T21:29:00Z",
//     description: "AC Milan's Sweden striker Zlatan Ibrahimovic said on Sunday he had decided to end his football career.",
//   }
// ]


const Bookmark = () => {
  const [bookmarks, setBookMarks] = useState([]);

  useEffect(() => {
    async function fetchBookMarks() {
      const savedNews: any = []
      const querySnapshot = await firestore().collection('bookmarks')
        .doc(auth().currentUser?.uid)
        .collection('articles_saved').get();
      querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
        savedNews.push(doc.data());
      });
      setBookMarks(savedNews);
    }

    fetchBookMarks();
  }, []);

  const navigation: any = useNavigation()

  const handleNavigate = () => {
    navigation.replace('Home')
  }

  return (
    <SafeAreaView style={styles.container}>
      {bookmarks.length === 0
        ? <View style={styles.noBookmarkContainer}>
          <Image source={manReading} style={styles.noBookmarkImage}/>

          <Text style={styles.haventSaved}>You haven't saved any articles yet!</Text>
          <View style={styles.tapBookmarkContainer}>
            <Text style={styles.tapBookmark}>Tap  </Text>

            <FontAwesome name='bookmark-o' size={20} color='#000'/>

            <Text style={styles.tapBookmark}>  to add news to read later!</Text>
          </View>

          <TouchableOpacity style={styles.exploreBtn} onPress={handleNavigate}>
            <Text style={styles.btnLabel}>START EXPLORING</Text>
          </TouchableOpacity>
        </View>
        : <FlatList
          showsHorizontalScrollIndicator={false}
          data={bookmarks}
          renderItem={({ item, index }) => {
            return (<TrendingNewsArticle post={item} index={index} />)
          }}
          style={styles.bookmarkList}>

        </FlatList>}
    </SafeAreaView>
  )
}

export default Bookmark
