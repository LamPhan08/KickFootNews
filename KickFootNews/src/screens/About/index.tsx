import React from 'react'
import { View, Text, Image, ScrollView } from 'react-native'
import logo from '../../assets/logoFootball.png'
import styles from './styles'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const About = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.logoAndTitleContainer}>
        <Image source={logo} style={styles.logo} />

        <Text style={styles.title}>This app is designed and developed by Nguyen Cong Doan, Phan Nhat Lam and Nguyen Tan Huy</Text>
      </View>

      <View style={styles.developerIn4}>
        <Text style={styles.name}>Nguyen Cong Doan</Text>

        <View style={styles.in4Container}>
          <View style={styles.in4Details}>
            <MaterialCommunityIcons name='school-outline' size={25} color='#000' />
            <Text style={styles.details}>University of Information Technology</Text>
          </View>
          <View style={styles.in4Details}>
            <MaterialCommunityIcons name='identifier' size={25} color='#000' />
            <Text style={styles.details}>20520447</Text>
          </View>

          <View style={styles.in4Details}>
            <MaterialCommunityIcons name='email-outline' size={25} color='#000' />
            <Text style={styles.details}>20520447@gm.uit.edu.vn</Text>
          </View>
        </View>
        <Text style={styles.name}>Phan Nhat Lam</Text>

        <View style={styles.in4Container}>
          <View style={styles.in4Details}>
            <MaterialCommunityIcons name='school-outline' size={25} color='#000' />
            <Text style={styles.details}>University of Information Technology</Text>
          </View>
          <View style={styles.in4Details}>
            <MaterialCommunityIcons name='identifier' size={25} color='#000' />
            <Text style={styles.details}>20520608</Text>
          </View>

          <View style={styles.in4Details}>
            <MaterialCommunityIcons name='email-outline' size={25} color='#000' />
            <Text style={styles.details}>20520608@gm.uit.edu.vn</Text>
          </View>
        </View>
        <Text style={styles.name}>Nguyen Tan Huy</Text>

        <View style={styles.in4Container}>
          <View style={styles.in4Details}>
            <MaterialCommunityIcons name='school-outline' size={25} color='#000' />
            <Text style={styles.details}>University of Information Technology</Text>
          </View>
          <View style={styles.in4Details}>
            <MaterialCommunityIcons name='identifier' size={25} color='#000' />
            <Text style={styles.details}>20520204</Text>
          </View>

          <View style={styles.in4Details}>
            <MaterialCommunityIcons name='email-outline' size={25} color='#000' />
            <Text style={styles.details}>20520204@gm.uit.edu.vn</Text>
          </View>
        </View>
      </View>

    </ScrollView>
  )
}

export default About
