import React, { useEffect, useState, useCallback, memo, PureComponent } from 'react'
import { View, Text, Image, SafeAreaView, FlatList, RefreshControl } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { getMatches } from '../../redux/actions'
import moment from 'moment'
import styles from './styles'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MC from '../../assets/manchester-city.png'
import MU from '../../assets/manchester-united.png'
import leftArrow from '../../assets/left-chevron.png'
import rightArrow from '../../assets/right-chevron.png'
import premierLeagueLogo from '../../assets/premierleague.png'
import { debounce } from 'lodash'
import MatchTag from '../../components/MatchTag'
import footballPlayer from '../../assets/footballPlayer.png'
import CalendarStrip from 'react-native-calendar-strip';

class MatchCard extends PureComponent<{ item: any }> {
  render(): React.ReactNode {
    return (
      <View style={styles.matchContainer}>
        <View style={styles.leagueIn4}>
          <Image source={{ uri: this.props.item[0].league.logo }} style={styles.logo} />

          <View style={styles.leagueNameAndRound}>
            <Text style={styles.leagueName}>{this.props.item[0].league.name}</Text>

            <Text style={styles.leagueRound}>{this.props.item[0].league.round}</Text>
          </View>
        </View>

        {this.props.item.map((matchItem: any, matchIndex: any) => {
          return (
            <MatchTag fixture={matchItem} key={matchIndex} />
          )
        })}
        {/* <MatchTag fixture={this.props.item} /> */}
      </View>
    )
  }
}

const matchData = [
  {
    fixture: {
      id: 1035174,
      referee: "Felix Zwayer, Germany",
      timezone: "Asia/Ho_Chi_Minh",
      date: "2023-06-19T01:45:00+07:00",
      timestamp: 1687113900,
      periods: {
        first: 1687113900,
        second: 1687117500
      },
      venue: {
        id: 1128,
        name: "Stadion Feijenoord",
        city: "Rotterdam",
      },
      status: {
        long: "Match Finished",
        short: "PEN",
        elapsed: 120,
      }
    },
    league: {
      id: 5,
      name: "UEFA Nations League",
      country: "World",
      logo: "https://media-2.api-sports.io/football/leagues/5.png",
      flag: null,
      season: 2022,
      round: "Final",
    },
    teams: {
      home: {
        id: 3,
        name: "Croatia",
        logo: "https://media-3.api-sports.io/football/teams/3.png",
        winner: false
      },
      away: {
        id: 9,
        name: "Spain",
        logo: "https://media-2.api-sports.io/football/teams/9.png",
        winner: true
      }
    },
    goals: {
      home: 0,
      away: 0,
    },
    score: {
      halftime: {
        home: 0,
        away: 0,
      },
      fulltime: {
        home: 0,
        away: 0
      },
      extratime: {
        home: 0,
        away: 0
      },
      penalty: {
        home: 4,
        away: 5
      }
    }
  }
]

const Matches = () => {
  let { match } = useSelector((state: any) => state.feedReducer)
  const dispatch: Function = useDispatch();
  const [isLoading, setIsLoading] = useState(false);


  let today = moment().format('YYYY-MM-DD')

  const [date, setDate] = useState(today);


  // console.log(new Date(moment().toString()).toUTCString().slice(0, 22))

  useEffect(() => {
    dispatch(getMatches(date, setIsLoading));
  }, [dispatch]);

  const matchByLeague = match.reduce((group: any, match: any) => {
    const { name } = match.league;
    group[name] = group[name] ?? [];
    group[name].push(match);
    return group;
  }, {});

  const handleChooseDate = useCallback(
    debounce((date: string) => {
      dispatch(getMatches(date, setIsLoading));
    }, 1000), [dispatch]
  )

  const renderItem = ({ item, index }: any) => (<MatchCard item={item} key={index} />)


  return (
    <SafeAreaView style={styles.matchesContainer}>
      <CalendarStrip
        scrollable
        style={styles.calendarStrip}
        calendarColor={'#08812f'}
        calendarHeaderStyle={{ color: 'white', marginBottom: 10 }}
        dateNumberStyle={{ color: 'white' }}
        dateNameStyle={{ color: 'white', }}
        iconContainer={{ flex: 0.1 }}
        selectedDate={moment()}
        onDateSelected={(params) => {
          let timestamp = params.format('YYYY-MM-DD')

          handleChooseDate(timestamp)
          setDate(timestamp)
        }}

        iconLeft={leftArrow}
        iconRight={rightArrow}
        daySelectionAnimation={{ type: 'border', duration: 200, borderWidth: 0.5, borderHighlightColor: 'white' }}
      minDate={moment().subtract(6, 'days')}
      maxDate={moment().add(10, 'days')}/>

      <View style={{ paddingBottom: 20 }} >
        {(Object.keys(matchByLeague).length === 0) ? <View style={styles.noMatches}>
          <Image source={footballPlayer} style={styles.footballPlayer}/>
          <Text style={styles.noMatchesNotification}>
            No matches on this day
          </Text>
        </View>
          :
        <FlatList showsVerticalScrollIndicator={false}
          refreshControl={<RefreshControl refreshing={isLoading} />}
          data={Object.values(matchByLeague)}
          // data={matchData}
          renderItem={renderItem}
          removeClippedSubviews={true}
          initialNumToRender={5}
          maxToRenderPerBatch={1}
          updateCellsBatchingPeriod={100}
          windowSize={7}>
        </FlatList>
        } 


      </View>
    </SafeAreaView>
  )
}

export default Matches
