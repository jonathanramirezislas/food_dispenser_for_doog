import React, { Component } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {View,Text,Button,TextInput,Image} from 'react-native';
import axios from 'axios';


export default class checkpetdata extends Component{
  constructor(props) {
    super(props)
    this.state = {
      data:[]
    }
  }

 componentDidMount() {
    const {data} = this.state;
    axios.get('https://proyectosita.com/dispenser/allpets2.php')
    .then(response => {
      const data = response.data;
      console.log(data);
      this.setState({ data });  
     
    })
  }

  render(){

       const {data} = this.state;
  
       const allpets = data.map((pet) =>
       <View style={{backgroundColor:"#BEE8E3", justifyContent:"center", marginBottom:3, marginTop:4}}>
          <Text style={styles.Textstyle2}>Pet:</Text>
          <Text style={styles.Textstyle}>Name: {pet.petname}</Text>
          <Text style={styles.Textstyle}>Date: {pet.date}</Text>
       </View>
      
);

      return(
        

          <View style={StyleSheet.container}>
              <Image source={require('../assets/logo.png')} style={styles.image}></Image>
              {allpets}
              <Button color="#2196F3" onPress={()=>this.props.switchScreen("mains")} title="Go Back" />
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
    Textstyle :{
      textAlign:"center",
      fontSize: 15,
      fontStyle:"Bold",
      },
    Textstyle2 :{
      textAlign:"center",
      fontSize: 20,
      fontStyle:"Bold",
      color:"blue",
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