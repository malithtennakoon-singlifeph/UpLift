import React, { useState } from 'react';
import { View, Text ,Image,StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ProgressBar from 'react-native-progress/Bar';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { EventRegister } from 'react-native-event-listeners';
import styles from './styles.js';

import SignInScreen from '../Authentication/SingInScreen';
import SignUpScreen from '../Authentication/SingUpScreen';
import ChatScreen from '../Chat';
import HomeScreenOngoing from '../home/OnGoing';
import HomeScreenFinished from '../home/Finished';
import AddProjects from '../home/AddProjects';
import ProfileReportScreen from '../Profile/Report';
import ProfileRatingScreen from '../Profile/Ratings';
import SettingsScreen from '../settings';
import HomeScreenOngoingProject from '../home/OnGoing/Projects';
import SplashScreen from '../Splash';
import ForgetPasswardScreen from '../Authentication/ForgotPasswordScreen';

const HomeStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

function ProfileTabs(){
  return(
    <Tab.Navigator tabBarOptions={{
      activeTintColor:'white',
      inactiveTintColor:'grey',
      labelStyle: { fontSize: 18, textTransform:'capitalize', fontWeight:'normal' },
      indicatorStyle: {backgroundColor:'#FFFF8D'},
      style: { backgroundColor: '#333333' },
    }}>
      <Tab.Screen name="ProfileRatingScreen" component={ProfileRatingScreen} options={{ title: 'Ratings' }}/>
      <Tab.Screen name="ProfileReportScreen" component={ProfileReportScreen} options={{ title: 'Report' }}/>
    </Tab.Navigator>
  );
}

function LogoTitle() {
  return (
    <View style={{justifyContent:'center',alignItems:'center',}}>
      <Image
        style={styles.imageProfile}
        source={require('../../img/1.jpg')}
      />
      <Text style={{ color:"white"}}>Experiance  8.1</Text>
      <ProgressBar style={{alignSelf:'center',marginTop:5 }} 
        color={'#03DAC5'} height={8} borderWidth={0}
        borderRadius={2} unfilledColor={'white'}
        progress={0.9} width={130} />
    </View>
  );
}

function ProfileStackScreen(){
  return(
    <ProfileStack.Navigator>
        <ProfileStack.Screen 
          name="Profile"
          component={ProfileTabs}
          options={({ navigation, route }) => ({title: '',
            headerTitle: props => <LogoTitle {...props} />,
            headerStyle:{height:150,backgroundColor:'#333333', elevation:0,shadowOpacity:0}})}
        />
    </ProfileStack.Navigator>
  );
}

function HomeScreenTabs(){
  return(
    <Tab.Navigator tabBarOptions={{
      activeTintColor:'white',
      inactiveTintColor:'#48494B',
      labelStyle: { fontSize: 18, textTransform:'capitalize', fontWeight:'normal' },
      indicatorStyle: {backgroundColor: '#03DAC5'},
      tabStyle: { backgroundColor: '#00B1A0', borderRadius:50,margin:5},
      style: { backgroundColor: '#03DAC5'},
    }}>
      <Tab.Screen name="OngoinProjectsScreen" component={HomeScreenOngoing} options={{ title: 'OnGoing' }}/>
      <Tab.Screen name="FinishedProjectsScreen" component={HomeScreenFinished} options={{ title: 'Finished' }}/>
    </Tab.Navigator>
  );
}

function MyTabs() {
    return (
      <Tab.Navigator tabBarOptions={{
        activeTintColor:'white',
        inactiveTintColor:'grey',
        labelStyle: { fontSize: 18, textTransform:'capitalize', fontWeight:'normal' },
        indicatorStyle: {backgroundColor:'#FFFF8D'},
        style: { backgroundColor: '#03DAC5' },
      }}>
        <Tab.Screen name="Home" component={HomeScreenTabs} />
        <Tab.Screen name="Profile" component={ProfileStackScreen} />
        <Tab.Screen name="Chats" component={ChatScreen} />
      </Tab.Navigator>
    );
}

function isLoading(){
  return false;
}

export default function Routes() {

  const [loggedIn, isUserLoggedIn] = useState(true);
  this.listener = EventRegister.addEventListener('userAuthEvent', (data) => {
    console.log("User auth: ",data);
    isUserLoggedIn(data);
  })


  if(isLoading()){
    return <SplashScreen/>
  }else{
      return(
        <NavigationContainer>
        {loggedIn ? 
          <HomeStack.Navigator >
            <HomeStack.Screen 
              name="Home" 
              options={({ navigation, route }) => ({title: 'UpLift',
              headerStyle:{backgroundColor:'#03DAC5', elevation:0,shadowOpacity:0},
              headerTitleStyle:{fontWeight:'normal', fontSize:30,color:'white'},
              headerRight: () => (
              <View style={styles.home}>
                <TouchableHighlight underlayColor={'#03DAC5'} onPress={() => {navigation.navigate('Settings')}}>
                <Image
                style={styles.image}
                source={require( '../../img/settings.png')}
                />
                </TouchableHighlight>
              </View>
              ), })
              } component={MyTabs} />
            <HomeStack.Screen name="Settings" component={SettingsScreen} />
            <HomeStack.Screen name="AddProjects" component={AddProjects}  screenOptions={{ headerShown: false  }}/>
            <HomeStack.Screen name="Project" component={HomeScreenOngoingProject} />
          </HomeStack.Navigator>
        :  
          <HomeStack.Navigator>
            <HomeStack.Screen name="SignIn" component={SignInScreen}/>
            <HomeStack.Screen name="SignUp" component={SignUpScreen}/>
            <HomeStack.Screen name="ForgetPassword" component={ForgetPasswardScreen}/>
          </HomeStack.Navigator>
        }
        </NavigationContainer>
    );
  }
}
