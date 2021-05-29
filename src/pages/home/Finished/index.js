import React, {useState,useEffect } from 'react';
import { ScrollView, View, Text,FlatList, TouchableOpacity } from 'react-native';
import ProgressBar from 'react-native-progress/Bar';
import { TouchableHighlight } from 'react-native-gesture-handler';

import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import styles from './style.js';
import {Icon, FAB } from 'react-native-elements';



function HomeScreenFinished({ navigation }) {
  const [memberArray, setMemberArray] = useState([]);
  
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
    
    firestore()
    .collection('Projects')
    .where('project_Ongoing_status', '==', false)
    .onSnapshot(docSnapshot => {
      arr=[]
        docSnapshot.docs.forEach(doc =>{
          if (doc.data().project_members.includes(currentUserEmail,)){
            setDataToArr(doc.data())
            console.log("updated")
              //setMemberArray(oldArray => [...oldArray,doc.data()]);
            }else{
              console.log("Naaaa",doc.data().project_name);
            }
      }) 
      setState()
    }, err => {
      console.log(`Encountered error: ${err}`);
    });
  },[]);

  
  const renderItem = ({ item }) => (
    <Tile groupProjectName={item.project_name} startDate={item.project_start_date} endDate={item.project_end_date}
    projectMembers={item.project_members} projectAdmin={item.project_admin} projectStatus={item.project_status}
    />
  );

  const Tile = (props) =>{
    console.log("whats: -",props.groupProjectName)
    console.log('member array:', memberArray)
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
      <FAB placement="right" size="large" color="#fff176" onPress={()=>{navigation.navigate('AddProjects')} } 
      icon={
        <Icon name='address-card' size={30} type='font-awesome' color='black' />
      }
      />
    </View>
  );
}
// Maximum number characters of project heading should be 30 charachters. More than that would make it go 4 lines 

export default HomeScreenFinished;

