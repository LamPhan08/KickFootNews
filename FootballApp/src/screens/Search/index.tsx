import React, { useEffect, useCallback, useState } from 'react';
import { FlatList, RefreshControl, useColorScheme, View } from 'react-native';
import uuid from 'react-native-uuid';
import { useDispatch, useSelector } from 'react-redux';
import { getNewsFeed } from '../../redux/actions';
import { NewsArticle } from '../../components/NewsArticle';
import { NewsCategory } from '../../constants';
import { NewsTags } from '../../components/NewsTags';
import { SearchInput } from '../../components/SearchInput';
import styles from './styles';


const Search = () => {
  const { searchResults } = useSelector((state: any) => state.feedReducer);
  const [isLoading, setIsLoading] = useState(false);
  const [searchText, setSearchText] = useState('');

  return (
    <View style={styles.container}>
      <SearchInput
        searchText={searchText}
        setSearchText={setSearchText}
        setIsLoading={setIsLoading}
      />

      <FlatList
        showsVerticalScrollIndicator={false}
        data={searchText?.trim() ? searchResults : null}
        renderItem={({ item, index }: any) => (
          <NewsArticle post={item} index={index} />
        )}
        style={styles.list}
      />
    </View>
  )
}

export default Search
