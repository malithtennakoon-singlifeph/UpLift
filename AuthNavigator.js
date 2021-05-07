import React, { useState, useEffect,createContext  } from 'react';
import { View, Text } from 'react-native';
import auth from '@react-native-firebase/auth';
import Routes from './Routes.js';
import AuthenticationRoutes from './src/pages/Authentication';
import { EventRegister } from 'react-native-event-listeners'

export const AuthContext = createContext(null)

export default function AuthNavigator() {
    const [initializing, setInitializing] = useState(true)
    const [user, setUser] = useState(null)
  
    // Handle user state changes
    function onAuthStateChanged(result) {
      setUser(result)
      console.log('user  :', result)
      if (initializing) setInitializing(false)
    }
  
    useEffect(() => {
      const authSubscriber = auth().onAuthStateChanged(onAuthStateChanged)
      // unsubscribe on unmount
      return authSubscriber
    }, [])
  
    if (initializing) {
      return null
    }
  
    return user ? (
      <AuthContext.Provider value={user}>
        <Routes />
      </AuthContext.Provider>
    ) : (
      <AuthenticationRoutes />
    )
  }
