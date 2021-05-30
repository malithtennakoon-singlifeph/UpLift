import React, {useState} from 'react';
import { View, Text, TouchableHighlight,ScrollView,  } from 'react-native';
import {Button, } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';



function ChatScreen({navigation}) {

  const [arr, setArr] = useState()

  const getData = ()=> {
    firestore()
    .collection('Ratings')
    .get()
    .then(documentSnapshot => {
      console.log('User Ratings exists: ', documentSnapshot.data());
      
    });

  }

    return (
      <View style={{flex:1}}>
        <View style={{flex:9}}>
          <ScrollView>
          </ScrollView>
        </View>
        <View style={{flex:1, alignItems:'center',justifyContent:'center'}}>
        <Button buttonStyle={{width:90,borderRadius:5, backgroundColor:'#cabf45',}} titleStyle={{color:'black'}}
          icon={<Icon 
            name='sync'
            //{existance(name) }
            type='ionicon' size={20} color="black"/>}
          title="  Sync"
          onPress={()=>{getData()}}
        />
        </View>
      </View>
    );
  }

export default ChatScreen;