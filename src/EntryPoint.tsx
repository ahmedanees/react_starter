/* eslint-disable react/prop-types */
import 'react-native-gesture-handler';
import React, {Suspense, useEffect, useState} from 'react';
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
import AnimatedSplash from "react-native-animated-splash-screen";

const App = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.disableYellowBox = true;
    setTimeout(() => {
       SplashScreen.hide();
       setTimeout(() => {
          setLoading(true);
       }, 500);
    }, 1000);
  }, []);

  return (
    <Suspense fallback={splash}>
      <AnimatedSplash
            isLoaded={loading}
            logoImage={require("../assets/images/logo.png")}
            backgroundColor={"#fcfcfc"}
            logoHeight={150}
            logoWidth={150}
         >
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
        </AnimatedSplash>    
    </Suspense>
  );
};

const codePushOptions = {
  updateDialog: true,
  installMode: codePush.InstallMode.IMMEDIATE,
};

export default codePush(codePushOptions)(App);
