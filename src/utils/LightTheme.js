import {Dimensions, Platform} from 'react-native';
const Width = Math.round(Dimensions.get('screen').width);
const Height = Math.round(Dimensions.get('screen').height);
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';

const generic = '#FFFFFF';
const primary = '#4a148c';
const section = '#f5f5f5';
const errorColor = '#b71c1c';
const textColor = '#757575';
const fbColor = '#3B5999';
const gColor = '#DD4B39';
const profileTextColor = '#707070';

const family =
  Platform.OS == 'android' ? 'serif' : 'AmericanTypewriter-Condensed';

const theme = {
  ...DefaultTheme,
  fonts: {
    family,
  },

  colors: {
    generic,
    primary,
    section,
    textColor,
    errorColor,
    fbColor,
    gColor,
    profileTextColor,
  },

  screen: {
    width: Width,
    height: Height,
  },

  authScreen: {
    inputContainer: {
      flexDirection: 'row',
      backgroundColor: section,
      width: '85%',
      height: 60,
      alignSelf: 'center',
      borderRadius: 30,
      alignItems: 'center',
      paddingLeft: 20,
      marginVertical: 5,
    },
    input: {
      width: '90%',
      paddingLeft: 15,
      color: primary,
      fontSize: 16,
      fontFamily: family,
    },
    error: {
      width: '85%',
      alignSelf: 'center',
      paddingLeft: 25,
    },
    button: {
      width: '85%',
      height: 60,
      borderRadius: 30,
      marginVertical: 20,
      justifyContent: 'center',
      alignItems: 'center',
    },
    logo: {
      width: '100%',
      height: '30%',
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
  introScreen: {
    buttonText: {
      fontSize: 14,
      fontWeight: 'bold',
      alignSelf: 'center',
      color: 'white',
      textAlign: 'center',
    },
    button: {
      width: '90%',
      height: 50,
      borderRadius: 30,
      shadowColor: 'black',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 2,
      elevation: 2,
      alignSelf: 'center',
      justifyContent: 'center',

      alignItems: 'center',
      marginTop: 15,
    },
  },
};

export default theme;
