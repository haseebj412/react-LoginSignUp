import React, { Component } from 'react';
 
import { Animated, StyleSheet, Text, View} from 'react-native';









// Creating Login Activity.
class Home extends Component {
 
  // Setting up Login Activity title.
  static navigationOptions =
  {

    title: '      Home',
    headerStyle:{
  
      backgroundColor:'#4e4463'
    },
    headerTintColor:'#ffff'
  };
 
  constructor(props) {
 
    super(props)
    this.state = {
 
        FullName: '',
        UserEmail: '',
        UserPassword: '',
      
      shift: new Animated.Value(0),
    }
  }

 
  
  

  
 
  render() {

    
    
    return (

     
 
      <View style={styles.MainContainer}> 

       
 
        <Text style= {styles.TextComponentStyle}>Home</Text>
        
      </View>
            
    );
  }

  

}
 
const styles = StyleSheet.create({
 
  MainContainer :{
    
    flex:1,
    margin: 10,
  },

  

  

  
  

 
 TextComponentStyle: {
  
    fontSize: 20,
    color: "#000",
    textAlign: 'center', 
    marginBottom: 15,
    fontWeight: 'bold'
  },

  
});




export default Home;