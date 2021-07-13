import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Share,
  ScrollView,
  Platform,
  ToastAndroid,
  Vibration
} from 'react-native';
import { BarCodeScanner, PermissionResponse } from 'expo-barcode-scanner';
import * as WebBrowser from 'expo-web-browser';
import * as Device from 'expo-device';
import { Audio } from 'expo-av';
import styles from './style';
import Clipboard from 'expo-clipboard';
import QRCodeReader from 'react-qr-reader';

var validUrl = require('valid-url');

export default class ScanScreenMobile extends React.Component {
  constructor() {
    super();
    this.state = {
      nextEventStartOrShouldNotStart: true,
      scanned: false,
      data: ' ',
      type: ' ',
      permissionGranted: true,
      storageValue: ' ',
    };
  }
  shareMessage = async (message) => {
    try {
      const result = await Share.share({
        message: message,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };
  requestCameraPermission = async () => {
    await BarCodeScanner.requestPermissionsAsync();
  };

  componentDidMount = async () => {
    this.requestCameraPermission();
  };

  render() {

    const barCodeScanned = async ({ type, data }) => {
     await Vibration.vibrate(450)
      Audio.Sound.createAsync(
        { uri: 'http://soundbible.com/grab.php?id=1252&type=mp3' },
        { shouldPlay: true }
      );
      await this.setState({ scanned: true, data: data, type: type });
    };

    this.setStorage = (key, value) => {
      var keyS = JSON.stringify(key);
      var valueS = JSON.stringify(value);
    };
    this.getStorage = (key) => {
      var keys = JSON.stringify(key);
    };

    if (this.state.scanned === true) {
      if (validUrl.isUri(this.state.data)) {
        this.setStorage('h1', this.state.data);
        return (
          <ScrollView>
            <View style={styles.container}>
              <View style={styles.subContainer}>

                <View style={{ borderWidth: 2, borderRadius: 1 }}>
                  <Text style={styles.displayTextHead}>Content : </Text>
                  <Text style={styles.displayTextS}>{this.state.data}</Text>
                  <Text style={styles.displayTextHead}>Detected Code Type</Text>
                  <Text style={styles.displayTextS}>{this.state.type}</Text>
                </View>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => {
                    WebBrowser.openBrowserAsync(this.state.data.toString());
                  }}>
                  <Text style={styles.buttonText}>Open The Link</Text>
                </TouchableOpacity>
                <Text> </Text>
                <TouchableOpacity
                  style={styles.button}
                  onPress={async () => {
                    await Clipboard.setString(this.state.data);
                    var link = Clipboard.getStringAsync(this.state.data);

                    if (Platform.OS === 'android') {
                      ToastAndroid.showWithGravity(
                        'link successfuly copied',
                        ToastAndroid.LONG,
                        1
                      );
                    } else {
                      alert(`link successfuly copied`);
                    }
                  }}>
                  <Text style={styles.buttonText}>
                    Copy link to the clipboard
                  </Text>
                </TouchableOpacity>
                <Text> </Text>
                <TouchableOpacity
                  onPress={() => {
                    this.shareMessage(this.state.data);
                  }}
                  style={styles.button}>
                  <Text style={styles.buttonText}>Share The Link</Text>
                </TouchableOpacity>
                <Text> </Text>
                <TouchableOpacity
                  style={{
                    justifyContent: 'center',
                    alignSelf: 'center',
                    borderWidth: 3,
                    borderRadius: 15,
                    backgroudColor: 'red',
                    borderColor: 'darkgreen',
                    marginTop: 80,
                    width: 200,
                    height: 50,
                  }}
                  onPress={() => {
                    this.setState({ scanned: false });
                  }}>
                  <Text style={styles.buttonText}>Back</Text>
                </TouchableOpacity>
                <Text> </Text>
                <TouchableOpacity
                  onPress={() => {
                    this.shareMessage(
                      'https://snack.expo.io/@jr.abdulwahab/qr-code-scanner'
                    );
                  }}
                  style={styles.button}>
                  <Text style={styles.buttonText}>Share My App</Text>
                </TouchableOpacity>
                <Text
                  style={{
                    textAlign: 'center',
                    color: 'black',
                    fontWeight: 'bolder',
                    fontSize: 20,
                    marginTop: 20,
                  }}>
                  A QR Code Scanner App By AbdulWahab
                </Text>
                <Text
                  style={{
                    textAlign: 'center',
                    color: 'black',
                    fontWeight: 'bolder',
                    fontSize: 20,
                    marginTop: 20,
                  }}>
                  ^PLease share my app^
                </Text>
              </View>
            </View>
          </ScrollView>
        );
      } else {
        return (
          <ScrollView>
            <View style={styles.container}>
              <View style={styles.subContainer}>
                <Text style={styles.title}>QR Code Scanner App</Text>

                <View style={{ borderWidth: 2, borderRadius: 1 }}>
                  <Text style={styles.displayTextHead}>Content : </Text>
                  <Text style={styles.displayTextS}>{this.state.data}</Text>
                  <Text style={styles.displayTextHead}>Detected Code Type</Text>
                  <Text style={styles.displayTextS}>{this.state.type}</Text>
                </View>
                <Text> </Text>
                <TouchableOpacity
                  style={styles.button}
                  onPress={async () => {
                    await Clipboard.setString(this.state.data);
                    var link = Clipboard.getStringAsync(this.state.data);

                    if (Platform.OS === 'android') {
                      ToastAndroid.showWithGravity(
                        `data: "${this.state.data}" successfuly copied`,
                        ToastAndroid.LONG,
                        1
                      );
                    } else {
                      alert(`data: "${this.state.data}" successfuly copied`);
                    }
                  }}>
                  <Text style={styles.buttonText}>
                    Copy the Text to Clipboard
                  </Text>
                </TouchableOpacity>
                <Text> </Text>
                <TouchableOpacity
                  onPress={() => {
                    this.shareMessage(this.state.data);
                  }}
                  style={styles.button}>
                  <Text style={styles.buttonText}>Share The Text</Text>
                </TouchableOpacity>
                <Text> </Text>
                <TouchableOpacity
                  style={{
                    justifyContent: 'center',
                    alignSelf: 'center',
                    borderWidth: 3,
                    borderRadius: 15,
                    backgroudColor: 'red',
                    borderColor: 'darkgreen',
                    marginTop: 80,
                    width: 200,
                    height: 50,
                  }}
                  onPress={() => {
                    this.setState({ scanned: false });
                  }}>
                  <Text style={styles.buttonText}>Back</Text>
                </TouchableOpacity>
                <Text> </Text>
                <TouchableOpacity
                  onPress={() => {
                    this.shareMessage(
                      'https://snack.expo.io/@jr.abdulwahab/qr-code-scanner'
                    );
                  }}
                  style={styles.button}>
                  <Text style={styles.buttonText}>Share My App</Text>
                </TouchableOpacity>
                <Text
                  style={{
                    textAlign: 'center',
                    color: 'black',
                    fontWeight: 'bolder',
                    fontSize: 20,
                    marginTop: 20,
                  }}>
                  A QR Code Scanner App By AbdulWahab
                </Text>
                <Text
                  style={{
                    textAlign: 'center',
                    color: 'black',
                    fontWeight: 'bolder',
                    fontSize: 20,
                    marginTop: 20,
                  }}>
                  ^PLease share my app^
                </Text>
              </View>
            </View>
          </ScrollView>
        );
      }
    } else {
      return (
        <View style={styles.container}>
          <View style={styles.subContainer}>
            <Text style={styles.title}>QR Code Scanner App</Text>
            <BarCodeScanner
              onBarCodeScanned={this.state.scanned ? undefined : barCodeScanned}
              style={[StyleSheet.absoluteFillObject, { marginTop: 50 }]}
              focusable={true}
            />
          </View>
        </View>
      );
    }
  }
}
