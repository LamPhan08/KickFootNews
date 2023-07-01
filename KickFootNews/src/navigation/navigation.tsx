import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import { NewsDetails } from '../screens/NewsDetails';
import Tabs from './tabs';
import Login from '../screens/Login';
import Splash from '../screens/Splash';
import Register from '../screens/Register';
import Bookmark from '../screens/Bookmark';
import About from '../screens/About';
import EditProfile from '../screens/EditProfile';
import QuizDetails from '../screens/QuizDetails';
import Quizzes from '../screens/Quizzes';
import MatchDetails from '../screens/MatchDetails';
import TrendingNewsList from '../screens/TrendingNewsList';

const Stack = createSharedElementStackNavigator();

export const RootNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home">
        <Stack.Screen name="Home" component={Tabs} options={{headerShown: false, title: ''}}/>
        <Stack.Screen
          name="NewsDetails"
          component={NewsDetails}
          options={{
            cardStyleInterpolator: ({ current: { progress } }) => {
              return {
                cardStyle: {
                  opacity: progress,
                },
              };
            },

            title: ''
          }}
        />
        <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
        <Stack.Screen name="Splash" component={Splash} options={{headerShown: false}} />
        <Stack.Screen name="Register" component={Register} options={{headerShown: false}}/>
        <Stack.Screen name="Bookmarks" component={Bookmark} options={{headerTitleAlign: 'center'}}/>
        <Stack.Screen name="Quizzes" component={Quizzes} options={{headerTitleAlign: 'center'}}/>
        <Stack.Screen name="MatchDetails" component={MatchDetails} options={{
          title: 'Match Details', 
          headerTitleAlign:'center'}}/>
        <Stack.Screen name="About" component={About} options={{headerTitleAlign: 'center', title:'About Us'}}/>
        <Stack.Screen name="EditProfile" component={EditProfile} options={{
          title: 'Edit Profile',
          headerTitleAlign: 'center'
        }}/>
        <Stack.Screen name="QuizDetails" component={QuizDetails} options={{
          headerShown: false
        }}/>
        <Stack.Screen name="TrendingNewsList" component={TrendingNewsList} options={{
          title: ''
        }}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
};