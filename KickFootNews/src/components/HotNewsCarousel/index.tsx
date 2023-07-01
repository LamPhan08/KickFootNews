import React, { useRef, useState } from 'react'
import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import { HotNewsArticle } from '../HotNewsArticle'
import styles from './styles'

const viewConfigRef = { viewAreaCoveragePercentThreshold: 95 };

const HotNewsCarousel = ({ articleList }: any) => {
    // console.log(articleList.length)
    let flatListRef = useRef<FlatList | null>();
    const [currentIndex, setCurrentIndex] = useState(0);

    const onViewRef = useRef(({ changed }: { changed: any }) => {
        if (changed[0].isViewable) {
            setCurrentIndex(changed[0].index);
        }
    });
    const scrollToIndex = (index: number) => {
        flatListRef.current?.scrollToIndex({ animated: true, index: index });
    };

    const renderItem = ({ item, index }: any) => {
        return (
            <HotNewsArticle post={item} index={index} />
        )
    }

    return (    
        <View>
            <FlatList
                data={articleList}
                renderItem={renderItem}
                horizontal
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                onViewableItemsChanged={onViewRef.current}
                ref={(ref) => {
                    flatListRef.current = ref;
                }}  
                viewabilityConfig={viewConfigRef}
            />

            <View style={styles.dotView}>
                {articleList.map(({ }, index: any) => (
                    <TouchableOpacity
                        key={index.toString()}
                        style={[
                            styles.circle,
                            { backgroundColor: index == currentIndex ? '#fff' : '#C0C0C0',
                                width: index === currentIndex ? 10 : 6,
                                height: index === currentIndex ? 10 : 6
                        },
                        ]}
                        onPress={() => scrollToIndex(index)}
                    />
                ))}
            </View>
        </View>
    )
}

export default HotNewsCarousel
