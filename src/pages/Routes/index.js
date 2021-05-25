import React, { useState } from 'react';
import { View, Text ,Image,StyleSheet} from 'react-native';
import {NavigationContainer, DrawerActions} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ProgressBar from 'react-native-progress/Bar';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { EventRegister } from 'react-native-event-listeners';
import styles from './styles.js';
import { Icon } from 'react-native-elements'
import auth from '@react-native-firebase/auth';

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
import CustomDrawer from '../DrawerScreen';

const HomeStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();
const Drawer = createDrawerNavigator();

function ProfileTabs(){
  return(
    <Tab.Navigator tabBarOptions={{
      activeTintColor:'black',
      inactiveTintColor:'grey',
      labelStyle: { fontSize: 18, textTransform:'capitalize', fontWeight:'normal' },
      indicatorStyle: {backgroundColor:'#FFFF8D'},
      style: { backgroundColor: '#ffffcf' },
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
      <Text style={{ color:"black"}}>Experiance  8.1</Text>
      <ProgressBar style={{alignSelf:'center',marginTop:5 }} 
        color={'#c8b900'} height={8} borderWidth={0}
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
            headerStyle:{height:150,backgroundColor:'#fff59d', elevation:0,shadowOpacity:0}})}
        />
    </ProfileStack.Navigator>
  );
}

function HomeScreenTabs(){
  return(
    <Tab.Navigator tabBarOptions={{
      activeTintColor:'black',
      inactiveTintColor:'#48494B',
      labelStyle: { fontSize: 18, textTransform:'capitalize', fontWeight:'normal' },
      indicatorStyle: {backgroundColor: '#cabf45'},
      tabStyle: { backgroundColor: '#ffffa8', borderRadius:50,margin:5},
      style: { backgroundColor: '#fff176',elevation:0,shadowOpacity:0},
    }}>
      <Tab.Screen name="OngoinProjectsScreen" component={HomeScreenOngoing} options={{ title: 'OnGoing' }}/>
      <Tab.Screen name="FinishedProjectsScreen" component={HomeScreenFinished} options={{ title: 'Finished' }}/>
    </Tab.Navigator>
  );
}

function MainTabs() {
    return (
      <Tab.Navigator tabBarOptions={{
        activeTintColor:'black',
        inactiveTintColor:'grey',
        labelStyle: { fontSize: 18, textTransform:'capitalize', fontWeight:'normal' },
        indicatorStyle: {backgroundColor:'#cabf45'},
        style: { backgroundColor: '#fff176',elevation:0,shadowOpacity:0 },
      }}>
        <Tab.Screen name="Home" component={HomeScreenTabs} />
        <Tab.Screen name="Profile" component={ProfileStackScreen} />
        <Tab.Screen name="Chats" component={ChatScreen} />
      </Tab.Navigator>
    );
}

function MyTabs(){
  return(
    <HomeStack.Navigator>

    <HomeStack.Screen name="Home" component={MainTabs} 
    options={({ navigation }) => ({title: 'UpLift',
        headerStyle:{backgroundColor:'#fff176', elevation:0,shadowOpacity:0},
        headerTitleStyle:{fontWeight:'normal', fontSize:30,color:'black'},
        headerLeft: () => (
        <View style={styles.home}>
        <Icon style={{marginLeft:10}} name="menu" 
        size={40} color="black" 
        onPress={()=>{navigation.dispatch(DrawerActions.openDrawer())}} />
        </View>
        ),
    })}
    />
      <HomeStack.Screen name="Settings" component={SettingsScreen} />
      <HomeStack.Screen name="AddProjects" component={AddProjects}
        options={() => ({title: 'UpLift',
        headerShown: false,
        headerStyle:{backgroundColor:'#fff176', elevation:0,shadowOpacity:0} })}/>
      <HomeStack.Screen name="Project" component={HomeScreenOngoingProject} />
  </HomeStack.Navigator>
  )
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
          <Drawer.Navigator drawerContent={(props) => <CustomDrawer {...props} screenOptions={{drawerHideStatusBarOnOpen:true }} />}>
            <Drawer.Screen name="Home" component={MyTabs}/>
          </Drawer.Navigator>
        :  
          <HomeStack.Navigator>
            <HomeStack.Screen
            options={{title: 'Welcome',
            headerShown: false,
            headerStyle:{backgroundColor:'black', elevation:0,shadowOpacity:0} }}
            name="SignIn" component={SignInScreen}/>

            <HomeStack.Screen
            options={{title: 'SignUp',
            headerStyle:{backgroundColor:'#ffffcf', elevation:0,shadowOpacity:0} }}
            name="SignUp" component={SignUpScreen}/>

            <HomeStack.Screen 
            options={{title: 'Forget Password',
            headerStyle:{backgroundColor:'#ffffcf', elevation:0,shadowOpacity:0} }}
            name="ForgetPassword" component={ForgetPasswardScreen}/>
          </HomeStack.Navigator>
        }
        </NavigationContainer>
    );
  }
}
//onPress={() => {navigation.navigate('Settings')}}









/*

import React, { useState } from 'react';
import { View, Text ,Image,StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ProgressBar from 'react-native-progress/Bar';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { EventRegister } from 'react-native-event-listeners';
import styles from './styles.js';
import { Icon } from 'react-native-elements'
import auth from '@react-native-firebase/auth';

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
const Drawer = createDrawerNavigator();

function ProfileTabs(){
  return(
    <Tab.Navigator tabBarOptions={{
      activeTintColor:'black',
      inactiveTintColor:'grey',
      labelStyle: { fontSize: 18, textTransform:'capitalize', fontWeight:'normal' },
      indicatorStyle: {backgroundColor:'#FFFF8D'},
      style: { backgroundColor: '#ffffcf' },
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
      <Text style={{ color:"black"}}>Experiance  8.1</Text>
      <ProgressBar style={{alignSelf:'center',marginTop:5 }} 
        color={'#c8b900'} height={8} borderWidth={0}
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
            headerStyle:{height:150,backgroundColor:'#fff59d', elevation:0,shadowOpacity:0}})}
        />
    </ProfileStack.Navigator>
  );
}

function HomeScreenTabs(){
  return(
    <Tab.Navigator tabBarOptions={{
      activeTintColor:'black',
      inactiveTintColor:'#48494B',
      labelStyle: { fontSize: 18, textTransform:'capitalize', fontWeight:'normal' },
      indicatorStyle: {backgroundColor: '#cabf45'},
      tabStyle: { backgroundColor: '#ffffa8', borderRadius:50,margin:5},
      style: { backgroundColor: '#fff176',elevation:0,shadowOpacity:0},
    }}>
      <Tab.Screen name="OngoinProjectsScreen" component={HomeScreenOngoing} options={{ title: 'OnGoing' }}/>
      <Tab.Screen name="FinishedProjectsScreen" component={HomeScreenFinished} options={{ title: 'Finished' }}/>
    </Tab.Navigator>
  );
}

function MainTabs() {
    return (
      <Tab.Navigator tabBarOptions={{
        activeTintColor:'black',
        inactiveTintColor:'grey',
        labelStyle: { fontSize: 18, textTransform:'capitalize', fontWeight:'normal' },
        indicatorStyle: {backgroundColor:'#cabf45'},
        style: { backgroundColor: '#fff176',elevation:0,shadowOpacity:0 },
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
              options={({ navigation }) => ({title: 'UpLift',
              headerStyle:{backgroundColor:'#fff176', elevation:0,shadowOpacity:0},
              headerTitleStyle:{fontWeight:'normal', fontSize:30,color:'black'},
              headerLeft: () => (
              <View style={styles.home}>
              <Icon
              name='menu'
              type='ionicon'
              color='black'
              onPress={() => {navigation.navigate('Settings')}} />
              </View>
              ), })
              } component={MainTabs} />
            <HomeStack.Screen 
            
            options={() => ({title: 'UpLift',
            headerStyle:{backgroundColor:'#fff176', elevation:0,shadowOpacity:0},
            headerRight: () => (
              <View style={styles.home}>
              <Icon
              name='log-out-outline'
              type='ionicon'
              color='black'
              onPress={() => {auth()
                .signOut()
                .then(() => console.log('User signed out!'));}} />
              </View>
              ), })
          }
            
            name="Settings" component={SettingsScreen} />
            <HomeStack.Screen
              
            options={() => ({title: 'UpLift',
              headerStyle:{backgroundColor:'#fff176', elevation:0,shadowOpacity:0} })}
              
            
            name="AddProjects" component={AddProjects}  screenOptions={{ headerShown: false  }}/>
            <HomeStack.Screen name="Project" component={HomeScreenOngoingProject} />
          </HomeStack.Navigator>
        :  
          <HomeStack.Navigator>
            <HomeStack.Screen
            options={() => ({title: 'Welcome',
            headerStyle:{backgroundColor:'#ffffcf', elevation:0,shadowOpacity:0} })}
            name="SignIn" component={SignInScreen}/>

            <HomeStack.Screen
            options={() => ({title: 'SignUp',
            headerStyle:{backgroundColor:'#ffffcf', elevation:0,shadowOpacity:0} })}
            name="SignUp" component={SignUpScreen}/>

            <HomeStack.Screen 
            options={() => ({title: 'Forget Password',
            headerStyle:{backgroundColor:'#ffffcf', elevation:0,shadowOpacity:0} })}
            name="ForgetPassword" component={ForgetPasswardScreen}/>
          </HomeStack.Navigator>
        }
        </NavigationContainer>
    );
  }
}
//onPress={() => {navigation.navigate('Settings')}}

*/