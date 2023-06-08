import React, { useEffect, useCallback, useState } from 'react';
import { FlatList, RefreshControl, Text, useColorScheme, ScrollView, SafeAreaView, ToastAndroid } from 'react-native';
import uuid from 'react-native-uuid';
import { useDispatch, useSelector } from 'react-redux';
import { getNewsFeed } from '../../redux/actions';
import { NewsArticle } from '../../components/NewsArticle';
import { NewsCategory } from '../../constants';
import styles from './styles';
import axios from 'axios';



export const Feed: React.FC = () => {
    const { newsFeed } = useSelector((state: any) => state.feedReducer);
    const dispatch: Function = useDispatch();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        dispatch(getNewsFeed(setIsLoading));
    }, [dispatch]);

    const handleRefresh = useCallback(() => {
        ToastAndroid.show("Refreshing...", ToastAndroid.SHORT)

        dispatch(getNewsFeed(setIsLoading));
    }, [dispatch]);



    const backgroundColor = useColorScheme() === 'dark' ? '#000' : '#fff';

    // console.log(newsFeed)

    return (
        <SafeAreaView style={[styles.container, {backgroundColor}]}>
            {/* <SearchInput
                searchText={searchText}
                setSearchText={setSearchText}
                setIsLoading={setIsLoading}
            /> */}

            {/* {!searchText?.trim() && ( */}
            {/* <NewsTags selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}/> */}
            {/* )} */}

            <Text style={{ fontSize: 30, fontWeight: 'bold', marginLeft: 15, color: '#000' }}>Trending News</Text>


            <FlatList 
                refreshControl={<RefreshControl refreshing={isLoading} onRefresh={handleRefresh}/>}
                showsHorizontalScrollIndicator={false}
                data={newsFeed}
                renderItem={({ item, index }) => {
                    return (<NewsArticle post={item} index={index} />)
                }}
                style={styles.list}>

            </FlatList>

        </SafeAreaView>
    );
};