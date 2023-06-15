import React, { useEffect, useState, useCallback, memo, PureComponent } from 'react'
import { View, Text, Image, SafeAreaView, FlatList, RefreshControl } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { getMatches } from '../../redux/actions'
import CalendarStrip from 'react-native-calendar-strip'
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

class MatchCard extends PureComponent<{item: any}> {
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
              <MatchTag fixture={matchItem} key={matchIndex}/>
            )
          })}
  
        </View>
      )
  }
}

const Matches = () => {
  let { match } = useSelector((state: any) => state.feedReducer)
  const dispatch: Function = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  

  let today = moment().format('YYYY-MM-DD')

  const [date, setDate] = useState(today);


  // console.log(new Date(moment().toString()).toUTCString().slice(-12))

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

  const renderItem = ({item, index}: any) => (<MatchCard item={item} key={index}/>)

  
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
      // minDate={moment().subtract(6, 'days')}
      // maxDate={moment().add(10, 'days')}
      />
      <View style={{ paddingBottom: 20 }} >
        {(Object.keys(matchByLeague).length === 0) ? <View style={styles.noMatches}>
          <Text style={styles.noMatchesNotification}>
            No matches on this day
          </Text>
        </View>
          : 
            <FlatList showsVerticalScrollIndicator={false}
              refreshControl={<RefreshControl refreshing={isLoading} />}
              data={Object.values(matchByLeague)}
              renderItem={renderItem}
              removeClippedSubviews={true}
              initialNumToRender={5} 
              maxToRenderPerBatch={1} 
              updateCellsBatchingPeriod={100} 
              windowSize={7}> 
            </FlatList>}


      </View>
    </SafeAreaView>
  )
}

export default Matches
