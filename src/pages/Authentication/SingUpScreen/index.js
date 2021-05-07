import * as React from 'react';
import { TouchableHighlight, Text, TextInput, View, StyleSheet } from 'react-native';
import auth from '@react-native-firebase/auth';

function SignInScreen({ navigation  }) {

  const [username, setUserName] = React.useState('');
  const [password, setPassword] = React.useState('');

  const login = ()=>  
  {

    auth()
    .createUserWithEmailAndPassword(username, password)
    .then(() => {
      console.log('User account created & signed in!');
    })
    .catch(error => {
      if (error.code === 'auth/email-already-in-use') {
        console.log('That email address is already in use!');
      }
  
      if (error.code === 'auth/invalid-email') {
        console.log('That email address is invalid!');
      }
  
      console.error(error);
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
          <Text style={{ color: 'white', fontSize: 20 }}>Sign Up</Text>
        </TouchableHighlight>

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
