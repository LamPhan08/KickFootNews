import React, { useEffect, useCallback, useState } from 'react';
import { FlatList, RefreshControl, useColorScheme, SafeAreaView } from 'react-native';
import uuid from 'react-native-uuid';
import { useDispatch, useSelector } from 'react-redux';
import { getNewsFeed } from '../../redux/actions';
import { NewsCategory } from '../../constants';
import { NewsTags } from '../../components/NewsTags';
import { SearchInput } from '../../components/SearchInput';
import TrendingNewsArticle from '../../components/TrendingNewsArticle';
import styles from './styles';


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

      <FlatList
        refreshControl={<RefreshControl refreshing={isLoading}/>}
        showsVerticalScrollIndicator={false}
        data={searchText?.trim() ? searchResults : null}
        renderItem={({ item, index }: any) => (
          <TrendingNewsArticle post={item} index={index} />
        )}
        style={styles.list}
      />
    </SafeAreaView>
  )
}

export default Search
