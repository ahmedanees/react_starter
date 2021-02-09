import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SplashScreen from '../screens/SplashScreen';
import LoginScreen from '../screens/LoginScreen';
import RegistrationScreen from '../screens/RegistrationScreen';
import {enableScreens} from 'react-native-screens';

import Intro from '../screens/Intro';
import BottomTab from './BottomTab';
import {reducerState} from '../utils/types';

const ApplicationStack  = createStackNavigator();
const AppStack          = createStackNavigator();
const AuthStack         = createStackNavigator();

const MaterialBottomTab = createBottomTabNavigator();

const DrawerStack       = createDrawerNavigator();
enableScreens();

const MaterialBottomTabScreens = () => {
  return (
    <MaterialBottomTab.Navigator
      tabBar={props => <BottomTab />}
      initialRouteName="Home"
      activeBackgroundColor="#f0edf6"
      inactiveBackgroundColor="red"
      barStyle={{backgroundColor: '#694fad'}}>
      <MaterialBottomTab.Screen name="Home" component={Intro} />
    </MaterialBottomTab.Navigator>
  );
};

const MainStackScreens = () => {
  return (
    <AppStack.Navigator initialRouteName="Home" headerMode="none">
      <AppStack.Screen name="Home" component={Intro} />
    </AppStack.Navigator>
  );
};

const DrawerStackScreens = () => {
  return (
    <DrawerStack.Navigator initialRouteName="Home">
      <DrawerStack.Screen name="Home" component={MainStackScreens}
       options={{
        title: 'Home', //Set Header Title
        headerLeft: () => (
          <MainStackScreens />
        ),
        headerRight: () => (
          <MainStackScreens  />
        ),
        headerStyle: {
          backgroundColor: '#307ecc', //Set Header color
        },
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        },
      }}/>
      <DrawerStack.Screen name="Profile" component={MainStackScreens} />
    </DrawerStack.Navigator>
  );
};

const AuthStackScreens = () => {
  return (
    <AuthStack.Navigator initialRouteName="LoginScreen" headerMode="none">
      <ApplicationStack.Screen name="login" component={LoginScreen} />
      
      <AuthStack.Screen name="signup" component={RegistrationScreen} />
      <AuthStack.Screen name="Intro" component={Intro} />
    </AuthStack.Navigator>
  );
};

const NavigationStack = () => {
  const isLoggedIn = useSelector(
    (state: reducerState) => state.auth.isLoggedIn,
  );
  return (
    <ApplicationStack.Navigator headerMode="none">
      {isLoggedIn ? (
        <ApplicationStack.Screen name="App" component={DrawerStackScreens} />
      ) : (
        <ApplicationStack.Screen name="Auth" component={AuthStackScreens} />
      )}
    </ApplicationStack.Navigator>
  );
};

export default NavigationStack;
