import React, { useEffect, useCallback, useState } from 'react';
import { FlatList, RefreshControl, Text, useColorScheme, SafeAreaView, ToastAndroid, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getNewsFeed } from '../../redux/actions';
import { NewsArticle } from '../../components/NewsArticle';
import styles from './styles';



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
        <SafeAreaView style={[styles.container, {backgroundColor}]} >
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
                showsVerticalScrollIndicator={false}
                initialNumToRender={10}
                data={newsFeed}
                renderItem={({ item, index }) => {
                    return (<NewsArticle post={item} index={index} />)
                }}
                style={styles.list}>

            </FlatList>

        </SafeAreaView>
    );
};