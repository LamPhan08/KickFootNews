import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import { NewsDetails } from '../screens/NewsDetails';
import Tabs from './tabs';
import Login from '../screens/Login';
import Splash from '../screens/Splash';
import Register from '../screens/Register';
import Bookmark from '../screens/Bookmark';
import Quiz from '../screens/Quiz';
import About from '../screens/About';

const Stack = createSharedElementStackNavigator();

export const RootNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Tabs} />
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
          }}
        />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Bookmark" component={Bookmark} />
        <Stack.Screen name="Quiz" component={Quiz} />
        <Stack.Screen name="About" component={About} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};