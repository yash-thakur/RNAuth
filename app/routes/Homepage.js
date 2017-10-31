// app/routes/Homepage.js

import React, {Component} from 'react';
import {
  Alert,
  View,
  AsyncStorage
} from 'react-native';
import {Button} from 'react-native-elements';
import {Actions} from 'react-native-router-flux';

export default class HomePage extends Component {
  
  getProtectedQuote() {
    Alert.alert('We will print a Chuck Norris quote')
  }
  
  // getProtectedQuote() {
  //   AsyncStorage.getItem('id_token').then((token) => {
  //     // TODO: localhost doesn't work because the app is running inside an emulator. Get the IP address with ifconfig.
  //     fetch('http://192.168.XXX.XXX:3001/api/protected/random-quote', {
  //       method: 'GET',
  //       headers: { 'Authorization': 'Bearer ' + token }
  //     })
  //       .then((response) => response.text())
  //       .then((quote) => {
  //         Alert.alert('Chuck Norris Quote', quote)
  //       })
  //       .done();
  //   })
  // }
  //
  
  async userLogout() {
    try {
      await AsyncStorage.removeItem('id_token');
      Alert.alert('Logout Success!');
      Actions.Authentication();
    } catch (error) {
      console.log('AsyncStorage error: ' + error.message);
    }
  }
  
  render() {
    console.log("Token:",AsyncStorage.getItem('id_token'));
    return (
      <View>
        <Button
          raised
          backgroundColor="#34FDAC"
          title="Get Chuck Norris quote!"
          onPress={this.getProtectedQuote}
        />
        <Button
          raised
          backgroundColor="#ab34df"
          title="Log out"
          onPress={this.userLogout}
        />
      </View>
    );
  }
}
