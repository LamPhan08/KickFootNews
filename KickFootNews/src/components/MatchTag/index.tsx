import { useNavigation } from '@react-navigation/native'
import moment from 'moment'
import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import styles from './styles'

type Fixture = {
  fixture: {
    id: number,
    status: {
      long: string,
      short: string
    },
    date: string
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
  },

  score: {
    halftime: {
      home: number,
      away: number,
    },
    fulltime: {
      home: number,
      away: number
    },
    extratime: {
      home: number,
      away: number
    },
    penalty: {
      home: number,
      away: number
    }
  }
}

const MatchTag: React.FC<{ fixture: Fixture }> = ({ fixture }) => {
  const navigation: any = useNavigation()

  return (
    <View>
      <View style={[styles.line, { marginRight: 15}]} />

      <TouchableOpacity style={styles.matchIn4} onPress={() => navigation.navigate('MatchDetails', {fixture})}>
        <View style={styles.teamIn4}>
          <View style={styles.teamLogoAndName}>
            <Image source={{ uri: fixture.teams.home.logo }} style={styles.logo} />

            <Text style={styles.teamName} numberOfLines={1}>{fixture.teams.home.name}</Text>
          </View>

          <View style={styles.teamLogoAndName}>
            <Image source={{ uri: fixture.teams.away.logo }} style={styles.logo} />

            <Text style={styles.teamName} numberOfLines={1}>{fixture.teams.away.name}</Text>
          </View>
        </View>

        <View style={styles.matchGoalsAndStatus}>
          <View style={styles.matchGoals}>
            <Text style={styles.goal}>{fixture.goals.home}</Text>

            <Text style={styles.goal}>{fixture.goals.away}</Text>
          </View>

          {fixture.fixture.status.short === 'PEN'
            ? <View style={styles.matchGoals}>
              <Text style={[styles.goal, {color: 'grey'}]}>({fixture.score.penalty.home})</Text>

              <Text style={[styles.goal, {color: 'grey'}]}>({fixture.score.penalty.away})</Text>
            </View>
            : null}

          <View style={[styles.line, { height: '100%', width: 1 }]} />

          <View>
            <Text style={styles.status}>{fixture.fixture.status.short === 'NS' ? fixture.fixture.date.slice(11, 16) : fixture.fixture.status.short}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default MatchTag
