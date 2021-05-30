import React, {useState, useEffect} from 'react';
import { View, TouchableHighlight, ToastAndroid } from 'react-native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { Rating, Button,Input, Text, Icon,  } from 'react-native-elements';
import { ScrollView, TextInput } from 'react-native-gesture-handler';




function RateScreen({navigation, route}) {
const user = auth().currentUser
const { projectName, memberName } = route.params;
const [Communication, setCommumication] = useState(0);
const [Timeliness, setTimeliness] = useState(0);
const [Creativity, setCreativity] = useState(0);
const [Responsibility, setResponsibility] = useState(0);
const [Activeness, setActiveness] = useState(0);

const [defCom,setDefCom] = useState(0);
const [defTime,setDefTime] = useState(0);
const [defCreat,setDefCreat] = useState(0);
const [defResp,setDefResp] = useState(0);
const [defAct,setDefAct] = useState(0);


useEffect(()=>{
  firestore()
  .collection('Ratings')
  .doc(projectName)
  .collection(user.email)
  .doc(memberName)
  .get()
  .then(documentSnapshot => {
    console.log('User Ratings exists: ', documentSnapshot.exists);

    if (documentSnapshot.exists) {
      console.log('User Ratings: ', documentSnapshot.data());
      setDefCom(documentSnapshot.data().communication)
      setDefTime(documentSnapshot.data().timeliness)
      setDefCreat(documentSnapshot.data().creativity)
      setDefResp(documentSnapshot.data().responsibility)
      setDefAct(documentSnapshot.data().activeness)
    }else{
      console.log("No Ratings");
    }
  });
 },[]);


function SaveRatings(){
  console.log("this function works");
  firestore()
  .collection('Ratings')
  .doc(projectName)
  .collection(user.email)
  .doc(memberName)
  .set({
      communication:Communication,
      timeliness: Timeliness,
      creativity: Creativity,
      responsibility: Responsibility,
      activeness: Activeness,
  })
  .then(() => {
    ToastAndroid.show("Ratings are saved!", ToastAndroid.LONG)
    navigation.goBack()
  });
}

    return (
      <View style={{ flex: 1, alignItems: 'center',padding:10, justifyContent: 'center', backgroundColor:'#ffffcf' }}>

        <View style={{borderRadius:5, backgroundColor:'black',width:320, paddingTop:5, marginBottom:20}}>
          <Text h3 style={{color:'white', marginLeft:10}}>{projectName}</Text>
          <Text h4 style={{color:'white', marginLeft:10}}>Member Name</Text>
          <Button title="Save" loading={false} buttonStyle={{margin:5}} onPress={SaveRatings}/>
        </View>

          <ScrollView style={{ flex: 1, }}>
            <View style={{borderRadius:5, backgroundColor:'black',width:320, padding:5,  marginBottom:20}}>
              <Text h4 style={{textAlign:'center', color:'white',}}>Communication</Text>
              <Rating startingValue={defCom} type='star' ratingCount={5} imageSize={50} showRating ratingTextColor='white' tintColor='black'
              onFinishRating={rating =>{setCommumication(rating)}} />
            </View>

            <View style={{borderRadius:5, backgroundColor:'black',width:320, padding:5,  marginBottom:20}}>
              <Text h4 style={{textAlign:'center', color:'white',}}>Timeliness</Text>
              <Rating startingValue={defTime} type='star' ratingCount={5} imageSize={50} showRating ratingTextColor='white' tintColor='black' 
              onFinishRating={rating =>{setTimeliness(rating)}}/>
            </View>

            <View style={{borderRadius:5, backgroundColor:'black',width:320, padding:5,  marginBottom:20}}>
              <Text h4 style={{textAlign:'center', color:'white',}}>Creativity</Text>
              <Rating startingValue={defCreat} type='star' ratingCount={5} imageSize={50} showRating ratingTextColor='white' tintColor='black' 
              onFinishRating={rating =>{setCreativity(rating)}}/>
            </View>

            <View style={{borderRadius:5, backgroundColor:'black',width:320, padding:5,  marginBottom:20}}>
              <Text h4 style={{textAlign:'center', color:'white',}}>Responsibility</Text>
              <Rating startingValue={defResp} type='star' ratingCount={5} imageSize={50} showRating ratingTextColor='white' tintColor='black' 
              onFinishRating={rating =>{setResponsibility(rating)}}/>
            </View>

            <View style={{borderRadius:5, backgroundColor:'black',width:320, padding:5,  marginBottom:20}}>
              <Text h4 style={{textAlign:'center', color:'white',}}>Activeness</Text>
              <Rating startingValue={defAct} type='star' ratingCount={5} imageSize={50} showRating ratingTextColor='white' tintColor='black' 
              onFinishRating={rating =>{setActiveness(rating)}}/>
            </View>
          </ScrollView>
            
      
      </View>
    );
  }

export default RateScreen;