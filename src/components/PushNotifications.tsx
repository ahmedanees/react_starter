import React, {useEffect, useRef, useState} from 'react';
import {Alert, View} from 'react-native';
import messaging from '@react-native-firebase/messaging';
import NotificationPopup from 'react-native-push-notification-popup';
import NavigationService from '../navigation/NavigationService';
import AsyncStorage from '@react-native-community/async-storage';
import {useDispatch, useSelector} from 'react-redux';

const PushNotification = () => {
  const dispatch = useDispatch();
  const [fcmToken, setFcmToken] = useState('');
  const popup = useRef(NotificationPopup);

  useEffect(() => {
    checkPermission();
    createNotificationListeners();
  }, []);
  useEffect(() => {
    const unsubscribe = messaging().onMessage( (remoteMessage:any) => {
      console.log('remote', remoteMessage);
      showAlert(
        remoteMessage.notification.title,
        remoteMessage.notification.body,
      );
    });

    return unsubscribe;
  }, []);

  const getToken = async () => {
    var fcm_token = await messaging().getToken();

    setFcmToken(fcm_token);
    await AsyncStorage.setItem('@fcm_token', fcm_token);
  };

  const checkPermission = async () => {
    const enabled = await messaging().hasPermission();
    let fcm_token = await AsyncStorage.getItem('@fcm_token');
    console.log('Fcm Token = ', fcm_token);
    if (enabled && !fcm_token) {
      getToken();
    } else {
      requestPermission();
    }
  };

  const requestPermission = async () => {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      console.log('Authorization status:', authStatus);
    }
  };

  const showAlert = (title:string, body:string) => {
    popup.current.show({
      onPress: function() {
        console.log('Pressed');
      },
      //  appIconSource: require('./assets/icon.jpg'),
      appTitle: 'Boilerplate',
      timeText: 'Now',
      title: title,
      body: body,
    });
  };

  const createNotificationListeners = async () => {
    // Register background handler
    messaging().setBackgroundMessageHandler(async remoteMessage => {
      console.log('Message handled in the background!', remoteMessage);
    });

    messaging().onNotificationOpenedApp(remoteMessage => {
      console.log(
        'Notification caused app to open from background state:',
        remoteMessage,
      );
    });

    // Check whether an initial notification is available
    messaging()
      .getInitialNotification()
      .then(remoteMessage => {
        if (remoteMessage) {
          console.log(
            'Notification caused app to open from quit state:',
            remoteMessage.notification,
          );
        }
      });
  };

  return <NotificationPopup ref={popup} />;
};

export default PushNotification;
