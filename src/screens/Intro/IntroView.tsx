/* eslint-disable react/prop-types */
import React, {useState} from 'react';
import styles from './styles';
import {ScrollView, View, Text, Image, ImageBackground} from 'react-native';
import {withTheme} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useSelector} from 'react-redux';
import {initReactI18next, useTranslation} from 'react-i18next';
import { useTheme } from '@react-navigation/native';
import { reducerState } from '../../utils/types';
interface props{
}

const IntroView:React.FC<props> = (props) => {
  const {colors, fonts, screen} = useTheme();
  const [t, i18n] = useTranslation();

  const language = useSelector((state:reducerState) => state.app.language);

  const i18 = (key:string) => {
    return t(key);
  };
  console.log('home', t('Tabs.home'));

  return (
    <View>
      <Text>Start</Text>
    </View>
  );
};
export default withTheme(IntroView);
