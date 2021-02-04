// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React and Component
import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';

const TopScreenButton = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, padding: 16}}>
        
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

export default TopScreenButton;