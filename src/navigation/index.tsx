// import React from 'react';
// import NavigationStack from './NavigationStack';
// import NavigationService from './NavigationService';
// import {NavigationContainer} from '@react-navigation/native';
// import {Toast} from 'native-base';
// import {useDispatch, useSelector} from 'react-redux';
// import {disableSnackbar} from '../actions/snackbarActions';
// import LightTheme from '../utils/LightTheme';
// import { Theme, reducerState } from '../utils/types';


import React, { useEffect, useState } from "react";
import NavigationStack from "./NavigationStack";
import NavigationService from "./NavigationService";
import { NavigationContainer } from "@react-navigation/native";
import { Toast } from "native-base";
import { useDispatch, useSelector } from "react-redux";
import { disableSnackbar } from "../actions/snackbarActions";


// const AppNavigator = () => {
//   const dispatch = useDispatch();
//   const message = useSelector((state:reducerState) => state.snackbar.message);
//   if (message != '') {
//     Toast.show({
//       text: message,
//       duration: 4000,
//       position: 'bottom',
//       onClose: () => {
//         dispatch(disableSnackbar());
//       },
//     });
//   }
//   return (
//     <NavigationContainer
//       theme={LightTheme}
//       ref={navigatorRef => {
//         NavigationService.setTopLevelNavigator(navigatorRef);
//       }}>
//       <NavigationStack />
//     </NavigationContainer>
//   );
// };

// export default AppNavigator;
const AppNavigator = () => {
  const dispatch = useDispatch();
  const message = useSelector(state => state.snackbar.message);
  const [loading, setLoading] = useState(false);
  console.log("message e", message);
  if (message != "") {
     Toast.show({
        text: message,
        duration: 3000,
        position: "bottom",
        onClose: () => {
           dispatch(disableSnackbar());
        },
     });
     setTimeout(() => {
        dispatch(disableSnackbar());
     }, 3000);
  }

  useEffect(() => {
     setTimeout(() => {
        setLoading(true);
     }, 600);
  }, []);

  return (
     <NavigationContainer
        ref={navigatorRef => {
           NavigationService.setTopLevelNavigator(navigatorRef);
        }}
     >
        <NavigationStack />
     </NavigationContainer>
  );
};

export default AppNavigator;
