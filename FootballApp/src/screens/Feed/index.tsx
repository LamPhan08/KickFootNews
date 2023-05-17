import React, {useEffect, useCallback, useState} from 'react';
import {FlatList, RefreshControl, Text, useColorScheme, View} from 'react-native';
import uuid from 'react-native-uuid';
import {useDispatch, useSelector} from 'react-redux';
import { getNewsFeed } from '../../redux/actions';
import { NewsArticle } from '../../components/NewsArticle';
import { NewsCategory } from '../../constants';
import { NewsTags } from '../../components/NewsTags';
import { SearchInput } from '../../components/SearchInput';
import styles from './styles';
import { ScrollView } from 'react-native-gesture-handler';


export const Feed: React.FC = () => {
    const {newsFeed, searchResults} = useSelector((state: any) => state.feedReducer);
    const dispatch: Function = useDispatch();
    const [isLoading, setIsLoading] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(
        NewsCategory.business
    );
    const [searchText, setSearchText] = useState('');

    useEffect(() => {
        dispatch(getNewsFeed(setIsLoading, selectedCategory));
    }, [dispatch, selectedCategory]);

    const handleRefresh = useCallback(() => {
        dispatch(getNewsFeed(setIsLoading, selectedCategory));
      }, [dispatch, selectedCategory]);

    const backgroundColor = useColorScheme() === 'dark' ? '#000' : '#fff';

    return (
        <ScrollView style = {[styles.container, {backgroundColor}]} refreshControl ={<RefreshControl refreshing={isLoading} onRefresh={handleRefresh}/>
        }>
            {/* <SearchInput
                searchText={searchText}
                setSearchText={setSearchText}
                setIsLoading={setIsLoading}
            /> */}

            {/* {!searchText?.trim() && ( */}
                {/* <NewsTags selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}/> */}
            {/* )} */}

            <Text style={{fontSize: 30, fontWeight: 'bold', marginLeft: 15, color: '#000'}}>Trending News</Text>
            

            <FlatList
                scrollEnabled={false}
                showsVerticalScrollIndicator = {false}
                data = {newsFeed}
                renderItem = {({item, index}: any) => {
                    // <NewsArticle post={item} index={index}/>
                    
                    return <NewsArticle post={item} index={index}/>
                }}
                style={styles.list}
                
            />

        </ScrollView>
    );
};