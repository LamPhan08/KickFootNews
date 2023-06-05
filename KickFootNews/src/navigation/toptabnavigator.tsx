import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { View, Text } from 'react-native'
import UEFA from '../screens/UEFA'
import PremierLeague from '../screens/Matches'

const Tab = createMaterialTopTabNavigator();

const TopTabNavigator = () => {
    return (
        <Tab.Navigator initialRouteName='Premier League'
                screenOptions={{
                    tabBarLabelStyle: { fontWeight: 'bold', padding: 5, },
                    tabBarGap: 5,
                    tabBarIndicatorStyle: {backgroundColor: '#65a844'},
                    tabBarInactiveTintColor: 'gray',
                    tabBarActiveTintColor: '#65a844'
                    
                }}
                
                >
                <Tab.Screen name='Premier League' component={PremierLeague} options={{
                    
                }}/>
                <Tab.Screen name='UEFA' component={UEFA} />
            </Tab.Navigator>
        
    )
}

export default TopTabNavigator
