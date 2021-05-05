import * as React from 'react';
import {StyleSheet,ScrollView, View, Text } from 'react-native';
import { WebView } from 'react-native-webview';
import auth from '@react-native-firebase/auth';

function HomeScreenOngoingProject({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'#00B1A0' }}>

      <WebView source={{ html: '<script src="https://www.gstatic.com/firebasejs/ui/4.8.0/firebase-ui-auth.js"></script><link type="text/css" rel="stylesheet" href="https://www.gstatic.com/firebasejs/ui/4.8.0/firebase-ui-auth.css" />' }} />

      </View>
    );
}

const styles = StyleSheet.create({
  box:{
    flex:1,
  },

});

export default HomeScreenOngoingProject;




/* 
<Icon


/* import * as React from 'react';
import { TouchableHighlight, Text, TextInput, View, StyleSheet } from 'react-native';
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

//import AsyncStorage from '@react-native-community/async-storage';
function SignInScreen({ navigation }) {

  const [username, setUserName] = React.useState('');
  const [password, setPassword] = React.useState('');

  React.useEffect(()=>{

  },[]);

  const login = ()=>  
  {
   auth().
   signInWithEmailAndPassword('malitharjuna@gmail.com', 'malith1998')
   .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
  });

    // auth()
    // .createUserWithEmailAndPassword(username, password)
    // .then(() => {
    //   console.log('User account created & signed in!');
    // })
    // .catch(error => {
    //   if (error.code === 'auth/email-already-in-use') {
    //     console.log('That email address is already in use!');
    //   }
    //   if (error.code === 'auth/invalid-email') {
    //     console.log('That email address is invalid!');
    //   }

    //   // console.error(error);
    // }); 
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
 */