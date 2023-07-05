import React, {useEffect} from 'react'
import {View, Text, SafeAreaView, ScrollView} from 'react-native'
import TopTabNavigator from '../../navigation/toptabnavigator'


interface Route {
  params: {
    fixture: {
      fixture: {
        id: number,
        status: {
          long: string
        }
      },
    
      league: {
        name: string,
        logo: string,
        round: string
      },
    
      teams: {
        home: {
          logo: any,
          name: string
        },
    
        away: {
          logo: any,
          name: string
        }
      },
    
      goals: {
        home: number,
        away: number
      }
    }
    }
}

const MatchDetails: React.FC<{route: Route}> = ({route}) => {
  const {fixture} = route.params


  return (
      <TopTabNavigator fixture={fixture}/>
      // <TopTabNavigator/>
  )
}

export default MatchDetails
