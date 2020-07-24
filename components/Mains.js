import React, { Component } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
//import {View,Text,Button,StyleSheet} from 'react-native';
import { AppRegistry, StyleSheet, TextInput, View, Alert, Button, Text, Image } from 'react-native';

const Stack=createStackNavigator()

export default class Main extends Component{
    render(){
        return(
            <View style={styles.MainContainer}>
                <Image source={require('../assets/logo.png')} style={styles.image}></Image>
                <Text style= {{ fontSize: 20, color: "#000", textAlign: 'center', marginBottom: 15 }}>New Pet</Text>
                <Button style={styles.Button} onPress={()=>this.props.switchScreen("newpet")} title="New Pet" />
                <Button color='transparent' />
                <Button style={styles.Button} onPress={()=>this.props.switchScreen("erasepet")} title="Erase Pet" />
                <Button color='transparent' />
                <Button style={styles.Button} onPress={()=>this.props.switchScreen("changepetdata")} title="Change Pet Data" />
                <Button color='transparent' />
                <Button style={styles.Button} onPress={()=>this.props.switchScreen("checkpet")} title="Check Pets" />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    MainContainer :{
    justifyContent: 'center',
    flex:1,
    margin: 10
    },
    TextInputStyleClass: {
    textAlign: 'center',
    marginBottom: 7,
    height: 40,
    borderWidth: 1,
    borderColor: '#2196F3',
    borderRadius: 5 ,
    },
    Button: {
        color: '#2196F3',
        borderRadius: 5,
    },
    image:{
        width:100,
        height:100,
        right:'60%',
        left:'46%',
        borderRadius:30
      },
    });