import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Profile from '../screens/Profile';
import { Feed } from '../screens/Feed';
import Search from '../screens/Search';
import Iconicons from 'react-native-vector-icons/Ionicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Material from 'react-native-vector-icons/MaterialCommunityIcons'
import Matches from '../screens/Matches';

const Tabs = () => {
    const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator screenOptions={{
        tabBarActiveTintColor: "#65A844",
        headerShown: false,
        tabBarShowLabel: false,
    }} initialRouteName='Feed'>
        <Tab.Screen name='Feed' component={Feed} options={{
            tabBarIcon: ({focused}) => <Iconicons name='home-sharp' size={22} color={focused ? "#65A844" : "gray"}/>
        }}/>
        <Tab.Screen name='Matches' component={Matches} options={{
            tabBarIcon: ({focused}) => <Material name='soccer-field' size={29} color={focused ? "#65A844" : "gray"}/>
        }}/>
        <Tab.Screen name='Search' component={Search} options={{
            tabBarIcon: ({focused}) => <FontAwesome name='search' size={22} color={focused ? "#65A844" : "gray"}/>
        }}/>
        <Tab.Screen name='Profile' component={Profile} options={{
            tabBarIcon: ({focused}) => <Iconicons name='person-sharp' size={22} color={focused ? "#65A844" : "gray"}/>
        }}/>
    </Tab.Navigator>
  )
}

export default Tabs
