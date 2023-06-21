import React, { useEffect, useState } from 'react'
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, Image } from 'react-native'
import styles from './styles'
import { useDispatch, useSelector } from 'react-redux';
import { getLineups } from '../../redux/actions';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { lineupData } from './lineupData';
import soccerUniform from '../../assets/football-uniform.png'

const MatchLineup = ({ route }: any) => {
  const fixtureData = route.params
  // console.log(fixtureData)

  const { lineup } = useSelector((state: any) => state.feedReducer)
  const dispatch: Function = useDispatch()

  useEffect(() => {
    dispatch(getLineups(fixtureData.fixture.id));
  }, [dispatch])

  // console.log(fixtureData.fixture.id)
  // console.log(lineup.length)
  let initialStatus = fixtureData.teams.home.name
  // console.log(fixtureData.teams.home.name)
  // console.log(initialStatus)

  // console.log(lineup[0].team.name)
  // console.log(lineup[1].team.name)
  // useEffect(() => {
  //   if (lineup.length !== 0) {
  //     initialStatus = lineup[0].team.name
  //   }
  // })

  const [status, setStatus] = useState(initialStatus)
  const [lineupNumber, setLineupNumber] = useState(0);

  const setStatusFilter = (status: any) => {
    setStatus(status)
    if (status === lineup[0].team.name) {
      setLineupNumber(0)
    }
    else {
      setLineupNumber(1)
    }
  }


  return (
    <SafeAreaView>
      {lineup.length === 0
        ? <View style={styles.notAvailableContainer}>
          <Image source={soccerUniform} style={styles.uniformImage}/>
          <Text style={styles.notAvailable}>The line-ups aren't available yet.</Text>
          <Text style={styles.notAvailable}>Check back later!</Text>
        </View>
        : <ScrollView showsVerticalScrollIndicator={false} style={{ paddingTop: 15 }}>
          <View style={styles.teamTab}>
            <TouchableOpacity style={[styles.btnTab, status === lineup[0].team.name && styles.btnTabActive]}
              onPress={() => setStatusFilter(lineup[0].team.name)}>
              <Text style={[styles.labelTab, status === lineup[0].team.name && styles.labelTabActive]} numberOfLines={1}>{lineup[0].team.name}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.btnTab, status === lineup[1].team.name && styles.btnTabActive]}
              onPress={() => setStatusFilter(lineup[1].team.name)}>
              <Text style={[styles.labelTab, status === lineup[1].team.name && styles.labelTabActive]} numberOfLines={1}>{lineup[1].team.name}</Text>
            </TouchableOpacity>
          </View>

          {lineup[lineupNumber].formation === null
            ? null
            : <View style={styles.formationContainer}>
              <View style={styles.lineupLabelContainer}>
                <AntDesign name='check' color='green' size={22} />

                <Text style={styles.lineupIn4}>Confirmed Line-up</Text>
              </View>

              <Text style={styles.lineupIn4}>{lineup[lineupNumber].formation}</Text>
            </View>
          }

          <View style={styles.startingXIAndBenchContainer}>
            <View style={styles.labelContainer}>
              <Text style={styles.label}>
                STARTING XI
              </Text>
            </View>

            {lineup[lineupNumber].startXI.map((item: any, index: any) => {
              return (
                <View style={styles.playerContainer} key={index}>
                  <View style={styles.playerNameContainer}>
                    <Ionicons name='md-person-circle-sharp' size={30} color='#000' />

                    <Text style={styles.playerName}>{item.player.name}</Text>
                  </View>

                  <Text style={styles.playerNumber}>{item.player.number}</Text>
                </View>
              )
            })}
          </View>

          <View style={[styles.startingXIAndBenchContainer, { marginBottom: 30 }]}>
            <View style={styles.labelContainer}>
              <Text style={styles.label}>
                BENCH
              </Text>
            </View>

            {lineup[lineupNumber].substitutes.map((item: any, index: any) => {
              return (
                <View style={[styles.playerContainer]} key={index}>
                  <View style={styles.playerNameContainer}>
                    <Ionicons name='md-person-circle-sharp' size={30} color='#000' />

                    <Text style={styles.playerName}>{item.player.name}</Text>
                  </View>

                  <Text style={styles.playerNumber}>{item.player.number}</Text>
                </View>
              )
            })}
          </View>

        </ScrollView>}
    </SafeAreaView>
  )
}

export default MatchLineup
