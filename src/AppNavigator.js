import {View, Text} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Splash from './Screeen/Splash';
import Login from './Screeen/Login';
import Signup from './Screeen/Signup';
import Main from './Screeen/Main';
import AddNewBlog from './Screeen/AddNewBlog';
import Profile from './Screeen/Profile';

const Stack = createStackNavigator();
const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          component={Splash}
          name="Splash"
          options={{headerShown: false}}
        />

        <Stack.Screen
          component={Login}
          name="Login"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={Signup}
          name="Signup"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={Main}
          name="Main"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={AddNewBlog}
          name="AddNewBlog"
          options={{headerShown: true}}
        />
        <Stack.Screen
          component={Profile}
          name="Profile"
          options={{headerShown: true}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
