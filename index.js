/**
 * @format
 */

// import {AppRegistry} from 'react-native';
// import App from './App';
// import {name as appName} from './app.json';

// // import {Provider} from 'react-redux';
// // import configureStore from './src/redux/store'
// // const store = configureStore;
// // const ReduxSetup = () => 
// // <Provider store={store}>
// //     <App/>
// // </Provider>
// // AppRegistry.registerComponent(appName, () => ReduxSetup);
// AppRegistry.registerComponent(appName, () => App);


import {AppRegistry} from 'react-native';
import App from './src/EntryPoint';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);