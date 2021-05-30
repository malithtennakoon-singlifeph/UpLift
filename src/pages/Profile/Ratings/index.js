import React,{useEffect, useState} from 'react';
import {ScrollView, View, Text,Image, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

function ProfileRatingScreen({navigation}) {
  
  const user= auth().currentUser.email
  let temArray=[];
  const [Communication, setCommunication] = useState(0);
  const [Leadership, setLeadership] = useState(0);
  const [Collaboration, setCollaboration] = useState(0);
  const [Timeliness, setTimeliness] = useState(0);
  const [Creativity, setCreativity] = useState(0);
  const [Responsibility, setResponsibility] = useState(0);
  const [Activeness, setActiveness] = useState(0);
  const [Listening, setListening] = useState(0);

  const setDataToArr = (data) => {
    temArray.push(data);
  }

  useEffect(() => {
    firestore()
    .collection('Ratings')
    .get()
    .then((snapshot) => {
      temArray=[]
      snapshot.docs.forEach(collection => {
        if (collection.data().member_email===user){
          console.log("User is rated: -",collection.data().project_name);
          setDataToArr(collection.data())
        }else{
          console.log("User is not rated: -",collection.data().project_name);
        }
        });
        setState()
    });
  }, [])

  const setState = () => {
    var length=temArray.length;
    var com=0; var lead=0; var coll=0; var act=0; var cret=0; var res=0; var time=0
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
    
    setCommunication((com/length).toFixed(1))
    setLeadership((lead/length).toFixed(1))
    setCollaboration((coll/length).toFixed(1))
    setActiveness((act/length).toFixed(1))
    setCreativity((cret/length).toFixed(1))
    setResponsibility((res/length).toFixed(1))
    setTimeliness ((time/length).toFixed(1))
    setListening ((list/length).toFixed(1))
  }





  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'black' }}>
      <ScrollView>
        <View style={{margin:10,padding:5,borderRadius:10,backgroundColor:'#ffffcf',width:340}}>
          <View style={{padding:5}}>
            <Text>No of Projects: 12</Text>
            <Text>No of Members you have worked with: 36</Text>
            <Text>No of tasks that you have completed: 9</Text>
            <Text>No of members rated you: 30</Text>
          </View>
        </View>

        <View style={{flex:1,flexDirection:'row',margin:10,paddingLeft:10, paddingRight:10,justifyContent:'space-between',borderRadius:10,backgroundColor:'#ffffcf',height:35,width:340}}>
          <View style={{justifyContent:'center'}}><Text style={{}}>Communication </Text></View>
          <View style={{flexDirection:'row'}}>
            <View style={{justifyContent:'center'}}><Image style={styles.image} source={require('./img/star.png')}/></View>
            <View style={{justifyContent:'center'}}><Text>{Communication}</Text></View>  
          </View>
        </View>

        <View style={{flex:1,flexDirection:'row',margin:10,paddingLeft:10,paddingRight:10,justifyContent:'space-between',borderRadius:10,backgroundColor:'#ffffcf',height:35,width:340}}>
          <View style={{justifyContent:'center'}}><Text style={{}}>Leadership </Text></View>
          <View style={{flexDirection:'row'}}>
            <View style={{justifyContent:'center'}}><Image style={styles.image} source={require('./img/star.png')}/></View>
            <View style={{justifyContent:'center'}}><Text>{Leadership}</Text></View>  
          </View>
        </View>

        <View style={{flex:1,flexDirection:'row',margin:10,paddingLeft:10,paddingRight:10,justifyContent:'space-between',borderRadius:10,backgroundColor:'#ffffcf',height:35,width:340}}>
          <View style={{justifyContent:'center'}}><Text style={{}}>Collaboration </Text></View>
          <View style={{flexDirection:'row'}}>
            <View style={{justifyContent:'center'}}><Image style={styles.image} source={require('./img/star.png')}/></View>
            <View style={{justifyContent:'center'}}><Text>{Collaboration}</Text></View>  
          </View>
        </View>

        <View style={{flex:1,flexDirection:'row',margin:10,paddingLeft:10,paddingRight:10,justifyContent:'space-between',borderRadius:10,backgroundColor:'#ffffcf',height:35,width:340}}>
          <View style={{justifyContent:'center'}}><Text style={{}}>Timeliness </Text></View>
          <View style={{flexDirection:'row'}}>
            <View style={{justifyContent:'center'}}><Image style={styles.image} source={require('./img/star.png')}/></View>
            <View style={{justifyContent:'center'}}><Text>{Timeliness}</Text></View>  
          </View>
        </View>

        <View style={{flex:1,flexDirection:'row',margin:10,paddingLeft:10,paddingRight:10,justifyContent:'space-between',borderRadius:10,backgroundColor:'#ffffcf',height:35,width:340}}>
          <View style={{justifyContent:'center'}}><Text style={{}}>Creativity </Text></View>
          <View style={{flexDirection:'row'}}>
            <View style={{justifyContent:'center'}}><Image style={styles.image} source={require('./img/star.png')}/></View>
            <View style={{justifyContent:'center'}}><Text>{Creativity}</Text></View>  
          </View>
        </View>


        <View style={{flex:1,flexDirection:'row',margin:10,paddingLeft:10,paddingRight:10,justifyContent:'space-between',borderRadius:10,backgroundColor:'#ffffcf',height:35,width:340}}>
          <View style={{justifyContent:'center'}}><Text style={{}}>Responsibility </Text></View>
          <View style={{flexDirection:'row'}}>
            <View style={{justifyContent:'center'}}><Image style={styles.image} source={require('./img/star.png')}/></View>
            <View style={{justifyContent:'center'}}><Text>{Responsibility}</Text></View>  
          </View>
        </View>

        <View style={{flex:1,flexDirection:'row',margin:10,paddingLeft:10,paddingRight:10,justifyContent:'space-between',borderRadius:10,backgroundColor:'#ffffcf',height:35,width:340}}>
          <View style={{justifyContent:'center'}}><Text style={{}}>Activeness </Text></View>
          <View style={{flexDirection:'row'}}>
            <View style={{justifyContent:'center'}}><Image style={styles.image} source={require('./img/star.png')}/></View>
            <View style={{justifyContent:'center'}}><Text>{Activeness}</Text></View>  
          </View>
        </View>

        <View style={{flex:1,flexDirection:'row',margin:10,paddingLeft:10,paddingRight:10,justifyContent:'space-between',borderRadius:10,backgroundColor:'#ffffcf',height:35,width:340}}>
          <View style={{justifyContent:'center'}}><Text style={{}}>Listening </Text></View>
          <View style={{flexDirection:'row'}}>
            <View style={{justifyContent:'center'}}><Image style={styles.image} source={require('./img/star.png')}/></View>
            <View style={{justifyContent:'center'}}><Text>{Listening}</Text></View>  
          </View>
        </View>


      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  image:{
      margin:4,
      width:20,
      height:20,
  },
});
export default ProfileRatingScreen;

