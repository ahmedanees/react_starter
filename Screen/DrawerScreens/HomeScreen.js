// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React and Component
import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import TopScreenButton from './TopScreenButton';
const HomeScreen = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <TopScreenButton/>
      <View style={{flex: 1, padding: 16}}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 20,
              textAlign: 'center',
              marginBottom: 16,
            }}>
            Hello
            {'\n\n'}
            This is the Home Screen
          </Text>
        </View>
        <Text
          style={{
            fontSize: 18,
            textAlign: 'center',
            color: 'grey',
          }}>
          home  screen{'\n'} content 
        </Text>
        <Text
          style={{
            fontSize: 16,
            textAlign: 'center',
            color: 'grey',
          }}>
          www.thinkspot.com
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;