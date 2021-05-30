import React, {useState,useEffect } from 'react';
import { ScrollView, View, Text,FlatList, TouchableOpacity } from 'react-native';
import ProgressBar from 'react-native-progress/Bar';
import { TouchableHighlight } from 'react-native-gesture-handler';
import database from '@react-native-firebase/database';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import styles from './style.js';
import {Icon, FAB } from 'react-native-elements';
import moment from 'moment';

function HomeScreenOngoing({ navigation }) {

  const [memberArray, setMemberArray] = useState([]);
  const [loading, setLoading] = useState(false);
  const currentUserEmail= auth().currentUser.email;
  var projectProgress=0.6;
  let arr= [];

  const setDataToArr = (data) => {
    arr.push(data);
   // setMemberArray(oldArray => [...oldArray,data]);
  }

  const setState = () => {
    setMemberArray(arr)
  }


  useEffect(()=>{
    setLoading(true)
    firestore()
    .collection('Projects')
    .where('project_Ongoing_status', '==', true)
    .onSnapshot(docSnapshot => {
      arr=[]
        docSnapshot.docs.forEach(doc =>{
          if (doc.data().project_members.includes(currentUserEmail)){
            setDataToArr(doc.data())
            console.log("updated from firebase")
              //setMemberArray(oldArray => [...oldArray,doc.data()]);
            }else{
              console.log("User is not a member: -",doc.data().project_name);
            }
      }) 
      setState()
      setLoading(false)
    }, err => {
      console.log(`Encountered error: ${err}`);
    });
  },[]);


  // useEffect(()=>{
  //   database().ref("/Projects").orderByChild("project_members").on("value",snapshot => {
  //     setMemberArray([]);
  //     if (snapshot.exists()){
  //       const userData = snapshot.val();
  //       for (var key in userData) {
  //         console.log(key,userData[key].project_members);
  //         if (userData[key].project_members.includes(currentUserEmail)){
  //           setMemberArray(oldArray => [...oldArray, userData[key]]);
  //         }else{
  //           console.log("Naaaa",userData[key].project_name);
  //         }
  //       }
  //     }else{
  //       console.log("NO PROJJJECT")
  //     }
  // });  
  // },[]);


  // function checkProgress(sd,ed){
  //   //console.log('date now: ', Date.now())'
  //   var sstr =sd.split("-")
  //   var syear=sstr[0]
  //   var smonth=sstr[1]
  //   var sdate=sstr[2]
  //   var sda=new Date(syear,smonth,sdate,0,0,0,0)

  //   var estr =ed.split("-")
  //   var eyear=estr[0]
  //   var emonth=estr[1]
  //   var edate=estr[2]
  //   var eda=new Date(eyear,emonth,edate,0,0,0,0)

  //   console.log(sda)
  //   console.log(eda)
  //   return 0.5;
  // }

  
  const renderItem = ({ item }) => (
    <Tile groupProjectName={item.project_name} startDate={item.project_start_date} endDate={item.project_end_date}
    projectMembers={item.project_members} projectAdmin={item.project_admin} projectStatus={item.project_status}
    />
  );

  const Tile = (props) =>{
    console.log("Ongoing Project: -",props.groupProjectName)
    return(
      <TouchableHighlight key={props.project_id} style={styles.Touchable} onPress={() => {navigation.navigate('Project',{ 
        projectName:props.groupProjectName, startDate:props.startDate, endDate:props.endDate, projectMembers:props.projectMembers,
        projectAdmin:props.projectAdmin,projectStatus:props.projectStatus 
      })}}>
        <View style={styles.BoxStyle}>
          <View style={styles.HeadViewStyle}>
            <Text style={styles.HeadTextStyle}>{props.groupProjectName}</Text>
          </View>
          <View style={{ flex: 1 }}>
            <ProgressBar style={styles.ProgressBarStyle}
              color={'#c8b900'} height={12} borderWidth={0}
              borderRadius={5} unfilledColor={'white'}
              progress={0.7}
                //checkProgress(props.startDate, props.endDate)} width={130} 
                />
            <View style={{ paddingTop: 10 }}>
              <Text style={styles.TimeText}>Start: {props.startDate}</Text>
              <Text style={styles.TimeText}>End: {props.endDate}</Text>
            </View>
          </View>
        </View>
      </TouchableHighlight>
    )
  }

  
  return (
    <View style={styles.mView}>
      <View style={styles.mmView}>
          

          <View style={styles.OuterTile}>
            <FlatList
              data={memberArray}
              renderItem={renderItem}
              numColumns={2}
              keyExtractor={item => item.project_id}
            />
          </View>

        
      </View>
      <FAB loading={loading} loadingStyle={{}} placement="right" size="large" color="#c8b900" onPress={()=>{navigation.navigate('AddProjects')} } 
      icon={
        <Icon name='address-card' size={30} type='font-awesome' color='black' />
      }
      />
    </View>
  );
}
// Maximum number characters of project heading should be 30 charachters. More than that would make it go 4 lines 

export default HomeScreenOngoing;

