import React, { Component } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {View,Text,Button,TextInput,Image} from 'react-native';
import Axios from 'axios';


export default class login extends Component{

  constructor(props) {
    super(props)
    this.state = {
      UserEmail: '',
      UserPassword: ''
    }
  }

  handleSubmit = async() => {
    let formData =new FormData();
    formData.append('email', this.state.UserEmail)
    formData.append('password', this.state.UserPassword)
console.log(this.state.UserEmail)
console.log(this.state.UserPassword)
  await Axios ({
    method:'post',
    url:'https://proyectosita.com/dispenser/login.php',
    data:formData,
    config:{headers:{'Content-Type':'multipart/form-data'}}
  }).then(response=>{

    console.log(response);
    if(response.data[0].status=="ok"){
      console.log(response.data[0].status)
      console.log('successful')
      this.props.switchScreen("mains");
    }else{
      console.log(response.data[0].status)
      console.log('inexistent user')
    }

  }).catch(error=>{
    console.log('Error Login', error)
    return false;
  })
  }
  
  render(){
      return(
          <View>
              <Image source={require('../assets/logo.png')} style={styles.image}></Image>
              <Text style= {{ fontSize: 20, color: "#000", textAlign: 'center', marginBottom: 15 }}>Pet Dispenser</Text>
              <TextInput
              placeholder="Enter User Email"
              onChangeText={UserEmail => this.setState({UserEmail})}
              underlineColorAndroid='transparent'
              style={styles.TextInputStyleClass}
              />
              <TextInput
              placeholder="Enter User Password"
              onChangeText={UserPassword => this.setState({UserPassword})}
              underlineColorAndroid='transparent'
              style={styles.TextInputStyleClass}
              secureTextEntry={true}
              />
              <Button style={styles.Button} onPress={this.handleSubmit} title="Log In" />
              <Button color='transparent' />
              <Button color="#2196F3" onPress={()=>this.props.switchScreen("registry")} title="Sign Up" />
          </View>
      )
  }
}
const styles = {
    container: {
      flex:1,
      backgroundColor:"#81d4fa",
      justifyContent: 'center',
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
    TextInputStyleClass: {
      textAlign: 'center',
      marginBottom: 7,
      height: 40,
      borderWidth: 1,
      borderColor: '#2196F3',
      borderRadius: 5 ,
    },
    image:{
      width:100,
      height:100,
      right:'60%',
      left:'46%',
      borderRadius:30
    },
  }