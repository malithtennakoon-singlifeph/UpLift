import React, {useState,useEffect } from 'react';
import { View,Image, Text,TouchableHighlight, FlatList } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';


function HomeScreenOngoingProject({route, navigation}) {

  const { projectName, startDate, endDate, projectMembers, projectAdmin,projectStatus } = route.params;

  const renderItem = ({ item }) => (
    <Members name={item} />
  );


  const Members = ({name}) =>{
    return(
      <View style={{flexWrap:'wrap',flexDirection:'row'}}>
        <View style={{borderWidth:1, borderRadius:5,padding:10, width:'55%', marginLeft:'7%', marginBottom: '4%'}}><Text>{name}</Text></View>
        {name===projectAdmin? 
          <TouchableOpacity style={{alignItems: "center", width:70, marginLeft:30, borderRadius:10, backgroundColor: "#ffeb3b", padding: 10}}>
            <Text>Edit</Text>
          </TouchableOpacity>
        :
        <TouchableOpacity style={{alignItems: "center", width:70, marginLeft:30 ,borderRadius:10, backgroundColor: "#ffeb3b", padding: 10}}>
            <Text>Rate</Text>
          </TouchableOpacity>
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

        <View style={{flex:9,flexWrap:'wrap', flexDirection:'row',}}>
          <View style={{borderWidth:1, borderRadius:5,padding:10, width:'55%', marginLeft:'7%', marginBottom: '4%'}}><Text>Duration</Text></View>
          <View style={{borderWidth:1, borderRadius:5,padding:10, width:'25%', marginLeft:'5%', marginBottom: '4%'}}><Text>73 Days</Text></View>
          <View style={{borderWidth:1, borderRadius:5,padding:10, width:'55%', marginLeft:'7%', marginBottom: '4%'}}><Text>Start Date</Text></View>
          <View style={{borderWidth:1, borderRadius:5,padding:10, width:'25%', marginLeft:'5%', marginBottom: '4%'}}><Text>{startDate}</Text></View>
          <View style={{borderWidth:1, borderRadius:5,padding:10, width:'55%', marginLeft:'7%', marginBottom: '4%'}}><Text>End Date</Text></View>
          <View style={{borderWidth:1, borderRadius:5,padding:10, width:'25%', marginLeft:'5%', marginBottom: '4%'}}><Text>{endDate}</Text></View>
          <View style={{borderWidth:1, borderRadius:5,padding:10, width:'55%', marginLeft:'7%', marginBottom: '4%'}}><Text>Number of Members</Text></View>
          <View style={{borderWidth:1, borderRadius:5,padding:10, width:'25%', marginLeft:'5%', marginBottom: '4%'}}><Text>{projectMembers.length}</Text></View>

          <ScrollView>
          <FlatList data={projectMembers} renderItem={renderItem} />
          </ScrollView>
          
          


        </View>


      </View>
    );
  }

export default HomeScreenOngoingProject;

