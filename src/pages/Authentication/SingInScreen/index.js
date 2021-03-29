
import * as React from 'react';
//import { View, Text,TextInput,TouchableHighlight } from 'react-native';
import {TouchableHighlight,Button, Text, TextInput, View } from 'react-native';
//import AsyncStorage from '@react-native-community/async-storage';

function SignInScreen({ navigation }){

      
return (
    <View style={{flex:1,justifyContent:'center',backgroundColor:'#03DAC5'}}>
        <View style={{flex:1,justifyContent:'center',alignItems:'center',margin:'auto',}}>
              <Text style={{fontSize:60}}>UpLift</Text>
            </View>
            <View style={{flex:1,justifyContent:'center', marginLeft:'10%',marginRight:'10%'}}>
              <Text style={{ fontSize:20 }}>Username</Text>
              <TextInput style={{borderBottomWidth:2,}}/>
              <Text style={{ fontSize:20 }}>Password</Text>
              <TextInput style={{borderBottomWidth:2,}} onChangeText={(val)=>console.log(val)} secureTextEntry={true}/>
          <Button title={'Sing In'} style={{
                backgroundColor:'#33C4FF',
                margin:'25%',
                borderRadius:30,
                alignItems:'center'}}
                onPress={ () => navigation.navigate('myMModel') }>
              <Text style={{color:'white',fontSize:20}}>SignIn</Text>
          </Button>

          <View style={{flexDirection:'row',justifyContent:'center', alignItems:'center'}}>
            <Text onPress={() => navigation.navigate('Forget Password')} style={{margin:10}}>Forget Password</Text>
            <Text onPress={() => navigation.navigate('Sing Up')} style={{margin:10}}>Sing Up</Text> 
          </View>

      </View>
    </View>
        );
}
export default SignInScreen;


/* import React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native';

export default ({ navigation }) => (
  <View>
    <Button title="Sign In" onPress={() => alert('todo!')} />
    <Button title="Sign Up" onPress={() => navigation.push('SignUp')} />
  </View>
); */