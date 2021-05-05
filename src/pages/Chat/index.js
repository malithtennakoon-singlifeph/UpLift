import * as React from 'react';
import { View, Text,Button } from 'react-native';
import auth from '@react-native-firebase/auth';

function ChatScreen({navigation}) {

  const signOut = ()=>  
  {
    auth().signOut().then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
  }

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'#00B1A0' }}>
        <Text>Chats Screen</Text>
        <Button
        title="Sign Out"
        onPress={signOut}
      />
      </View>
    );
  }

export default ChatScreen;