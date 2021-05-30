import React, {useState} from 'react';
import { View, Text, TouchableHighlight,ScrollView,  } from 'react-native';
import {Button, } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';



function ChatScreen({navigation}) {
  const user= auth().currentUser.email
  let temArray=[];
  let ratesArray=[];

  const setDataToArr = (data) => {
    temArray.push(data);

  }

  const setState = () => {
    var length=temArray.length;
    var com=0
    var lead=0
    var coll=0
    var act=0
    var cret=0
    var res=0
    var time=0
    var list=0
    temArray.forEach((index) =>{
      com+=index.communication
      lead+=index.leadership
      coll+=index.collaboration
      act+=index.activeness
      cret+=index.creativity
      res+=index.responsibility
      time+=index.timeliness
      list+=index.listening
    })
    console.log("com:",com/length)
    console.log("lead:",lead/length)
    console.log("coll:",coll/length)
    console.log("act:",act/length)
    console.log("cret:",cret/length)
    console.log("res:",res/length)
    console.log("time:",time/length)
    console.log("list:",list/length)
    ratesArray={
      "communication":com/length,
      "leadership":lead/length,
      "collaboration":coll/length,
      "Timeliness":act/length,
      "Creativity":cret/length,
      "Responsibility":res/length,
      "Activeness":time/length,
      "Listening":list/length,
    }
    console.log(ratesArray)
    
  }


  const getData = ()=> {
    firestore()
    .collection('Ratings')
    .get()
    .then((snapshot) => {
      temArray=[]
      snapshot.docs.forEach(collection => {
        if (collection.data().member_email===user){
          //console.log("member_email===user:-", collection.data())
          setDataToArr(collection.data())
        }else{
          console.log("User is not a member: -",collection.data().project_name);
        }
        });
        setState()
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