import React from 'react';
import { View, Text,Button } from 'react-native';
import database from '@react-native-firebase/database';
import { SafeAreaProvider } from 'react-native-safe-area-context';

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
      <SafeAreaProvider style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'#ffffcf' }}>
        <Text style={{color:'black'}}>Chats Screen</Text>
    

        <Button
        title="Sign Out"
        onPress={signOut}
      />
      </SafeAreaProvider>
    );
  }

export default ChatScreen;