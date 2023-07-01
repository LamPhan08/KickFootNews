import React from 'react'
import { View, TouchableOpacity, Text, Image } from 'react-native'
import styles from './styles'
import moment from 'moment'
import { useNavigation } from '@react-navigation/native';


type Post = {
  title: string;
  urlToImage: string;
  publishedAt: string;
  url: string;
  author: string;
};

const TrendingNewsArticle: React.FC<{post: Post; index: number}> = ({post, index}) => {
  // console.log(post)
  const navigation: any = useNavigation()

  const handleNavigate = () => {
    navigation.navigate('NewsDetails', {article: post, articleIndex: index})
  }

  return (
    <TouchableOpacity style={styles.container} onPress={handleNavigate}>
      <Image source={{uri: post.urlToImage}} style={styles.articleImage}/>

      <View style={styles.titleContainer}>
        <View style={styles.timestampContainer}>
          <Text style={styles.articleSource}>Sky Sports</Text>

          <Text style={styles.articleTimestamp}>{moment(post?.publishedAt).format('HH:MM DD, MMMM')}</Text>
        </View>

        <Text style={styles.articleTitle} numberOfLines={3}>{post.title}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default TrendingNewsArticle
