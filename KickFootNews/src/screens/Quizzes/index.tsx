import React from 'react'
import {View, Text, FlatList} from 'react-native'
import {quizData} from './quizData'
import SoccerQuiz from '../../components/SoccerQuiz'
import styles from './styles'

const Quizzes = () => {
  return (
    <View>
        <FlatList
                scrollEnabled
                showsVerticalScrollIndicator = {false}
                data = {quizData}
                renderItem = {({item}: any) => {
                    // <NewsArticle post={item} index={index}/>
                    
                    return <SoccerQuiz quiz={item}/>
                }}
                style={styles.list}
                
            />
    </View>
  )
}

export default Quizzes
