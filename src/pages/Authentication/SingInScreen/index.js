import React, { useState, useEffect } from "react";
import {TouchableHighlight, Text, TextInput,ScrollView, View, StyleSheet } from 'react-native';
import auth from '@react-native-firebase/auth';

function SignInScreen({ navigation }) {

  

 const [username, setUserName] = useState('');
 const [password, setPassword] = useState('');


  const login = ()=>  
  {
    if(username===""){
      alert("Please Enter Username")
    }else if(password===""){
      alert("Please Enter Password")
    }else{
      auth().signInWithEmailAndPassword(username, password)
      .then((userCredential) => {

        var user = userCredential.user;
        console.log("Signed in")
        console.log("Authenticated successfully",user)

      })
      .catch((error) => {
        if (error.code === 'auth/network-request-failed') {
          alert("Bad internet connection!")
          console.log('Bad internet connection!')
          
        }

        if (error.code === 'auth/user-not-found') {
          alert("user not found!")
          console.log('user not found!')
          
        }

        if (error.code === 'auth/wrong-password') {
          alert("wrong password!")
          console.log('wrong password!')
  
        }

      });
    }
    
    

  }
  

  return (

      <View style={{flex:1,backgroundColor:'white'}}>
        <View style={{ flex: 1, justifyContent: 'center', borderRadius:30, margin:40, alignItems: 'center', backgroundColor:'#88DEB0' }}>
          <Text style={{ fontSize: 80 }}>UpLift</Text>
        </View>

        <View style={{flex:1}}>
        
          <TextInput style={styles.InputStyle} placeholder={"Username"}
          textAlign='center'
          placeholderTextColor='grey'
          onChangeText={text => setUserName(text)} />


          <TextInput style={styles.InputStyle} onChangeText={(val) => console.log(val)}
            secureTextEntry={true}
            placeholder={"Password"}
            textAlign='center'
            placeholderTextColor='grey'
            onChangeText={text => setPassword(text)} />
            
          <TouchableHighlight title={'Sing In'} style={{
            backgroundColor: '#152069',
            borderRadius: 30,
            width: 100,
            height: 40,
            alignItems: 'center',
            alignSelf: 'center',
            margin:10,
            justifyContent: 'center'
          }}
            onPress={() => {login()}}>
            <Text style={{ color: 'white', fontSize: 20, fontWeight:'bold' }}>Sign In</Text>
          </TouchableHighlight>

          <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center',  }}>
            <Text onPress={() => navigation.navigate('ForgetPassword')} style={{ margin: 10, fontWeight:'bold' }}>Forget Password</Text>
            <Text onPress={() => navigation.navigate('SignUp')} style={{ margin: 10, fontWeight:'bold' }}>Sign Up</Text>
          </View>


        </View>

        
      </View>

  );


}
const styles = StyleSheet.create({
  InputStyle: {
    borderRadius: 30, borderColor: 'gray', borderWidth: 2, padding: 10, margin: 10, marginRight:30, marginLeft:30, color:'black',
  },
});
export default SignInScreen;
