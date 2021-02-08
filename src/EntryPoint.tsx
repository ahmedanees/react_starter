/* eslint-disable react/prop-types */
import 'react-native-gesture-handler';
import React, {Suspense, useEffect} from 'react';
import {Platform, SafeAreaView} from 'react-native';
import AppNavigator from './navigation';
import {Provider} from 'react-redux';
import {Root} from 'native-base';
import {persistor, store} from './store/store';
import {PersistGate} from 'redux-persist/integration/react';
import splash from './screens/SplashScreen';
import SplashScreen from 'react-native-splash-screen';
import codePush from 'react-native-code-push';
import PushNotifications from './components/PushNotifications';
const App = () => {
  useEffect(() => {
    console.disableYellowBox = true;
    if (Platform.OS == 'android') {
      SplashScreen.hide();
    }
  }, []);

  return (
    <Suspense fallback={splash}>
      <Root>
        <SafeAreaView style={{flex: 1}}>
          <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
              <AppNavigator />
            </PersistGate>
            {/* <PushNotifications /> */}
          </Provider>
        </SafeAreaView>
      </Root>
    </Suspense>
  );
};

const codePushOptions = {
  updateDialog: true,
  installMode: codePush.InstallMode.IMMEDIATE,
};

export default codePush(codePushOptions)(App);
