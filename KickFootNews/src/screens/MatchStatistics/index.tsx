import React, { useEffect, useState } from 'react'
import { View, Text, Image, ScrollView, SafeAreaView, RefreshControl } from 'react-native'
import { getStatistics } from '../../redux/actions'
import { useDispatch, useSelector } from 'react-redux'
import footballPass from '../../assets/footballPass.png'
import styles from './styles'
import { statisticData } from './statisticData'

const MatchStatistics = ({ route }: any) => {
  // console.log(route.params)
  const fixtureData = route.params

  const { statistic } = useSelector((state: any) => state.feedReducer)
  const dispatch: Function = useDispatch()
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    dispatch(getStatistics(fixtureData.fixture.id, setIsLoading));
  }, [dispatch])

  // console.log(statistic)

  return (
    <SafeAreaView>
      {statistic.length === 0
        ? <View style={styles.notAvailableContainer}>
          <Image source={footballPass} style={styles.footballPassImage}></Image>
          <Text style={styles.notAvailable}>The statistics aren't available yet.</Text>
          <Text style={styles.notAvailable}>Check back later!</Text>
        </View>
        : <ScrollView showsVerticalScrollIndicator={false} refreshControl={<RefreshControl refreshing={isLoading} />}>
          <View style={styles.overallContainer}>
            <View style={styles.logoAndTeamStat}>
              <Image source={{ uri: statistic[0].team.logo }} style={styles.logo} />

              <Text style={styles.statValue}>TEAM STATS</Text>

              <Image source={{ uri: statistic[1].team.logo }} style={styles.logo} />
            </View>

            <View style={styles.valueAndTypeContainer}>
              <View style={styles.statValueContainer}>
                {statistic[0].statistics.map((item: any, index: any) => {
                  if (index === 16) {
                    return null
                  }
                  else {
                    return (<Text key={index} style={styles.statValue}>{item.value === null ? 0 : item.value}</Text>)
                  }
                })}
              </View>

              <View style={styles.typeContainer}>
                {statistic[0].statistics.map((item: any, index: any) => {
                  if (index === 16) {
                    return null
                  }
                  else {
                    return (<Text key={index} style={styles.statValue}>{item.type}</Text>)
                  }
                })}
              </View>

              <View style={styles.statValueContainer}>
                {statistic[1].statistics.map((item: any, index: any) => {
                  if (index === 16) {
                    return null
                  }
                  else {
                    return (<Text key={index} style={styles.statValue}>{item.value === null ? 0 : item.value}</Text>)
                  }
                })}
              </View>
            </View>
          </View>
        </ScrollView>}
    </SafeAreaView>
  )
}

export default MatchStatistics
