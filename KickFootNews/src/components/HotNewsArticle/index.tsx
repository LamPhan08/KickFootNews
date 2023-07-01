import { useNavigation } from '@react-navigation/native';
import moment from 'moment';
import React, { useCallback } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { SharedElement } from 'react-navigation-shared-element';
import styles from './styles';

type Post = {
  title: string;
  urlToImage: string;
  publishedAt: string;
  url: string;
  author: string;
};

export const HotNewsArticle: React.FC<{
  post: Post;
  index: number;
}> = ({ post, index }) => {
  const navigation: any = useNavigation();
  const handleNavigate = useCallback(() => {
    navigation.navigate('NewsDetails', { article: post, articleIndex: index });
  }, [index, navigation, post]);

  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={handleNavigate}>
      <View>
        <Image
          source={{
            uri:
              post?.urlToImage
          }}
          resizeMode={'cover'}
          style={styles.image}
          blurRadius={3}
        />
      </View>
      <View
        style={styles.titleContainer}>
        <View style={styles.timestampContainer}>
          <Text style={styles.hotNews}>Hot News</Text>

          {/* <Text style={styles.timestamp}>
            {moment(post?.publishedAt).format('HH:MM DD, MMMM')}
          </Text> */}
        </View>
        <Text style={styles.text} numberOfLines={2}>{post?.title}</Text>

      </View>
    </TouchableOpacity>
  );
};