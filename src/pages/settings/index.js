import * as React from 'react';
import { View, Text,TouchableHighlight } from 'react-native';
import auth from '@react-native-firebase/auth';

function SettingsScreen() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'#333333' }}>

        <TouchableHighlight title={'Sing In'} style={{
          backgroundColor: '#33C4FF',
          borderRadius: 30,
          width: 100,
          height: 40,
          alignItems: 'center',
          alignSelf: 'center',
          justifyContent: 'center'
        }}
          onPress={() => {

            auth()
            .signOut()
            .then(() => console.log('User signed out!'));

          }}>
          <Text style={{ color: 'white', fontSize: 20 }}>Sign Out</Text>
        </TouchableHighlight>

      </View>
    );
  }

export default SettingsScreen;