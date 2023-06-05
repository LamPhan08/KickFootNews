import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Profile from '../screens/Profile';
import { Feed } from '../screens/Feed';
import Search from '../screens/Search';
import Iconicons from 'react-native-vector-icons/Ionicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Material from 'react-native-vector-icons/MaterialCommunityIcons'
import TopTabNavigator from './toptabnavigator';
import { Text } from 'react-native';
import Matches from '../screens/Matches';

const Tabs = () => {
    const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator screenOptions={{
        tabBarActiveTintColor: "#08812f",
        // headerShown: false,
        tabBarShowLabel: true,
    }} initialRouteName='Feed'>
        <Tab.Screen name='Feed' component={Feed} options={{
            tabBarIcon: ({focused}) => <Iconicons name='home-sharp' size={22} color={focused ? "#08812f" : "gray"}/>,
            headerShown: false,
            
        }}/>
        <Tab.Screen name='Matches' component={Matches} options={{
            tabBarIcon: ({focused}) => <Material name='soccer-field' size={29} color={focused ? "#08812f" : "gray"}/>,
            headerShown: false,
            headerLeft: () => (
                <Text style={{marginLeft: 20, fontSize: 20, color: '#000', fontWeight: 'bold'}}>Matches</Text>    
            ),
        }}/>
        <Tab.Screen name='Search' component={Search} options={{
            tabBarIcon: ({focused}) => <FontAwesome name='search' size={22} color={focused ? "#08812f" : "gray"}/>,
            headerShown: false,
        }}/>
        <Tab.Screen name='Profile' component={Profile} options={{
            tabBarIcon: ({focused}) => <Iconicons name='person-sharp' size={22} color={focused ? "#08812f" : "gray"}/>,
            headerShown: false,
        }}/>
    </Tab.Navigator>
  )
}

export default Tabs
