import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './src/components/login';
import Signup from './src/components/signup';
import Dashboard from './src/components/dashboard';
const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator
      initialRouteName="Signup"
      screenOptions={{
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#3740FE',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen 
        name="Signup" 
        component={Signup} 
        options={{ title: 'ThinkSpot Signup' }}
      />       
      <Stack.Screen 
        name="Login" 
        component={Login} 
        options={
          {title: 'ThinkSpot Login'},
          {headerLeft: null} 
        }
      />
      <Stack.Screen 
       name="Dashboard" 
       component={Dashboard} 
       options={
         { title: 'ThinkSpot- Dashboard' },
         {headerLeft: null} 
       }
      />
    </Stack.Navigator>
  );
}

export default class App extends Component {
	render() {
    return (
        <NavigationContainer>
          <MyStack />
        </NavigationContainer>
      
    );
  }
}

// import EmojiDict from './src/components/EmojiDict';
// import LotsOfGreetings from './src/components/LotsOfGreetings';
// import CountPlay from './src/components/CountPlay';
// import Login from './src/components/login';
// import NavigationPanel from './src/components/NavigationPanel';

// export default class App extends Component {
// 	// render() {
// 	// 	return <LotsOfGreetings />;
//   // }
//   render() {
//     //return <LotsOfGreetings />
//     return (
//       <NavigationPanel />
      
//     );
//   }
// }


