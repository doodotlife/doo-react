/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
var Controllers = require('react-native-controllers');
// var React = Controllers.hijackReact();
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  View,
  TextInput,
  Dimensions,
  Button,
  ScrollView
} from 'react-native';
import dismissKeyboard from 'react-native-dismiss-keyboard';
import KeyboardSpacer from 'react-native-keyboard-spacer';
// import MyScene from './home';

var width = Dimensions.get('window').width;

function Login() {

    return fetch('https://doo-ios-server.herokuapp.com/login', {
    // return fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
          username: this.state.username,
          password: this.state.password
    })
    }).then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson.result);
        this.setState({loggedIn: true})
        return (
      <MyScene />
    );
      })
      .catch((error) => {
        console.error(error);
      });
  }


export default class doo_react extends Component {
  render() {
      this.setState({username:""});
      this.setState({password:""});
    return (
      <View style={styles.container}>
      <ScrollView
        scrollEnabled={false}
        contentContainerStyle={styles.main}>
        <Image style={styles.logo}
          source={require('../img/logo.jpg')}
        />
        <Text style={styles.welcome}>
        doo. is a online platform for you to manage your time,{'\n'}
        together with your friends.
        </Text>
        <View style={{padding: 10}}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            ref= "username"
            onChangeText={(username) => this.setState({username})}
            onSubmitEditing={this.handleEditComplete}
            keyboardType={'email-address'}
          />
          <TextInput
            secureTextEntry={true}
            style={styles.input}
            placeholder="Password"
            ref= "password"
            onChangeText={(password) => this.setState({password})}
            onSubmitEditing={this.handleEditComplete}
          />
        </View>
        <KeyboardSpacer/>
        <View style={{flex: 1, flexDirection:"row",justifyContent:"flex-end"}}>
            <Button
            //   onPress={Login}
              title="Sign Up"
              color="#cacaca"
              style={styles.loginButton}
              accessibilityLabel="Sign up"
            />
            <Button
              onPress={Login.bind(this)}
              title="Login"
              color="#cacaca"
              style={styles.loginButton}
              accessibilityLabel="Login"
            />
        </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    width: width * .8,
    marginTop: width * 0.3,
    marginLeft: width * .1
  },
  input: {
      height: 40,
      marginTop:20,
      padding:10,
    //   borderWidth: 1,
      borderRadius: 5,
      backgroundColor: '#FFFFFF',
      alignSelf: "stretch",
      shadowColor: '#000000',
      shadowOffset: {
          height:3,
          width:0,
      },
      shadowOpacity: 0.1,
      shadowRadius: 5
  },
  loginButton: {
      backgroundColor: "#FFFFFF",
      shadowColor: '#000000',
      shadowOffset: {
          height:3,
          width:0,
      },
      shadowOpacity: 0.1,
      shadowRadius: 5
  },
  logo: {
      height:68.5,
      width: 154,
    //   margin: 50
  },
  welcome: {
    fontSize: 16,
    textAlign: 'left',
    marginTop: 20,
    marginBottom: 20
    // marginLeft: 50,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('doo_react', () => doo_react);
