import React, { Component } from 'react';
import { AppRegistry, StyleSheet, TextInput, View, Alert, Button, Text, Image } from 'react-native';
import Axios from 'axios';
 
export default class MainProject extends Component {
constructor(props) {
    super(props)
    this.state = {
      PetName: '',
      PetAge: '',
      PetSize: ''
    }
  }
 
  handleSubmit = async() => {
  
    let formData =new FormData();
    formData.append('petname', this.state.PetName)
    formData.append('age', this.state.PetAge)
    formData.append('size', this.state.PetSize)
    console.log(this.state.PetName)
    console.log(this.state.PetAge)
    console.log(this.state.PetSize)
  await Axios ({
    method:'post',
    url:'https://proyectosita.com/dispenser/changepetdata.php',
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
        <Image source={require('../assets/logo.png')} style={styles.image}></Image>
        <Text style= {{ fontSize: 20, color: "#000", textAlign: 'center', marginBottom: 15 }}>Change Pet Information</Text>
        <TextInput
          placeholder="Enter Pet Name"
          onChangeText={PetName => this.setState({PetName})}
          underlineColorAndroid='transparent'
          style={styles.TextInputStyleClass}
        />
        <TextInput
          placeholder="Enter Pet Age"
          onChangeText={PetAge => this.setState({PetAge})}
          underlineColorAndroid='transparent'
          style={styles.TextInputStyleClass}
        />
        <TextInput
          placeholder="Enter Pet Size"
          onChangeText={PetSize => this.setState({PetSize})}
          underlineColorAndroid='transparent'
          style={styles.TextInputStyleClass}
        />
        <Button title="Change Pet Data" onPress={this.handleSubmit} style={styles.Button} />
        <Button color='transparent' />
        <Button style={styles.Button} onPress={()=>this.props.switchScreen("mains")} title="Go Back" />
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