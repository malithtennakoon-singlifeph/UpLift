import React, {useEffect} from 'react';
import { View, Text, ToastAndroid } from 'react-native';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';
import { Icon, Input, Button } from 'react-native-elements';
import firestore from '@react-native-firebase/firestore';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';

function CustomDrawer({navigation}){
  const user =auth().currentUser
  const db =firestore().collection('Users');
  const [userFirstName, setUserFirstName] = React.useState();
  const [userFamilyName, setUserFamilyName] = React.useState();


  useEffect(()=>{
    db
    .where('email','==',user.email)
    .limit(1)
    .get()
    .then(documentSnapshot => {
      documentSnapshot.docs.forEach((doc)=>{
        setUserFirstName(doc.data().first_name)
        setUserFamilyName(doc.data().last_name)
      })
    });
},[])
  

  return(
    
      <View style={{ flex:1, backgroundColor:'#ffffcf'}}>
          <View style={{flex:2,height:'20%', padding:20,justifyContent:'center', alignItems:'center'}}>
              <Text style={{ fontSize:30, textAlign:'center'}}>{userFirstName} {userFamilyName}</Text>
          </View>          

          <View style={{flex:6}}>
            <Calendar
              style={{backgroundColor:'#ffffcf'}}
              monthFormat={'MMMM yyyy'}
            />
          </View>

          <View style={{ flex:2,height:'10%', flexDirection:'row', alignItems:'center', justifyContent:'space-around'}}>

                <Button
                type='outline'
                buttonStyle={{borderColor:'grey'}}
                raised={true}
                icon={
                  <Icon name="log-out-outline"  type='ionicon'  color="black"  />
                }
                onPress={() => {auth().signOut().then(() => console.log('User signed out!'))}}
                titleStyle={{color:'black'}}
                title=" Logout"
              />

              <Button
                type='outline'
                buttonStyle={{borderColor:'grey'}}
                raised={true}
                icon={
                  <Icon name="create-outline"  type='ionicon'  color="black"  />
                }
                onPress={()=>{navigation.navigate('Settings')}}
                titleStyle={{color:'black'}}
                title=" Edit Profile"
              />

          </View>
      </View>

  )
}

export default CustomDrawer;