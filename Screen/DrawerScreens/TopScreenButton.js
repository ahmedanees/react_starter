// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React and Component
import React from 'react';
import {View, Text, Image,KeyboardAvoidingView} from 'react-native';

const TopScreenButton = () => {
  return (
    <View>
          <KeyboardAvoidingView enabled>
            <View style={{alignItems: 'center'}}>
            <Image
                source={require('../../Image/highlight.png')}
                style={{
                  width: '50%',
                  height: 100,
                  resizeMode: 'contain',
                  margin: 30,
                }}
              />
             
            </View>
            
            
          </KeyboardAvoidingView>
        </View>
  );
};

export default TopScreenButton;