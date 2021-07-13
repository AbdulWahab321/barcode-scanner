import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Platform } from 'react-native';

export default class Main extends React.Component {
  render(){
  if(Platform.OS!=="android"&&Platform.OS!=="ios"){
    this.props.navigation.navigate('WEBSCAN')
  }
  else{
    this.props.navigation.navigate('MOBSCAN')
  }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
