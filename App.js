import { StatusBar } from "expo-status-bar";
import React from "react";
import { createSwitchNavigator, createAppContainer } from "react-navigation";
import { StyleSheet, Text, View, Platform } from "react-native";
import ScanScreenMobile from "./mobscanner";
import ScanScreenWEB from "./webscanner";
import Main from './main'

var AppNv = createSwitchNavigator({
  MAIN:Main,
  WEBSCAN: ScanScreenWEB,
  MOBSCAN: ScanScreenMobile,
});
const AppContainer = createAppContainer(AppNv);

export default class App extends React.Component {
  render() {
    return <ScanScreenMobile/>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
