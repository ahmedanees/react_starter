// import React, {useRef, useState} from 'react';
// import {Text, View, StyleSheet} from 'react-native';
// interface props{
// }

// const SplashView:React.FC<props> = (props) => {
//   return (
//     <View
//       style={{
//         backgroundColor: 'red',
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//       }}>
//       <Text style={{color: 'white', fontSize: 16, fontWeight: 'bold'}}>
//         SetUpssssssssssassa
//       </Text>
//     </View>
//   );
// };


// export default SplashView;
// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React and Component
import React, {useState, useEffect} from 'react';
import {
  ActivityIndicator,
  View,
  StyleSheet,
  Image
} from 'react-native';

//import AsyncStorage from '@react-native-community/async-storage';

const SplashView = ({navigation}) => {
  //State for ActivityIndicator animation
  const [animating, setAnimating] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      console.log("Hello mans")
      setAnimating(false);
      //Check if user_id is set or not
      //If not then send for Authentication
      //else send to Home Screen
      // AsyncStorage.getItem('user_id').then((value) =>
      //   navigation.replace(
      //     value === null ? 'Auth' : 'DrawerNavigationRoutes'
      //   ),
      // );
    }, 5000);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/images/logo.png')}
        style={{width: '90%', resizeMode: 'contain', margin: 30}}
      />
      <ActivityIndicator
        animating={animating}
        color="#FFFFFF"
        size="large"
        style={styles.activityIndicator}
      />
    </View>
  );
};

export default SplashView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  activityIndicator: {
    alignItems: 'center',
    height: 80,
  },
});