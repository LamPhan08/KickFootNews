import React, { useEffect, useCallback, useState } from 'react';
import { FlatList, RefreshControl, useColorScheme, SafeAreaView, Image, View } from 'react-native';
import uuid from 'react-native-uuid';
import { useDispatch, useSelector } from 'react-redux';
import { getNewsFeed } from '../../redux/actions';
import { NewsCategory } from '../../constants';
import { NewsTags } from '../../components/NewsTags';
import { SearchInput } from '../../components/SearchInput';
import TrendingNewsArticle from '../../components/TrendingNewsArticle';
import styles from './styles';
import searching from '../../assets/searching.png'

const Search = () => {
  const { searchResults } = useSelector((state: any) => state.feedReducer);
  const [isLoading, setIsLoading] = useState(false);
  const [searchText, setSearchText] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <SearchInput
        searchText={searchText}
        setSearchText={setSearchText}
        setIsLoading={setIsLoading}
      />

      {searchResults.length === 0
        ? <View style={styles.noSearchResults}>
          <Image source={searching} />
        </View>
        : <FlatList
          refreshControl={<RefreshControl refreshing={isLoading} />}
          showsVerticalScrollIndicator={false}
          data={searchText?.trim() ? searchResults : null}
          renderItem={({ item, index }: any) => (
            <TrendingNewsArticle post={item} index={index} />
          )}
          style={styles.list}
        />}
    </SafeAreaView>
  )
}

export default Search
