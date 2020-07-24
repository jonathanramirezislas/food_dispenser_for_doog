import React from 'react';
import { StyleSheet, Text, View, Platform, Image, ImageBackground } from 'react-native';
import Login from './components/Login';
import Mains from './components/Mains';
import Registry from './components/Registry';
import NewPet from './components/NewPet';
import ErasePet from './components/ErasePet';
import ChangePetData from './components/ChangePetData';
import CheckPet from './components/CheckPet';


export default class App  extends React.Component{

  state={
    currentScreen:"login",
    user:""
  }
  currentuser=(user)=>{
    this.setState({user});
  }
  switchScreen=(currentScreen)=>{
    this.setState({currentScreen});
  }
  renderScreen=()=>{
    if(this.state.currentScreen==="login"){
      return(
        <Login switchScreen={this.switchScreen} currentuser={this.currentuser}/>
      )
    }
    else if(this.state.currentScreen==="mains"){
      return(
        <Mains switchScreen={this.switchScreen}/>
      )
    }
    else if(this.state.currentScreen==="registry"){
      return(
        <Registry switchScreen={this.switchScreen}/>
      )
    }
    else if(this.state.currentScreen==="newpet"){
      return(
        <NewPet switchScreen={this.switchScreen}/>
      )
    }
    else if(this.state.currentScreen==="erasepet"){
      return(
        <ErasePet switchScreen={this.switchScreen}/>
      )
    }
    else if(this.state.currentScreen==="changepetdata"){
      return(
        <ChangePetData switchScreen={this.switchScreen}/>
      )
    }
    else if(this.state.currentScreen==="checkpet"){
      return(
        <CheckPet switchScreen={this.switchScreen}/>
      )
    }
  }
  render(){
    return (
      <View style={styles.container}>
        {this.renderScreen()}
      </View>
    );
  }
}

const styles = {
  container: {
    justifyContent: 'center',
    flex:1,
    margin: 10,
    backgroundColor:"#FFFFFF",
  },
  button:{
    margin:10,
    width:80,
    textAlign:'center',
    alignContent:'center',
    alignItems:'center',
    justifyContent: 'center',
  },
  textButton:{
    color:'#fff',
    fontStyle:'italic',
    alignItems: 'center',
  },
}