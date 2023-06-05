import React, { useEffect, useState } from 'react'
import { View, Text, ScrollView, Image } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { getPremierMatch } from '../../redux/actions'
import CalendarStrip from 'react-native-calendar-strip'
import moment from 'moment'
import styles from './styles'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MC from '../../assets/manchester-city.png'
import MU from '../../assets/manchester-united.png'

const Matches = () => {
  // const { match } = useSelector((state: any) => state.feedReducer)
  // const dispatch: Function = useDispatch();

  const [date, setDate] = useState(moment().toISOString().slice(0, 10))

  // useEffect(() => {
  //   dispatch(getPremierMatch(date));
  // }, [dispatch]);


  return (
    <ScrollView>
      <CalendarStrip
        scrollable
        style={{ paddingTop: 5, paddingBottom: 15 }}
        calendarColor={'#08812f'}
        calendarHeaderStyle={{ color: 'white', marginBottom: 10 }}
        dateNumberStyle={{ color: 'white', }}
        dateNameStyle={{ color: 'white', }}
        iconContainer={{ flex: 0.1 }}
        selectedDate={moment()}
        onDateSelected={(params) => {
          setDate(params.toISOString().slice(0, 10))
        }}
        daySelectionAnimation={{ type: 'border', duration: 200, borderWidth: 0.5, borderHighlightColor: 'white' }}
      // minDate={moment().subtract(6, 'days')}
      // maxDate={moment().add(10, 'days')}
      />
      {date === moment().toISOString().slice(0, 10) ? <Text style={styles}>Today Matches</Text> : <Text>{date}</Text>}

      <View>
        <View style={{ flexDirection: 'row' }}>
          <Text>Premier League</Text>

          <Ionicons name='chevron-forward' size={18} color='#000' />
        </View>

        <View style={{ flexDirection: 'row' }}>
          <View>
            <View style={{ flexDirection: 'row' }}>
              <Image source={MC} style={{ width: 50, height: 50 }}></Image>
              <Text>Manchester City</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <Image source={MU} style={{ width: 50, height: 50 }}></Image>
              <Text>Manchester United</Text>
            </View>
          </View>

          <View style={{flexDirection: 'row'}}>
            <View>
              <Text>1</Text>
              <Text>0</Text>
            </View>

            <Text>Finished</Text>
          </View>
        </View>
      </View>


    </ScrollView>
  )
}

export default Matches
