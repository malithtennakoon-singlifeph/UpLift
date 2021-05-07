import * as React from 'react';
import { TouchableHighlight, Text, TextInput, View, StyleSheet } from 'react-native';
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

function SignInScreen({ navigation }) {

  

 const [username, setUserName] = React.useState('');
 const [password, setPassword] = React.useState('');


  const login = ()=>  
  {
    auth().signInWithEmailAndPassword(username, password)
    .then((userCredential) => {

      var user = userCredential.user;
      console.log("Signed in")
      console.log("Authenticated successfully",user)

    })
    .catch((error) => {
      var errorCode = error.code;
      console.error(errorCode)
      var errorMessage = error.message;
      console.error(errorMessage)
    });

  }


  return (
    <View style={{ flex: 1, justifyContent: 'center', backgroundColor: '#03DAC5' }}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', margin: 'auto', }}>
        <Text style={{ fontSize: 80 }}>UpLift</Text>
      </View>

      <View style={{ flex: 1, justifyContent: 'center', marginLeft: '10%', marginRight: '10%' }}>
        <TextInput style={styles.InputStyle} placeholder={"Username"}
        onChangeText={text => setUserName(text)}
        textContentType={'username'} />

        <TextInput style={styles.InputStyle} onChangeText={(val) => console.log(val)}
          secureTextEntry={true}
          placeholder={"Password"}
          textContentType={'password'} 
          onChangeText={text => setPassword(text)}
          />
          
        <TouchableHighlight title={'Sing In'} style={{
          backgroundColor: '#33C4FF',
          borderRadius: 30,
          width: 100,
          height: 40,
          alignItems: 'center',
          alignSelf: 'center',
          justifyContent: 'center'
        }}
          onPress={() => {login()}}>
          <Text style={{ color: 'white', fontSize: 20 }}>Sign In</Text>
        </TouchableHighlight>

        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
        
          <Text onPress={() => navigation.navigate('ForgetPassword')} style={{ margin: 10 }}>Forget Password</Text>

          <Text onPress={() => navigation.navigate('SignUp')} style={{ margin: 10 }}>Sing Up</Text>
          
        </View>

      </View>
    </View>
  );


}
const styles = StyleSheet.create({
  InputStyle: {
    borderRadius: 30, borderColor: 'gray', borderWidth: 2, padding: 10, margin: 10
  },
});
export default SignInScreen;
