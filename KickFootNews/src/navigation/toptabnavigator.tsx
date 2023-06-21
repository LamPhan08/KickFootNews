import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { View, Text, Dimensions } from 'react-native'
import MatchOverview from '../screens/MatchOverview';
import MatchLineup from '../screens/MatchLineup';

const Tab = createMaterialTopTabNavigator();

const TopTabNavigator = ({fixture}: any) => {
    // console.log(event);
    return (
        <Tab.Navigator initialRouteName='MatchOverview'
                screenOptions={{
                    tabBarLabelStyle: { fontWeight: 'bold'},
                    tabBarGap: 5,
                    tabBarIndicatorStyle: {backgroundColor: '#65a844', width: 90, left: (Dimensions.get('window').width/2 - 90)/2},
                    tabBarInactiveTintColor: 'gray',
                    tabBarActiveTintColor: '#000',
                    tabBarStyle:{width: Dimensions.get('window').width, alignSelf: 'center', borderBottomLeftRadius: 10, borderBottomRightRadius: 10},
                    tabBarIndicatorContainerStyle: {justifyContent: 'center'},
                }}
                
                >   
                <Tab.Screen name='Overview' component={MatchOverview} initialParams={fixture}/>
                <Tab.Screen name='Line-up' component={MatchLineup} initialParams={fixture}/>
            </Tab.Navigator>
        
    )
}

export default TopTabNavigator
