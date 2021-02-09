/* eslint-disable react/prop-types */
import React, {useState} from 'react';
import { useDispatch, useSelector } from "react-redux";
//import styles from './styles';
//import {ScrollView, View, Text, Image, ImageBackground} from 'react-native';

import {
  StyleSheet,
  TextInput,
  View,
  Text,
  ScrollView,
  Image,
  Keyboard,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';

import {withTheme} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
//import {TouchableOpacity} from 'react-native-gesture-handler';
import {initReactI18next, useTranslation} from 'react-i18next';
import { useTheme } from '@react-navigation/native';
import { reducerState } from '../../utils/types';
import { useNavigation, useRoute } from "@react-navigation/native";
import { logOut } from "../../actions/authActions";

interface props{
}

const IntroView:React.FC<props> = (props) => {
  const {colors, fonts, screen} = useTheme();
  const [t, i18n] = useTranslation();
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const language = useSelector((state:reducerState) => state.app.language);

  const i18 = (key:string) => {
    return t(key);
  };
  console.log('home', t('Tabs.home'));
  const handleLogout = () => {
      //navigation.navigate('signup')
      dispatch(logOut());
  };
  return (
    <View>
            <TouchableOpacity
              style={styles.buttonStyle}
              activeOpacity={0.5}
              onPress={handleLogout}>
              <Text style={styles.buttonTextStyle}>
                LOGOUT
              </Text>
            </TouchableOpacity>
    </View>
  );
};
export default withTheme(IntroView);


const styles = StyleSheet.create({
  mainBody: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'black',
    alignContent: 'center',
  },
  SectionStyle: {
    flexDirection: 'row',
    height: 40,
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
  },
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
  inputStyle: {
    flex: 1,
    color: 'white',
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: '#dadae8',
  },
  registerTextStyle: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 14,
    alignSelf: 'center',
    padding: 10,
  },
  errorTextStyle: {
    color: 'red',
    textAlign: 'center',
    fontSize: 14,
  },
});
