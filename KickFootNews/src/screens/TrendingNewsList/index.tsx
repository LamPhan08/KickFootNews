import React from 'react'
import { SafeAreaView, Text, FlatList } from 'react-native'
import TrendingNewsArticle from '../../components/TrendingNewsArticle';
import styles from './styles'

interface Route {
  params: {
    newsFeed: []
  }
}

const TrendingNewsList: React.FC<{ route: Route }> = ({ route }) => {
  const newsFeed = route.params.newsFeed

  // console.log(newsFeed.length)

  return (
    <SafeAreaView>
      <FlatList
        showsVerticalScrollIndicator={false}
        initialNumToRender={10}
        data={newsFeed}
        renderItem={({ item, index }) => {
          return (<TrendingNewsArticle post={item} index={index} />)
        }}>
      </FlatList>
    </SafeAreaView>
  )
}

export default TrendingNewsList
