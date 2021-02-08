/* eslint-disable react/prop-types */
import React from "react";
import {
  Image,
  View,
} from "react-native";

function DrawerComponent() {
  return (
    <View style={{ height: "100%" }}>
      <Image
        source={require("../../assets/images/logo.png")}
        style={{
          height: 60,
          width: 140,
          marginVertical: 10,
          marginTop: 30,
          marginLeft: 20
        }}
      />
      <View
        style={{
          width: "100%",
          borderBottomWidth: 1.5,
          borderBottomColor: "rgba(245, 245, 245, 0.75)"
        }}
      />
    </View>
  );
}

export default DrawerComponent;
