import React, { Component } from 'react';
 
import { Alert,StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';









// Creating Login Activity.
class SignUp extends Component {
 
  // Setting up Login Activity title.
  static navigationOptions =
  {

    title: '      SignUp',
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
      
      
    }
  }

  
 
  UserRegistrationFunction = () =>{
 
 
    const { FullName }  = this.state ;
    const { UserEmail }  = this.state ;
    const { UserPassword }  = this.state ;
    
    
    
   fetch('http://192.168.10.7/milkuApis/SignUp.php', {
     method: 'POST',
     headers: {
       'Accept': 'application/json',
       'Content-Type': 'application/json',
     },
     body: JSON.stringify({
    
       fullname: FullName,
    
       email: UserEmail,
    
       password: UserPassword
    
     })
    
   }).then((response) => response.json())
         .then((responseJson) => {
    
   // Showing response message coming from server after inserting records.
           Alert.alert(responseJson);
    
         }).catch((error) => {
           console.error(error);
         });
    
    
     }


  
 
  render() {

    
    
    return (

 
      <View style={styles.MainContainer}>

       
 
        <Text style= {styles.TextComponentStyle}>Milku</Text>
        <Text >SignUp</Text>

        <TextInput
          
          // Adding hint in Text Input using Place holder.
          placeholder="Enter Full Name"
 
          onChangeText={FullName => this.setState({FullName})}
 
          // Making the Under line Transparent.
          underlineColorAndroid='transparent'
 
          style={styles.TextInputStyleClass}
        />
  
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
          onPress={()=>this.UserRegistrationFunction()}>
            <Text style={styles.LoginText} >Sign Up</Text>
        </TouchableOpacity>
        <Text>Already have an Account?</Text><Text onPress={()=>this.props.navigation.navigate('LOGIN')} style={{color: 'blue'}}>Log In</Text><Text>instead</Text>
       
       
      {/* </View> */}
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




export default SignUp;