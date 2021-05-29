import * as React from 'react';
import { View,Image, Text,TouchableHighlight } from 'react-native';


function HomeScreenOngoingProject({navigation}) {
    return (
      <View style={{ flex: 1, alignItems: 'center' }}>
      <Text>Title</Text>
        <View style={{flex:1, flexWrap:'wrap',flexDirection:'row', padding:20}}>
          
          <View style={{marginRight:10, alignItems:'center'}}>
            <Text>65%</Text>
            <Text>Completed</Text>
          </View>
          <View style={{marginLeft:10, alignItems:'center'}}>
            <Text>N/A</Text>
            <Text>Rating {"  "}
              <Image
              style={{width:10, height:10}}
              source={require('./star.png')}
              />
            </Text>
          </View>
        </View>

        <View style={{flex:1,flexWrap:'wrap', flexDirection:'row',}}>
          <View style={{borderWidth:1, borderRadius:5,padding:10, width:'40%', marginLeft:'5%', marginBottom: '4%'}}><Text>Duration</Text></View>
          <View style={{borderWidth:1, borderRadius:5,padding:10, width:'40%', marginLeft:'5%', marginBottom: '4%'}}><Text>Duration</Text></View>
          <View style={{borderWidth:1, borderRadius:5,padding:10, width:'40%', marginLeft:'5%', marginBottom: '4%'}}><Text>Duration</Text></View>
          <View style={{borderWidth:1, borderRadius:5,padding:10, width:'40%', marginLeft:'5%', marginBottom: '4%'}}><Text>Duration</Text></View>
          <View style={{borderWidth:1, borderRadius:5,padding:10, width:'40%', marginLeft:'5%', marginBottom: '4%'}}><Text>Duration</Text></View>
          <View style={{borderWidth:1, borderRadius:5,padding:10, width:'40%', marginLeft:'5%', marginBottom: '4%'}}><Text>Duration</Text></View>
          <View style={{borderWidth:1, borderRadius:5,padding:10, width:'40%', marginLeft:'5%', marginBottom: '4%'}}><Text>Duration</Text></View>
          <View style={{borderWidth:1, borderRadius:5,padding:10, width:'30%', marginLeft:'5%', marginBottom: '4%'}}><Text>Duration</Text></View>
        </View>

      </View>
    );
  }

export default HomeScreenOngoingProject;