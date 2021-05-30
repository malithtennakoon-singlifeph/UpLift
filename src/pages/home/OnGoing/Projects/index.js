import React, {useState,useEffect } from 'react';
import { View,Image, Text,TouchableHighlight, FlatList } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';


function HomeScreenOngoingProject({route, navigation}) {

  const { projectName, startDate, endDate, projectMembers, projectAdmin,projectStatus } = route.params;
  const user = auth().currentUser
  let checkRate='info';

  const renderItem = ({ item }) => (
    <Members name={item.trim('')} />
  );

  function existance(memName){
    var tes="done";
    firestore()
    .collection('Ratings')
    .doc(projectName)
    .collection(user.email)
    .doc(memName)
    .get()
    .then(documentSnapshot => {
      if (documentSnapshot.exists) {
        console.log('snap exist')
        tes='done'
      }else{
        console.log('snap does not exist')
        tes='info';
      }
    });
    return tes;
  }


  const Members = ({name}) =>{
    return(
      <View key={name} style={{flexWrap:'wrap',flexDirection:'row', justifyContent:'space-around'}} >
        <View style={{borderWidth:1, borderRadius:5, borderColor:'grey',alignSelf:'flex-end', padding:10, width:230,  marginBottom: '4%'}}>
          <Text>{name}</Text>
        </View>
        {name===projectAdmin && name===user.email? 
          <Button buttonStyle={{width:90,borderRadius:5, backgroundColor:'#cabf45',}} titleStyle={{color:'black'}}
          icon={<Icon 
            name='edit'
            type='ionicon' size={20} color="black"/>}
          title="  Edit"
        />
        :
        <Button buttonStyle={{width:90,borderRadius:5, backgroundColor:'#cabf45',}} titleStyle={{color:'black'}}
          icon={<Icon 
            name='star'
            //{existance(name) }
            type='ionicon' size={20} color="black"/>}
          title="  Rate"
          onPress={()=>{navigation.navigate("Rate",{ projectName:projectName, memberName: name })}}
        />
        }
        
      </View>
    )
  }


    return (
 
      <View style={{ flex: 1, alignItems: 'center', backgroundColor:'#ffffcf' }}>
      
        <View style={{marginTop:30}}>
          <Text style={{fontSize:30, textAlign:'center'}}>{projectName}</Text>
        </View>
        
        <View style={{flex:1, flexWrap:'wrap',flexDirection:'row', padding:20}}>
          
          <View style={{marginRight:10, alignItems:'center'}}>
            <Text style={{fontSize:20}}>65%</Text>
            <Text style={{fontSize:20}}>Completed</Text>
          </View>
          <View style={{marginLeft:10, alignItems:'center'}}>
            <Text style={{fontSize:20}}>N/A</Text>
            <Text style={{fontSize:20}}>Rating {"  "}
              <Image
              style={{width:20, height:20}}
              source={require('./star.png')}
              />
            </Text>
          </View>
        </View>

        <View style={{flex:9,flexWrap:'wrap', flexDirection:'row',justifyContent:'space-around'}}>
          <View style={{borderWidth:1, borderColor:'grey', borderRadius:5,padding:10, width:230 , marginBottom: '4%'}}><Text>Duration</Text></View>
          <View style={{borderWidth:1, borderColor:'grey', borderRadius:5,padding:10, width: 90, marginBottom: '4%'}}><Text>73 Days</Text></View>
          <View style={{borderWidth:1, borderColor:'grey', borderRadius:5,padding:10, width: 230, marginBottom: '4%'}}><Text>Start Date</Text></View>
          <View style={{borderWidth:1, borderColor:'grey', borderRadius:5,padding:10, width: 90, marginBottom: '4%'}}><Text>{startDate}</Text></View>
          <View style={{borderWidth:1, borderColor:'grey', borderRadius:5,padding:10, width:230 , marginBottom: '4%'}}><Text>End Date</Text></View>
          <View style={{borderWidth:1, borderColor:'grey', borderRadius:5,padding:10, width: 90, marginBottom: '4%'}}><Text>{endDate}</Text></View>
          <View style={{borderWidth:1, borderColor:'grey', borderRadius:5,padding:10, width: 230, marginBottom: '4%'}}><Text>Number of Members</Text></View>
          <View style={{borderWidth:1, borderColor:'grey', borderRadius:5,padding:10, width:90 , marginBottom: '4%'}}><Text>{projectMembers.length}</Text></View>


          <FlatList data={projectMembers} renderItem={renderItem} keyExtractor={item => item.name} />
          


        </View>


      </View>
    );
  }

export default HomeScreenOngoingProject;


