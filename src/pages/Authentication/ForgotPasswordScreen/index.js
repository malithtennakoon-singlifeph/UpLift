import * as React from 'react';
import { View, Text, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import auth from '@react-native-firebase/auth';

function ForgetPasswardScreen({ navigation }) {

  const [username, setUserName] = React.useState("");

  function Verify(){
    if(username===""){
      alert("Please Enter Your Email!")
    }else{
      Rest()
    }
  }

  function Rest(){
      auth().sendPasswordResetEmail(username)
        .then(function (user) {
          alert(
            "Please check your email",
            "An email has been sent to your accout to reset your password!",
            [
              {
                text: "Cancel",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
              },
              { text: "OK", onPress: () => console.log("OK Pressed") }
            ]
          );
        }).catch(function (e) {
          console.log(e)
        })
  }


  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'#ffffcf' }}>

    <TextInput style={{borderRadius: 30, width:'80%', borderColor: 'gray', marginBottom:50,
                       color:'black',
                       borderWidth: 2, padding: 10, margin: 10}} 
                       
                       placeholder={"Enter your Email"}
        placeholderTextColor='grey'
        onChangeText={text => setUserName(text)} />
    
    <View>
      <TouchableOpacity style={{
        backgroundColor:'#cbc693',
        height:150,
        width:150,
        borderRadius:100,
        alignItems:'center',
        justifyContent:'center'

      }}
      onPress={Verify}
      >
          <Text style={{fontSize:30}}>Reset</Text>
      </TouchableOpacity>
    </View>
    
    
  </View>
  );
}

export default ForgetPasswardScreen;