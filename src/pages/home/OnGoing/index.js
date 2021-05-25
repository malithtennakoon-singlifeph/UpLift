import React, {useState,useEffect } from 'react';
import { ScrollView, View, Text,FlatList, TouchableOpacity } from 'react-native';
import ProgressBar from 'react-native-progress/Bar';
import { TouchableHighlight } from 'react-native-gesture-handler';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';
import styles from './style.js';
import {Icon, FAB } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';

function HomeScreenOngoing({ navigation }) {

  const currentUserEmail= auth().currentUser.email;
  const [memberArray, setMemberArray] = useState([]);
  var projectProgress=0.6;

  useEffect(()=>{
    database().ref("/Projects").orderByChild("project_members").on("value",snapshot => {
      setMemberArray([]);
      if (snapshot.exists()){
        const userData = snapshot.val();
        for (var key in userData) {
          console.log(key,userData[key].project_members);
          if (userData[key].project_members.includes(currentUserEmail)){
            setMemberArray(oldArray => [...oldArray, userData[key]]);
          }else{
            console.log("Naaaa",userData[key].project_name);
          }
        }
      }else{
        console.log("NO PROJJJECT")
      }
  });  
  },[]);

  const renderItem = ({ item }) => (
    <Tile groupProjectName={item.project_name} startDate={item.project_start_date} endDate={item.project_end_date}
    projectMembers={item.project_members} projectAdmin={item.project_admin} projectStatus={item.project_status}
    />
  );

  const Tile = (props) =>{
    console.log("whats: -",props.groupProjectName)
    return(
      <TouchableHighlight key={props.project_name} style={styles.Touchable} onPress={() => {navigation.navigate('Project',{ 
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
              borderRadius={10} unfilledColor={'white'}
              progress={projectProgress} width={130} />
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
          
        <ScrollView>
          <View style={styles.OuterTile}>
            <FlatList
              data={memberArray}
              renderItem={renderItem}
              numColumns={2}
              keyExtractor={item => item.userId}
              onEndReached={() => { fetchMoreData(skipCount + 10) }}
              onEndReachedThreshold={0}
            />
          </View>
        </ScrollView>
        
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

export default HomeScreenOngoing;


// <TouchableOpacity style={styles.addBtn} onPress={()=>{navigation.navigate('AddProjects');}}>
// <Text style={{fontSize:25,color:'black'}}>Add</Text>
// </TouchableOpacity>