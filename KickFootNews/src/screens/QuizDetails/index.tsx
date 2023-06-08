import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity, SafeAreaView, Animated, Modal } from 'react-native'
import styles from './styles'
import { useNavigation } from '@react-navigation/native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import trophy from '../../assets/trophy.png'
import medal from '../../assets/medal.png'
import brokenTrophy from '../../assets/brokenTrophy.png'
import quizImage from '../../assets/quizLogo.png'

interface Route {
  params: {
    quiz: {
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
  }
}


const QuizDetails: React.FC<{ route: Route }> = ({ route }) => {
  const { quiz } = route.params
  const navigation = useNavigation();

  const [showIntroduction, setShowIntroduction] = useState(true)

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [showNextButton, setShowNextButton] = useState(false)
  const [score, setScore] = useState(0)
  const [showScoreModal, setShowScoreModal] = useState(false)
  const [disableOption, setDisableOption] = useState(false)
  const [correctOption, setCorrectOption] = useState('');
  const [currentOptionSelected, setCurrentOptionSelected] = useState('');

  const [progress, setProgress] = useState(new Animated.Value(0))
  const progressAnimation = progress.interpolate({
    inputRange: [0, quiz.questions.length - 1],
    outputRange: ['10%', '100%']
  })

  const [exit, setExit] = useState(false)

  const handleValidateOption = (selectedOption: any) => {

    let correctOption = quiz.questions[currentQuestionIndex].correct_option

    setCurrentOptionSelected(selectedOption)
    setCorrectOption(correctOption)

    if (selectedOption == correctOption) {
      setScore(score + 1)
    }

    setDisableOption(true)
    setShowNextButton(true)
  }

  const handleNext = () => {
    if (currentQuestionIndex === quiz.questions.length - 1) { //Last question
      setShowScoreModal(true)
    }
    else {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
      setShowNextButton(false)
      setDisableOption(false)
      setCurrentOptionSelected('')
      setCorrectOption('')
    }

    Animated.timing(progress, {
      toValue: currentQuestionIndex + 1,
      duration: 1000,
      useNativeDriver: false
    }).start();
  }

  const handleBack = () => {
    setExit(false)
    navigation.goBack()
  }

  const handleExit = () => {
    setExit(true)
  }

  const handleTurnOffModal = () => {
    setExit(false)
  }

  const handleRetryQuiz = () => {
    setShowScoreModal(false)
    setCurrentQuestionIndex(0)
    setScore(0)
    setShowNextButton(false)
    setDisableOption(false)
    setCurrentOptionSelected('')
    setCorrectOption('')
    Animated.timing(progress, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: false
    }).start();
  }


  return (
    <SafeAreaView style={styles.container}>
      {/* Play Modal */}
      <Modal animationType='slide' visible={showIntroduction}>
        <View>
          <Ionicons name='md-close' color={'#000'} size={25} style={styles.iconClose} onPress={handleBack} />

          <View style={styles.insideIntroduction}>
            <View style={styles.introductionContainer}>
              <Text style={styles.introduction}>World Football</Text>

              <Text style={styles.introduction}>{quiz.quizName}</Text>
            </View>

            <Image source={quizImage} style={styles.introductionImage} />

            <TouchableOpacity style={[styles.modalBtn, {backgroundColor: '#08812f', marginTop: 40, width: '100%'}]} onPress={() => setShowIntroduction(false)}>
              <Text style={styles.btnLabel}>
                Play
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Question Counter & Progress Bar */}
      <View style={styles.progress}>
        <Ionicons name='arrow-back' size={22} color='#000' onPress={handleExit} />

        <View style={styles.questionCounterContainer}>
          <Text style={styles.questionCounter}>{currentQuestionIndex + 1}/10</Text>
        </View>

        <View style={styles.progressBar}>
          <Animated.View style={[styles.progressAnimation, { width: progressAnimation }]} />
        </View>
      </View>

      {/* Question */}
      <View style={styles.questionContainer}>
        <Text style={styles.question}>{quiz.questions[currentQuestionIndex].question}</Text>
      </View>


      {/* Image */}
      <Image source={{ uri: quiz.questions[currentQuestionIndex].image }} style={styles.image} />

      {/* Options */}
      <View>
        {quiz.questions[currentQuestionIndex].options.map((option) => {
          return (
            <TouchableOpacity style={[styles.option, {
              borderWidth: 2,
              borderColor: option === correctOption ? 'green'
                : (option === currentOptionSelected ? 'red'
                  : '#fff')


            }]} key={option} onPress={() => handleValidateOption(option)} disabled={disableOption}>
              <Text style={styles.optionContent}>{option}</Text>
            </TouchableOpacity>
          )
        })}
      </View>

      {/* Next Button */}
      {!showNextButton ? null
        : <TouchableOpacity style={styles.nextBtn} onPress={handleNext}>
          <Text style={styles.btnLabel}>Next</Text>
        </TouchableOpacity>}


      {/* Score Modal */}
      <Modal animationType='slide' visible={showScoreModal}>
        <View style={[styles.modalContainer, { backgroundColor: '#173518', }]}>
          <View style={styles.insideModal}>
            <Text style={styles.notice}>
              {score === 10 ? "You are the best!" : (score > 7 ? "Congratulations!" : "Try Harder!")}
            </Text>

            {score > 7 ? <Image source={score === 10 ? trophy : medal} style={styles.modalImage} /> : null}

            <Text style={styles.yourScore}>YOUR SCORE</Text>

            <Text style={styles.score}>{score} / 10</Text>

            <View style={styles.btnZone}>
              <TouchableOpacity style={[styles.modalBtn, { backgroundColor: '#989898' }]} onPress={handleBack}>
                <Text style={styles.modalBtnLabel}>
                  Back
                </Text>
              </TouchableOpacity>

              <TouchableOpacity style={[styles.modalBtn, { backgroundColor: '#3498db' }]} onPress={handleRetryQuiz}>
                <Text style={styles.modalBtnLabel}>
                  Retry Quiz
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      {/* Exit Modal */}
      <Modal animationType='slide' visible={exit} transparent={true}>
        <View style={[styles.modalContainer, { backgroundColor: 'rgba(52, 52, 52, 0.8)', }]}>
          <View style={styles.insideModal}>
            <Image source={brokenTrophy} style={styles.modalImage} />

            <Text style={styles.confirmQuestion}>Sure you want to leave?</Text>

            <View style={styles.btnZone}>
              <TouchableOpacity style={[styles.modalBtn, { backgroundColor: '#e60000' }]} onPress={handleBack}>
                <Text style={styles.modalBtnLabel}>
                  Leave
                </Text>
              </TouchableOpacity>

              <TouchableOpacity style={[styles.modalBtn, { backgroundColor: '#3498db' }]} onPress={handleTurnOffModal}>
                <Text style={styles.modalBtnLabel}>
                  Stay
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  )
}

export default QuizDetails
