import 'react-native-gesture-handler';
import * as React from 'react';
import { View, Text ,Image } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ProgressBar from 'react-native-progress/Bar';

import ChatScreen from './src/pages/Chat';
import HomeScreenOngoing from './src/pages/home/OnGoing';
import HomeScreenFinished from './src/pages/home/Finished';
import ProfileReportScreen from './src/pages/Profile/Report';
import ProfileRatingScreen from './src/pages/Profile/Ratings';
import SettingsScreen from './src/pages/settings';
import HomeScreenOngoingProject from './src/pages/home/OnGoing/Projects';

import { TouchableHighlight } from 'react-native-gesture-handler';


/* const HomeStack = createStackNavigator();
const ProfileScreenStack = createStackNavigator();
const ProfileScreenTabs = createMaterialTopTabNavigator();
const HomeScreenNavigationTab = createMaterialTopTabNavigator()
const MainTab = createMaterialTopTabNavigator(); */

const HomeStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();
const ProjectStack = createStackNavigator();



function ProfileTabs(){
  return(
    <Tab.Navigator tabBarOptions={{
      activeTintColor:'white',
      inactiveTintColor:'gray',
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
        style={{ width: 100, height: 100, alignSelf:'center',borderRadius:50, marginTop:5, marginBottom:5 }}
        source={require('./src/pages/Profile/img/1.jpg')}
      />
      <Text style={{ color:"white"}}>
      Experiance  8.1</Text>
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
          headerStyle:{height:150,backgroundColor:'#333333', elevation:0,shadowOpacity:0,
          
        }
          })}/>
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
        inactiveTintColor:'#48494B',
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


export default function Routes() {
  return (
    <NavigationContainer>
      <HomeStack.Navigator>
        <HomeStack.Screen 
          name="Home" 
          options={({ navigation, route }) => ({title: 'UpLift',
          headerStyle:{backgroundColor:'#03DAC5', elevation:0,shadowOpacity:0},
          headerTitleStyle:{fontWeight:'normal', fontSize:30},
          headerRight: () => (
          <View style={{padding:10}}>
            <TouchableHighlight underlayColor={'#03DAC5'} onPress={() => {navigation.navigate('Settings')}}>
            <Image
            style={{ width: 30, height: 30, alignSelf:'center',borderRadius:50, marginTop:5, marginBottom:5 }}
            source={require('./src/pages/Profile/img/settings.png')}
            />
            </TouchableHighlight>
          </View>
          ), })
          } component={MyTabs} />
        <HomeStack.Screen name="Settings" component={SettingsScreen} />
        <HomeStack.Screen name="Project" component={HomeScreenOngoingProject} />
      </HomeStack.Navigator>
    </NavigationContainer>
  );
}

/* 

<Icon
              onPress={() => {navigation.navigate('Settings')}}
              name='settings'
              color='black'
              size={30}
            />

             */

/* function ProfileTabs(){
  return(
    <ProfileScreenTabs.Navigator tabBarOptions={{
      activeTintColor:'black',
      inactiveTintColor:'white',
      labelStyle: { fontSize: 15, textTransform:'capitalize', fontWeight:'normal' },
      indicatorStyle: {backgroundColor:'#FFFF8D'},
      style: { backgroundColor: '#03DAC5' },
    }}>
      <ProfileScreenTabs.Screen name="ProfileRatingScreen" component={ProfileRatingScreen} />
      <ProfileScreenTabs.Screen name="ProfileReportScreen" component={ProfileReportScreen} />
    </ProfileScreenTabs.Navigator>
  );
}
function ProfileStack(){
  return(
    <ProfileScreenStack.Navigator>
        <ProfileScreenStack.Screen 
          name="Profile"
          component={MyTabs}
          options={({ navigation, route }) => ({title: 'Profile',
          headerStyle:{backgroundColor:'#03DAC5', elevation:0,shadowOpacity:0},
          headerTitleStyle:{fontWeight:'normal', fontSize:30},
          })}/>
        <ProfileScreenStack.Screen name="ProfileTabs" component={ProfileTabs} />
    </ProfileScreenStack.Navigator>
  );
}

function HomeScreenTabs(){
  return(
    <HomeScreenNavigationTab.Navigator tabBarOptions={{
      activeTintColor:'black',
      inactiveTintColor:'white',
      labelStyle: { fontSize: 15, textTransform:'capitalize', fontWeight:'normal' },
      indicatorStyle: {backgroundColor:'#FFFF8D'},
      style: { backgroundColor: '#03DAC5' },
    }}>
      <HomeScreenNavigationTab.Screen name="FinishedProjectsScreen" component={HomeScreenFinished} />
      <HomeScreenNavigationTab.Screen name="OngoinProjectsScreen" component={HomeScreenOngoing} />
    </HomeScreenNavigationTab.Navigator>
  );
}

function MyTabs() {
    return (
      <MainTab.Navigator tabBarOptions={{
        activeTintColor:'black',
        inactiveTintColor:'white',
        labelStyle: { fontSize: 15, textTransform:'capitalize', fontWeight:'normal' },
        indicatorStyle: {backgroundColor:'#FFFF8D'},
        style: { backgroundColor: '#03DAC5' },
      }}>
        <MainTab.Screen name="Home" component={HomeScreenTabs} />
        <MainTab.Screen name="Profile" component={ProfileStack} />
        <MainTab.Screen name="Chats" component={ChatScreen} />
      </MainTab.Navigator>
    );
}


export default function Routes() {
  return (
    <NavigationContainer>
      <HomeStack.Navigator>
        <HomeStack.Screen 
          name="Home" 
          options={({ navigation, route }) => ({title: 'UpLift',
          headerStyle:{backgroundColor:'#03DAC5', elevation:0,shadowOpacity:0},
          headerTitleStyle:{fontWeight:'normal', fontSize:30},
          headerRight: () => (
          <View style={{padding:10}}>
            <Icon
              onPress={() => {navigation.navigate('Settings')}}
              name='settings'
              color='black'
              size={30}
            />
          </View>
            
          ), })
          } component={MyTabs} />
        <HomeStack.Screen name="Settings" component={SettingsScreen} />
      </HomeStack.Navigator>
    </NavigationContainer>
  );
}
 */