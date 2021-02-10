import React, {useState, createRef} from 'react';
import { useDispatch, useSelector } from "react-redux";

import {
  StyleSheet,
  TextInput,
  View,
  Text,
  Button,
  ScrollView,
  Image,
  Keyboard,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import { useForm, Controller } from 'react-hook-form';

import { useNavigation, useRoute } from "@react-navigation/native";
import { loginRequest } from "../../actions/authActions";


//import AsyncStorage from '@react-native-community/async-storage';

//import Loader from './Components/Loader';

const LoginView = (props) => {
  const { control, handleSubmit, errors } = useForm();
  const dispatch = useDispatch();
  
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

  const handleSubmitPress = (data) => {
    console.log("ddd",data)
    let dataToSend = {
      email: data.email,
      password: data.password
    };
    console.log("data to send from Login view",dataToSend)
    dispatch(loginRequest(dataToSend));
  }
  
  return (
    <View>
    <Controller
      control={control}
      render={({ onChange, onBlur, value }) => (
        <TextInput
          style={{paddingHorizontal: 20, borderWidth: 1, paddingVertical: 8}}
          onBlur={onBlur}
          onChangeText={value => onChange(value)}
          value={value}
        />
      )}
      name="email"
      rules={{ required: true ,
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "invalid email address"
              }
      }}
      defaultValue=""
    />
    

    {errors.email && <Text>email is required.</Text>}
    {errors.email?.type === "minLength" && <Text>Minimum 8 characters are required</Text>}    
    <Controller
      control={control}
      render={({ onChange, onBlur, value }) => (
        <TextInput
          style={{paddingHorizontal: 20, borderWidth: 1, paddingVertical: 8}}
          onBlur={onBlur}
          onChangeText={value => onChange(value)}
          value={value}
          secureTextEntry={true}
        />
      )}
      name="password"
      rules={{ required: true}}
      defaultValue=""
    />
    
    {errors.password?.type === "required" && <Text>Password is required.</Text>}

    {errors.password?.type === "minLength" && <Text>Minimum 8 characters are required</Text>}

    <Button title="Login" onPress={handleSubmit((data) => handleSubmitPress(data))} />
    {/* <LogoutButton /> */}
  </View>
    // <View>
    //         <Text style={styles.registerTextStyle}>
    //             Hi {user_data.author_name}
    //         </Text>
    //         <LogoutButton />
    // </View>
  );
};
export default LoginView;

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
