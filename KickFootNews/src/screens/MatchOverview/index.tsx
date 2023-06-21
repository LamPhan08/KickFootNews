import React, { useEffect } from 'react'
import { View, Text, SafeAreaView, ScrollView, Image } from 'react-native'
import styles from './styles'
import missPen from '../../assets/missedPenalty.png'
import normalGoal from '../../assets/normalGoal.png'
import ownGoal from '../../assets/ownGoal.png'
import penalty from '../../assets/penalty.png'
import yellowCard from '../../assets/yellowCard.png'
import redCard from '../../assets/redCard.png'
import secondYellowCard from '../../assets/secondYellowCard.png'
import substitution from '../../assets/substitution.png'
import varIcon from '../../assets/var.png'
import { useDispatch, useSelector } from 'react-redux';
import { getEvents } from '../../redux/actions';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { eventData } from './eventData'



const MatchOverview = ({ route }: any) => {
  const fixtureData = route.params
  //  console.log(route.params)

  const { event } = useSelector((state: any) => state.feedReducer)
  const dispatch: Function = useDispatch()


  useEffect(() => {
    dispatch(getEvents(fixtureData.fixture.id));
  }, [dispatch])


  let kickoffTime = new Date(fixtureData.fixture.date).toUTCString().slice(0, 22)


  const switchEventCases = (item: any, index: any) => {
    // console.log(item) 
    if (item.team.name === fixtureData.teams.home.name) {
      switch (item.type) {
        case 'Goal': {
          switch (item.detail) {
            case 'Normal Goal': {
              return (
                <View style={styles.homeEventItemContainer} key={index}>
                  <Text style={styles.elapsedTime}>{item.time.extra === null ? (item.time.elapsed + `'`) : (item.time.elapsed + ' + ' + item.time.extra + `'`)}</Text>
                  <Image source={normalGoal} style={styles.eventIcon} />
                  <Text style={styles.playerName}>{item.player.name}</Text>
                </View>
              )
            }

            case 'Own Goal': {
              return (
                <View style={styles.homeEventItemContainer} key={index}>
                  <Text style={styles.elapsedTime}>{item.time.extra === null ? (item.time.elapsed + `'`) : (item.time.elapsed + ' + ' + item.time.extra + `'`)}</Text>
                  <Image source={ownGoal} style={styles.eventIcon} />
                  <Text style={styles.playerName}>{item.player.name}</Text>
                </View>
              )
            }

            case 'Penalty': {
              return (
                <View style={styles.homeEventItemContainer} key={index}>
                  <Text style={styles.elapsedTime}>{item.time.extra === null ? (item.time.elapsed + `'`) : (item.time.elapsed + ' + ' + item.time.extra + `'`)}</Text>
                  <Image source={penalty} style={styles.eventIcon} />
                  <View style={styles.leftMoreIn4Zone}>
                    <Text style={styles.playerName}>{item.player.name}</Text>
                    <Text style={styles.moreIn4}>Penalty</Text>
                  </View>
                </View>
              )
            }

            case 'Missed Penalty': {
              return (
                <View style={styles.homeEventItemContainer} key={index}>
                  <Text style={styles.elapsedTime}>{item.time.extra === null ? (item.time.elapsed + `'`) : (item.time.elapsed + ' + ' + item.time.extra + `'`)}</Text>
                  <Image source={missPen} style={styles.eventIcon} />
                  <View style={styles.leftMoreIn4Zone}>
                    <Text style={styles.playerName}>{item.player.name}</Text>
                    <Text style={styles.moreIn4}>Missed Penalty</Text>
                  </View>
                </View>
              )
            }
          }
        }

        case 'Card': {
          switch (item.detail) {
            case 'Yellow Card': {
              return (
                <View style={styles.homeEventItemContainer} key={index}>
                  <Text style={styles.elapsedTime}>{item.time.extra === null ? (item.time.elapsed + `'`) : (item.time.elapsed + ' + ' + item.time.extra + `'`)}</Text>
                  <Image source={yellowCard} style={styles.eventIcon} />
                  <Text style={styles.playerName}>{item.player.name}</Text>
                </View>
              )
            }

            case 'Second Yellow card': {
              return (
                <View style={styles.homeEventItemContainer} key={index}>
                  <Text style={styles.elapsedTime}>{item.time.extra === null ? (item.time.elapsed + `'`) : (item.time.elapsed + ' + ' + item.time.extra + `'`)}</Text>
                  <Image source={secondYellowCard} style={styles.eventIcon} />
                  <Text style={styles.playerName}>{item.player.name}</Text>
                </View>
              )
            }

            case 'Red card': {
              return (
                <View style={styles.homeEventItemContainer} key={index}>
                  <Text style={styles.elapsedTime}>{item.time.extra === null ? (item.time.elapsed + `'`) : (item.time.elapsed + ' + ' + item.time.extra + `'`)}</Text>
                  <Image source={redCard} style={styles.eventIcon} />
                  <Text style={styles.playerName}>{item.player.name}</Text>
                </View>
              )
            }
          }
        }

        case 'subst': {
          return (
            <View style={styles.homeEventItemContainer} key={index}>
              <Text style={styles.elapsedTime}>{item.time.extra === null ? (item.time.elapsed + `'`) : (item.time.elapsed + ' + ' + item.time.extra + `'`)}</Text>
              <Image source={substitution} style={styles.eventIcon} />
              <View style={styles.leftMoreIn4Zone}>
                <Text style={styles.playerName}>{item.assist.name}</Text>
                <Text style={styles.moreIn4}>{item.player.name}</Text>
              </View>
            </View>
          )
        }

        case 'Var': {
          return (
            <View style={styles.homeEventItemContainer} key={index}>
              <Text style={styles.elapsedTime}>{item.time.extra === null ? (item.time.elapsed + `'`) : (item.time.elapsed + ' + ' + item.time.extra + `'`)}</Text>
              <Image source={varIcon} style={styles.eventIcon} />
              <View style={styles.leftMoreIn4Zone}>
                <Text style={styles.playerName}>{item.player.name}</Text>
                <Text style={styles.moreIn4}>{item.detail}</Text>
              </View>
            </View>
          )
        }
      }
    }
    else {
      switch (item.type) {
        case 'Goal': {
          switch (item.detail) {
            case 'Normal Goal': {
              return (
                <View style={styles.awayEventItemContainer} key={index}>
                  <Text style={styles.playerName}>{item.player.name}</Text>
                  <Image source={normalGoal} style={styles.eventIcon} />
                  <Text style={styles.elapsedTime}>{item.time.extra === null ? (item.time.elapsed + `'`) : (item.time.elapsed + ' + ' + item.time.extra + `'`)}</Text>
                </View>
              )
            }

            case 'Own Goal': {
              return (
                <View style={styles.awayEventItemContainer} key={index}>
                  <Text style={styles.playerName}>{item.player.name}</Text>
                  <Image source={ownGoal} style={styles.eventIcon} />
                  <Text style={styles.elapsedTime}>{item.time.extra === null ? (item.time.elapsed + `'`) : (item.time.elapsed + ' + ' + item.time.extra + `'`)}</Text>
                </View>
              )
            }

            case 'Penalty': {
              return (
                <View style={styles.awayEventItemContainer} key={index}>
                  <View style={styles.rightMoreIn4Zone}>
                    <Text style={styles.playerName}>{item.player.name}</Text>
                    <Text style={styles.moreIn4}>Penalty</Text>
                  </View>

                  <Image source={penalty} style={styles.eventIcon} />

                  <Text style={styles.elapsedTime}>{item.time.extra === null ? (item.time.elapsed + `'`) : (item.time.elapsed + ' + ' + item.time.extra + `'`)}</Text>
                </View>
              )
            }

            case 'Missed Penalty': {
              return (
                <View style={styles.awayEventItemContainer} key={index}>
                  <View style={styles.rightMoreIn4Zone}>
                    <Text style={styles.playerName}>{item.player.name}</Text>
                    <Text style={styles.moreIn4}>Missed Penalty</Text>
                  </View>

                  <Image source={missPen} style={styles.eventIcon} />

                  <Text style={styles.elapsedTime}>{item.time.extra === null ? (item.time.elapsed + `'`) : (item.time.elapsed + ' + ' + item.time.extra + `'`)}</Text>
                </View>
              )
            }
          }
        }

        case 'Card': {
          switch (item.detail) {
            case 'Yellow Card': {
              return (
                <View style={styles.awayEventItemContainer} key={index}>
                  <Text style={styles.playerName}>{item.player.name}</Text>
                  <Image source={yellowCard} style={styles.eventIcon} />
                  <Text style={styles.elapsedTime}>{item.time.extra === null ? (item.time.elapsed + `'`) : (item.time.elapsed + ' + ' + item.time.extra + `'`)}</Text>
                </View>
              )
            }

            case 'Second Yellow card': {
              return (
                <View style={styles.awayEventItemContainer} key={index}>
                  <Text style={styles.playerName}>{item.player.name}</Text>
                  <Image source={secondYellowCard} style={styles.eventIcon} />
                  <Text style={styles.elapsedTime}>{item.time.extra === null ? (item.time.elapsed + `'`) : (item.time.elapsed + ' + ' + item.time.extra + `'`)}</Text>
                </View>
              )
            }

            case 'Red card': {
              return (
                <View style={styles.awayEventItemContainer} key={index}>
                  <Text style={styles.playerName}>{item.player.name}</Text>
                  <Image source={redCard} style={styles.eventIcon} />
                  <Text style={styles.elapsedTime}>{item.time.extra === null ? (item.time.elapsed + `'`) : (item.time.elapsed + ' + ' + item.time.extra + `'`)}</Text>
                </View>
              )
            }
          }
        }

        case 'subst': {
          return (
            <View style={styles.awayEventItemContainer} key={index}>
              <View style={styles.rightMoreIn4Zone}>
                <Text style={styles.playerName}>{item.player.name}</Text>
                <Text style={styles.moreIn4}>{item.assist.name}</Text>
              </View>

              <Image source={substitution} style={styles.eventIcon} />

              <Text style={styles.elapsedTime}>{item.time.extra === null ? (item.time.elapsed + `'`) : (item.time.elapsed + ' + ' + item.time.extra + `'`)}</Text>
            </View>
          )
        }

        case 'Var': {
          return (
            <View style={styles.awayEventItemContainer} key={index}>
              <View style={styles.rightMoreIn4Zone}>
                <Text style={styles.playerName}>{item.player.name}</Text>
                <Text style={styles.moreIn4}>{item.detail}</Text>
              </View>

              <Image source={varIcon} style={styles.eventIcon} />

              <Text style={styles.elapsedTime}>{item.time.extra === null ? (item.time.elapsed + `'`) : (item.time.elapsed + ' + ' + item.time.extra + `'`)}</Text>
            </View>
          )
        }
      }
    }
  }

  return (
    <SafeAreaView>
      <ScrollView style={{ paddingTop: 10 }} showsVerticalScrollIndicator={false}>
        <View style={styles.scoreContainer}>
          <View style={styles.team}>
            <Image source={{ uri: fixtureData.teams.home.logo }} style={styles.teamLogo} />
            <Text style={styles.teamName}>{fixtureData.teams.home.name}</Text>
          </View>

          <View style={styles.scoreAndStatusZone}>
            {(fixtureData.fixture.status.short === 'FT' || fixtureData.fixture.status.short === 'PEN')
              ? <Text style={styles.score}>{fixtureData.goals.home} : {fixtureData.goals.away}</Text>
              : null}

            <Text style={styles.status}>
              {fixtureData.fixture.status.short === 'FT'
                ? 'Full Time'
                : (fixtureData.fixture.status.short === 'NS'
                  ? fixtureData.fixture.date.slice(11, 16)
                  : (fixtureData.fixture.status.short === 'PEN'
                    ? ('Pens: ' + fixtureData.score.penalty.home + '-' + fixtureData.score.penalty.away)
                    : fixtureData.fixture.status.long))}
            </Text>
          </View>

          <View style={styles.team}>
            <Image source={{ uri: fixtureData.teams.away.logo }} style={styles.teamLogo} />
            <Text style={styles.teamName}>{fixtureData.teams.away.name}</Text>
          </View>
        </View>

        {event.length === 0
          ? null
          : <View style={styles.eventContainer}>
            <View style={styles.labelContainer}>
              <Text style={styles.label}>MATCH EVENTS</Text>
            </View>

            {event.map((item: any, index: any) => switchEventCases(item, index))}

          </View>}

        <View style={styles.matchIn4}>
          <View style={styles.labelContainer}>
            <Text style={styles.label}>MATCH INFORMATION</Text>
          </View>

          <View style={styles.detailsIn4Container}>
            <View style={styles.detailsItem}>
              <Image source={{ uri: fixtureData.league.logo }} style={styles.leagueLogo} />

              <View style={styles.in4LabelContainer}>
                <Text style={styles.in4Label}>Competition</Text>

                <Text style={styles.displayedIn4}>{fixtureData.league.name}</Text>
              </View>
            </View>

            <View style={styles.detailsItem}>
              <Ionicons name='time-outline' size={30} color='#000' />

              <View style={styles.in4LabelContainer}>
                <Text style={styles.in4Label}>Kick-off</Text>

                <Text style={styles.displayedIn4}>{kickoffTime}</Text>
              </View>
            </View>

            {fixtureData.fixture.venue.name === null
              ? null
              : <View style={styles.detailsItem}>
                <Ionicons name='location-outline' size={30} color='#000' />

                <View style={styles.in4LabelContainer}>
                  <Text style={styles.in4Label}>Stadium</Text>

                  <Text style={styles.displayedIn4}>{fixtureData.fixture.venue.name === '' ? fixtureData.fixture.venue.city : fixtureData.fixture.venue.name}</Text>
                </View>
              </View>}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default MatchOverview
