import * as React from 'react';
import { View, Text,Button } from 'react-native';

function ChatScreen({navigation}) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'#00B1A0' }}>
        <Text>Chats Screen</Text>
        <Button
        title="Go to Home"
        onPress={() => navigation.navigate('Home')}
      />
      </View>
    );
  }

export default ChatScreen;