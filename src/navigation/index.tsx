import React from 'react';
import NavigationStack from './NavigationStack';
import NavigationService from './NavigationService';
import {NavigationContainer} from '@react-navigation/native';
import {Toast} from 'native-base';
import {useDispatch, useSelector} from 'react-redux';
import {disableSnackbar} from '../actions/snackbarActions';
import LightTheme from '../utils/LightTheme';
import { Theme, reducerState } from '../utils/types';



const AppNavigator = () => {
  const dispatch = useDispatch();
  const message = useSelector((state:reducerState) => state.snackbar.message);
  if (message != '') {
    Toast.show({
      text: message,
      duration: 4000,
      position: 'bottom',
      onClose: () => {
        dispatch(disableSnackbar());
      },
    });
  }
  return (
    <NavigationContainer
      theme={LightTheme}
      ref={navigatorRef => {
        NavigationService.setTopLevelNavigator(navigatorRef);
      }}>
      <NavigationStack />
    </NavigationContainer>
  );
};

export default AppNavigator;
