/* eslint-disable react/prop-types */
import React, {useState} from 'react';
import { useDispatch, useSelector } from "react-redux";
//import styles from './styles';
//import {ScrollView, View, Text, Image, ImageBackground} from 'react-native';

import {
  StyleSheet,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import {withTheme} from 'react-native-paper';
import { logOut } from "../actions/authActions";

interface props{
}

const LogoutButton:React.FC<props> = (props) => {
  const dispatch = useDispatch();
    const handleLogout = () => {
      dispatch(logOut());
  };
  return (
            <TouchableOpacity
              style={styles.buttonStyle}
              activeOpacity={0.5}
              onPress={handleLogout}>
              <Text style={styles.buttonTextStyle}>
               LOGOUT
              </Text>
            </TouchableOpacity>
        );
};
export default withTheme(LogoutButton);


const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: '#7DE24E',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#7DE24E',
    height: 40,
    alignItems: 'center',
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 20,
    marginBottom: 25,
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    paddingVertical: 10,
    fontSize: 16,
  },
  
});
