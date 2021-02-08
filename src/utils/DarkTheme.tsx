import { Dimensions, Platform } from "react-native";
const Width = Math.round(Dimensions.get("screen").width);
const Height = Math.round(Dimensions.get("screen").height);

const generic = "#212121";
const primary = "#870000";
const section = "#424242";
const errorColor = "#ef6c00";
const textColor = "#e0e0e0";
const family =
  Platform.OS == "android" ? "serif" : "AmericanTypewriter-Condensed";

const theme = {
  fonts: {
    family
  },

  colors: {
    generic,
    primary,
    section,
    textColor,
    errorColor
  },

  screen: {
    width: Width,
    height: Height
  },

  authScreen: {
    inputContainer: {
      flexDirection: "row",
      backgroundColor: section,
      width: "85%",
      height: 60,
      alignSelf: "center",
      borderRadius: 30,
      alignItems: "center",
      paddingLeft: 20,
      marginVertical: 5
    },
    input: {
      width: "90%",
      paddingLeft: 15,
      color: primary,
      fontSize: 16,
      fontFamily: family
    },
    error: {
      width: "85%",
      alignSelf: "center",
      paddingLeft: 25
    },
    button: {
      width: "85%",
      height: 60,
      borderRadius: 30,
      marginVertical: 20,
      justifyContent: "center",
      alignItems: "center"
    },
    logo: {
      width: "100%",
      height: "30%",
      justifyContent: "center",
      alignItems: "center"
    }
  }
};

export default theme;
