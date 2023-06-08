import {useNavigation} from '@react-navigation/native';
import moment from 'moment';
import React, {useCallback} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {SharedElement} from 'react-navigation-shared-element';
import styles from './styles';

type Post = {
  title: string;
  urlToImage: string;
  publishedAt: string;
  url: string;
  author: string;
};

export const NewsArticle: React.FC<{
  post: Post;
  index: number;
}> = ({post, index}) => {
  const navigation: any = useNavigation();
  const handleNavigate = useCallback(() => {
    navigation.navigate('NewsDetails', {article: post, articleIndex: index});
  }, [index, navigation, post]);

  return (
    <TouchableOpacity
      activeOpacity={1}
      style={styles.container}
      onPress={handleNavigate}>
      <View
        style={styles.imageContainer}>
        <Image
          source={{
            uri:
              post?.urlToImage
          }}
          resizeMode={'cover'}
          style={styles.image}
        />
      </View>
      <LinearGradient
        colors={['#000A', '#000A', '#000']}
        style={styles.titleContainer}>
        <Text style={styles.text} numberOfLines={2}>{post?.title}</Text>
        <Text style={styles.timestamp}>
          {moment(post?.publishedAt).format('HH:MM DD, MMMM')}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};