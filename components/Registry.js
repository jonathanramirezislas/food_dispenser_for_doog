import React, { Component } from 'react';
import { AppRegistry, StyleSheet, TextInput, View, Alert, Button, Text } from 'react-native';
import Axios from 'axios';
 
export default class MainProject extends Component {
constructor(props) {
    super(props)
    this.state = {
      UserName: '',
      UserEmail: '',
      UserPassword: ''
    }
  }
 
  handleSubmit = async() => {
  
    let formData =new FormData();
    formData.append('name', this.state.UserName)
    formData.append('email', this.state.UserEmail)
    formData.append('password', this.state.UserPassword)
console.log(this.state.UserName)
console.log(this.state.UserEmail)
console.log(this.state.UserPassword)
  await Axios ({
    method:'post',
    url:'https://proyectosita.com/dispenser/signup.php',
    data:formData,
    config:{headers:{'Content-Type':'multipart/form-data'}}
  }).then(response=>{

    console.log(response);
    if(response.data[0].resp=="ok"){
      console.log('exito')
      this.props.switchScreen("mains");
    }else{
      console.log('fail')
    }

  }).catch(error=>{
    console.log('Error Login', error)
    return false;
  })
  }
 
  render() {
    return (
      <View style={styles.MainContainer}>
        <Text style= {{ fontSize: 20, color: "#000", textAlign: 'center', marginBottom: 15 }}>User Registration Form</Text>
        <TextInput
          placeholder="Enter User Name"
          onChangeText={UserName => this.setState({UserName})}
          underlineColorAndroid='transparent'
          style={styles.TextInputStyleClass}
        />
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
        <Button title="Sign In" onPress={this.handleSubmit} style={styles.Button} />
        <Button color='transparent' />
        <Button style={styles.Button} onPress={()=>this.props.switchScreen("login")} title="Go Back" />
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
}
});
