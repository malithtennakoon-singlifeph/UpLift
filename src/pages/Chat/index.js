import React from 'react';
import { View, Text,Button } from 'react-native';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';

function ChatScreen({navigation}) {

  

  const signOut = ()=>  
  {
    database()
          .ref('/Users/3')
          .set({
            first_name: 'userFirstName',
            last_name: 'userFamilyName',
            address: 'userAddress',
          })
          .then(() => console.log('User is registered in firebase'));
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