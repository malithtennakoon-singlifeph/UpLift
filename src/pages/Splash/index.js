import * as React from 'react';
import { View, Text } from 'react-native';

function SplashScreen() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'#00B1A0' }}>
        <Text>UpLift</Text>
        <Text>Loading...</Text>
      </View>
    );
  }

export default SplashScreen;