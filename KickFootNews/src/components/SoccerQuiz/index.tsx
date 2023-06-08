import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import styles from './styles'
import matchIcon from '../../assets/quizLogo.png'
import { useNavigation } from '@react-navigation/native'


type QuizModel = {
    quizName: string,
    questions: [
        {
            question: string,
            options: [],
            correct_option: string,
            image: string
        }
    ]
}

const SoccerQuiz: React.FC<{quiz: QuizModel}> = ({quiz}) => {
    const navigation: any = useNavigation()

    const handlePlayQuiz = () => {
        navigation.navigate('QuizDetails', {quiz})
    }

    return (
        <View style={styles.container}>
            <View style={styles.iconContainer}>
                <Image source={matchIcon} style={styles.quizIcon} />

                <View style={styles.quizNameContainer}>
                    <Text style={styles.quizName}>{quiz.quizName}</Text>
                    <Text style={styles.available}>Available</Text>
                </View>
            </View>

            <TouchableOpacity style={styles.playButton} onPress={handlePlayQuiz}>
                <Text style={styles.buttonLabel}>PLAY NOW</Text>
            </TouchableOpacity>
        </View>
    )
}

export default SoccerQuiz
