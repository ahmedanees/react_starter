/* eslint-disable react/prop-types */
import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from "react-redux";
//import styles from './styles';
//import {ScrollView, View, Text, Image, ImageBackground} from 'react-native';

import {
  
  Switch,
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
import LogoutButton from "../../components/LogoutButton"

import { t, color } from 'react-native-tailwindcss';

import Input from '../../components/Input';
import Button from '../../components/Button';
import { useForm, Controller } from 'react-hook-form';

interface props{
}

const IntroView:React.FC<props> = (props) => {
  const {colors, fonts, screen} = useTheme();
  const [t, i18n] = useTranslation();
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const language = useSelector((state:reducerState) => state.app.language);
  const email = useSelector((state:reducerState) => state.auth.email);
  const user_data = useSelector((state:reducerState) => state.auth.user_data);
  const [isBillingDifferent, setIsBillingDifferent] = useState(false);
  // export default function App() {
  const { handleSubmit, control, errors } = useForm();
  useEffect(() => {
    fetchUser();
  }, []);
  
  const fetchUser = async () => {
    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/users/1'
      );
      const { name, email } = await response.json();
      //setValue('name', name);
      //setValue('email', email);
    } catch (error) {}
  };
  // After the last import statement
  const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;



  const toggleBilling = () => {
    setIsBillingDifferent((prev) => !prev);
  };


  const i18 = (key:string) => {
    return t(key);
  };
  console.log('home', t('Tabs.home'));
  console.log("User obj",user_data)
  const handleLogout = () => {
      dispatch(logOut());
  };
  return (
    <View style={styles.container}>
    <Input placeholder="Name" error={errors.name}
    errorText={errors?.name?.message} rules={{
      required: { value: true, message: 'Name is required' }
    }}/>
    <Input placeholder="Email" error={errors.email}
    errorText={errors?.email?.message} rules={{
    required: { value: true, message: 'Email is required' },pattern: {
      value: EMAIL_REGEX,
      message: 'Not a valid email'
    }
    }}/>
    <View style={styles.switch}>
      <Text style={styles.switchText}>Billing different</Text>
      <Switch
        trackColor={{ false: color.gray200, true: color.green600 }}
        thumbColor={color.gray100}
        ios_backgroundColor={color.gray800}
        onValueChange={toggleBilling}
        value={isBillingDifferent}
      />
    </View>
    {isBillingDifferent && (
      <>
        <Input placeholder="Billing name" />
        <Input placeholder="Billing email" />
      </>
    )}
    <Button label="Submit" />
    <LogoutButton />
  </View>
    // <View>
    //         <Text style={styles.registerTextStyle}>
    //             Hi {user_data.author_name}
    //         </Text>
    //         <LogoutButton />
    // </View>
  );
};
export default withTheme(IntroView);

const styles = {
  container: [t.flex1, t.justifyCenter, t.itemsCenter, t.p6, t.bgGray200],
  switch: [t.mB4, t.selfStart, t.flexRow, t.itemsCenter],
  switchText: [t.textBase, t.mR3, t.textGray800]
};
const stylesw = StyleSheet.create({
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
    color: 'black',
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
