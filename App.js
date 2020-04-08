import React, { Component } from 'react';
 
import { Alert,StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';

// Importing Stack Navigator library to add multiple activities.
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';

// For Navigation Purpose
import signUp from './Activities/SignUp'
import Home from './Activities/Home'






// Creating Login Activity.
class LoginActivity extends Component {
 
  // Setting up Login Activity title.
  static navigationOptions =
  {

    title: '      Login',
    headerStyle:{
  
      backgroundColor:'#4e4463'
    },
    headerTintColor:'#ffff'
  };
 
  constructor(props) {
 
    super(props)
    this.state = {
 
      UserEmail: '',
      UserPassword: '',
      
     
    }
  }

 
 
  UserLoginFunction = () =>{
 
    const { UserEmail }  = this.state ;
    const { UserPassword }  = this.state ;
 
   

    fetch('http://192.168.10.7/milkuApis/LogIn.php', {
      
      method: 'POST',
      headers: {
        
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
 
        email: UserEmail,
        password: UserPassword
      })
    }).then((response) => response.json())
      .then((responseJson) => {
 
        // If server response message same as Data Matched
        if(responseJson === 'Data Matched')
        {

          //Then open Profile activity and send user email to profile activity.
          //this.props.navigation.navigate('Second', { Email: UserEmail });

          //on next activity to recieve previous acivity's email
          //<Text style = {styles.TextComponentStyle}> { this.props.navigation.state.params.Email } </Text>
          this.props.navigation.navigate('HOME');       
        }

        

        else{
 
          Alert.alert(responseJson);
         
        }
 
      }).catch((error) => {
        
        console.error(error);
      });
  }


  
 
  render() {

    
    
    return (

     
 
      <View style={styles.MainContainer}>

       
 
        <Text style= {styles.TextComponentStyle}>Milku</Text>
        <Text >Login</Text>
  
        <TextInput
          
          // Adding hint in Text Input using Place holder.
          placeholder="Enter Email"
 
          onChangeText={UserEmail => this.setState({UserEmail})}
 
          // Making the Under line Transparent.
          underlineColorAndroid='transparent'
 
          style={styles.TextInputStyleClass}
        />
 
        <TextInput
          
          // Adding hint in Text Input using Place holder.
          placeholder="Enter Password"
 
          onChangeText={UserPassword => this.setState({UserPassword})}
 
          // Making the Under line Transparent.
          underlineColorAndroid='transparent'
 
          style={styles.TextInputStyleClass}
 
          secureTextEntry={true}
        />
 
        <TouchableOpacity
          style={styles.LoginBtn}
          activeOpacity = { .7 }
          onPress={()=>this.UserLoginFunction()}>
            <Text style={styles.LoginText} >Log In</Text>
        </TouchableOpacity>
        <Text>Doesn't have an Account?</Text><Text onPress={()=>this.props.navigation.navigate('SIGNUP')} style={{color: 'blue'}}>Sign Up</Text><Text>instead</Text>
       
       
     
      </View>
            
    );
  }

   

}
 
const styles = StyleSheet.create({
 
  MainContainer :{
    
    flex:1,
    margin: 10,
  },

 

  LoginBtn: {
      
    marginTop: 0,
    paddingTop: 15,
    paddingBottom: 15,
    marginLeft: 80,
    marginRight: 80,
    backgroundColor:'#4e4463',
    borderWidth: 3,
    borderColor: '#4e4463',
    zIndex: 11,
    left: 220,
    opacity: 0.8,
    width: 90,
    height: 40,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    elevation: 8
  },

  LoginText: {

    color: '#ffff',
    fontWeight: 'bold',
    textAlign: 'center',
  },

  TextInputStyleClass: {
  
    textAlign: 'center',
    marginBottom: 7,
    height: 40,
    borderWidth: 1,
    borderColor: '#2196F3',
    borderRadius: 5 ,
  },

  
 
 TextComponentStyle: {
  
    fontSize: 20,
    color: "#000",
    textAlign: 'center', 
    marginBottom: 15,
    fontWeight: 'bold'
  },

  
});

// For Navigation Purpose
const MainNavigator = createStackNavigator({
  
  LOGIN: {screen: LoginActivity},
  SIGNUP: {screen: signUp},
  HOME: {screen: Home},
  
});

const App = createAppContainer(MainNavigator);

export default App;