import React, {useRef, useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
interface props{
}

const SplashView:React.FC<props> = (props) => {
  return (
    <View
      style={{
        backgroundColor: 'red',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{color: 'white', fontSize: 16, fontWeight: 'bold'}}>
        Test Slapsh
      </Text>
    </View>
  );
};







export default SplashView;


