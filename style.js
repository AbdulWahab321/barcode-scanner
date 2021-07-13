import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import * as WebBrowser from 'expo-web-browser';
import * as Sharing from 'expo-sharing';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'cyan',
  },
  button: {
    justifyContent: 'center',
    alignSelf: 'center',
    borderWidth: 3,
    borderRadius: 15,
    backgroudColor: 'red',
    borderColor: 'darkgreen',
    marginTop: 50,
    width: 200,
    height: 50,
  },
  button1: {
    justifyContent: 'center',
    alignSelf: 'center',
    borderWidth: 3,
    borderRadius: 15,
    backgroudColor: 'red',
    borderColor: 'darkgreen',
    marginTop: 600,
    width: 200,
    height: 50,
  },
  subContainer: {
    marginTop: 50,
    flex: 1,
    borderWidth: 2,
    alignItems: 'center',
    backgroundColor: 'cyan',
  },
  input: {
    borderColor: 'black',
    borderWidth: 2,
    width: 250,
    height: 25,
    textAlign: 'center',
    marginTop: 30,
    alignSelf: 'center',
  },
  buttonText: {
    textAlign: 'center',
    color: 'darkblue',
  },
  displayTextS: {
    textAlign: 'center',
    color: 'black',
    fontWeight: 'bolder',
    fontSize: 20,
  },
  displayTextHead: {
    textAlign: 'center',
    color: 'black',
    fontWeight: '900',
    fontStyle: 'italic',
    fontSize: 25,
  },
  title: {
    margin: 10,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 15,
  },
});

export default styles;
