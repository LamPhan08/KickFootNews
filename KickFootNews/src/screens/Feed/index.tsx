import React, { useEffect, useCallback, useState } from 'react';
import { TouchableOpacity, RefreshControl, Text, View, ToastAndroid, ScrollView, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getNewsFeed } from '../../redux/actions';
import { HotNewsArticle } from '../../components/HotNewsArticle';
import TrendingNewsArticle from '../../components/TrendingNewsArticle';
import HotNewsCarousel from '../../components/HotNewsCarousel';
import styles from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native';


export const Feed: React.FC = () => {
    const { newsFeed } = useSelector((state: any) => state.feedReducer);
    const dispatch: Function = useDispatch();
    const [isLoading, setIsLoading] = useState(false);
    const navigation: any = useNavigation()

    useEffect(() => {
        dispatch(getNewsFeed(setIsLoading));
    }, [dispatch]);

    const handleRefresh = useCallback(() => {
        ToastAndroid.show("Refreshing...", ToastAndroid.SHORT)

        dispatch(getNewsFeed(setIsLoading));
    }, [dispatch]);


    // console.log(newsFeed)

    const handleNavigate = () => {
        navigation.navigate('TrendingNewsList', {newsFeed: newsFeed.slice(6, newsFeed.length)})
    }



    return (
        <ScrollView style={styles.container}
            refreshControl={<RefreshControl refreshing={isLoading} onRefresh={handleRefresh} />}
            showsVerticalScrollIndicator={false}
        >
            {/* <SearchInput
                searchText={searchText}
                setSearchText={setSearchText}
                setIsLoading={setIsLoading}
            /> */}

            {/* {!searchText?.trim() && ( */}
            {/* <NewsTags selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}/> */}
            {/* )} */}


            

            <HotNewsCarousel articleList={newsFeed.slice(0, 6)} />

            <View style={styles.trendingContainer}>
                <Text style={styles.trending}>Trending</Text>

                <TouchableOpacity style={styles.showAllIcon} onPress={handleNavigate}>
                    <Ionicons name='chevron-forward' size={20} color='#000'/>
                </TouchableOpacity>
            </View>

            {/* {newsFeed.slice(6, 15).map((item: any, index: any) => {
                return (
                    <TrendingNewsArticle post={item} index={index} key={index}/>
                )
            })} */}

            <FlatList 
                scrollEnabled={false}
                initialNumToRender={1}
                data={newsFeed.slice(6, 20)}
                renderItem={({ item, index }) => {
                    return (<TrendingNewsArticle post={item} index={index} />)
                }}>
            </FlatList>

        </ScrollView>
    );
};