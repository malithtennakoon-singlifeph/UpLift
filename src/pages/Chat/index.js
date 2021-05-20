import React from 'react';
import { View, Text,Button } from 'react-native';
import database from '@react-native-firebase/database';
import {Icon, FAB } from 'react-native-elements';

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
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'#333333' }}>
        <Text style={{color:'white'}}>Chats Screen</Text>
      
        <FAB
        placement="right"
        size="large"
        color="yellow"
        onPress={() => console.log('FAB button pressed')}
        icon={
          <Icon
          name='ios-american-football'
          type='ionicon'
          color='#517fa4'
          />
        }
        />

        <Button
        title="Sign Out"
        onPress={signOut}
      />
      </View>
    );
  }

export default ChatScreen;