import React from 'react'
import AuthNavigator from './AuthNavigator'

const App = () => {
  return <AuthNavigator/>
}

export default App

/* import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import auth from '@react-native-firebase/auth';
import SingInScreen from './src/pages/Authentication/SingInScreen';
import Routes from './Routes.js';
import AuthenticationRoutes from './src/pages/Authentication';
//import AsyncStorage from '@react-native-async-storage/async-storage';

import { EventRegister } from 'react-native-event-listeners'



function App() {
  // Set an initializing state whilst Firebase connects
  // if false -> Signin
  var screen;
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState({});

  // Handle user state changes
  function onAuthStateChanged(user) {
    console.log('user  :', user)
    setUser(user);
    if (true) {
      screen = true
    } else {
      screen = false
    }
  }

  auth().onAuthStateChanged(onAuthStateChanged);

  return (



  )
  
}

export default App;

 */


/* import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import auth from '@react-native-firebase/auth';
import SingInScreen from './src/pages/Authentication/SingInScreen';
import Routes from './Routes.js';
//import AsyncStorage from '@react-native-async-storage/async-storage';

import { EventRegister } from 'react-native-event-listeners'



function App() {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState({});

  // Handle user state changes
  function onAuthStateChanged(user) {
    console.log('user  :', user)
    setUser(user);
    if (!user) {
      EventRegister.emit('userAuthEvent', false)
    } else {
      EventRegister.emit('userAuthEvent', true)
    }
    // if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);

    return subscriber; // unsubscribe on unmount
  }, []);

  return <Routes></Routes>;

}
export default App; 

*/