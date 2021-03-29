import * as React from 'react';
import { ScrollView } from 'react-native';
import { View, Text,Button } from 'react-native';
import { Icon } from 'react-native-elements';

function ProfileRatingScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'#00B1A0' }}>
      <ScrollView>
        <View style={{margin:10,padding:5,borderRadius:10,backgroundColor:'white',width:340}}>
          <View style={{padding:5}}>
            <Text>No of Projects: 12</Text>
            <Text>No of Members you have worked with: 36</Text>
            <Text>No of tasks that you have completed: 9</Text>
            <Text>No of members rated you: 30</Text>
          </View>
        </View>

        <View style={{flex:1,flexDirection:'row',margin:10,padding:10,justifyContent:'space-between',borderRadius:10,backgroundColor:'white',height:35,width:340}}>
          <View style={{justifyContent:'center'}}><Text style={{}}>Communication Skills </Text></View>
          <View style={{flexDirection:'row'}}>
            <View style={{justifyContent:'center'}}><Icon style={{marginRight:4}} name='grade' color='#ffd700'/></View>
            <View style={{justifyContent:'center'}}><Text>9.0</Text></View>  
          </View>
        </View>

        <View style={{flex:1,flexDirection:'row',margin:10,padding:10,justifyContent:'space-between',borderRadius:10,backgroundColor:'white',height:35,width:340}}>
          <View style={{justifyContent:'center'}}><Text style={{}}>Motivation of memebers </Text></View>
          <View style={{flexDirection:'row'}}>
            <View style={{justifyContent:'center'}}><Icon style={{marginRight:4}} name='grade' color='#ffd700'/></View>
            <View style={{justifyContent:'center'}}><Text>6.0</Text></View>  
          </View>
        </View>

        <View style={{flex:1,flexDirection:'row',margin:10,padding:10,justifyContent:'space-between',borderRadius:10,backgroundColor:'white',height:35,width:340}}>
          <View style={{justifyContent:'center'}}><Text style={{}}>Delegation </Text></View>
          <View style={{flexDirection:'row'}}>
            <View style={{justifyContent:'center'}}><Icon style={{marginRight:4}} name='grade' color='#ffd700'/></View>
            <View style={{justifyContent:'center'}}><Text>8.4</Text></View>  
          </View>
        </View>

        <View style={{flex:1,flexDirection:'row',margin:10,padding:10,justifyContent:'space-between',borderRadius:10,backgroundColor:'white',height:35,width:340}}>
          <View style={{justifyContent:'center'}}><Text style={{}}>Timeliness </Text></View>
          <View style={{flexDirection:'row'}}>
            <View style={{justifyContent:'center'}}><Icon style={{marginRight:4}} name='grade' color='#ffd700'/></View>
            <View style={{justifyContent:'center'}}><Text>9.2</Text></View>  
          </View>
        </View>

        <View style={{flex:1,flexDirection:'row',margin:10,padding:10,justifyContent:'space-between',borderRadius:10,backgroundColor:'white',height:35,width:340}}>
          <View style={{justifyContent:'center'}}><Text style={{}}>Creativity </Text></View>
          <View style={{flexDirection:'row'}}>
            <View style={{justifyContent:'center'}}><Icon style={{marginRight:4}} name='grade' color='#ffd700'/></View>
            <View style={{justifyContent:'center'}}><Text>9.0</Text></View>  
          </View>
        </View>


        <View style={{flex:1,flexDirection:'row',margin:10,padding:10,justifyContent:'space-between',borderRadius:10,backgroundColor:'white',height:35,width:340}}>
          <View style={{justifyContent:'center'}}><Text style={{}}>Responsibility </Text></View>
          <View style={{flexDirection:'row'}}>
            <View style={{justifyContent:'center'}}><Icon style={{marginRight:4}} name='grade' color='#ffd700'/></View>
            <View style={{justifyContent:'center'}}><Text>7.6</Text></View>  
          </View>
        </View>

        <View style={{flex:1,flexDirection:'row',margin:10,padding:10,justifyContent:'space-between',borderRadius:10,backgroundColor:'white',height:35,width:340}}>
          <View style={{justifyContent:'center'}}><Text style={{}}>Activeness </Text></View>
          <View style={{flexDirection:'row'}}>
            <View style={{justifyContent:'center'}}><Icon style={{marginRight:4}} name='grade' color='#ffd700'/></View>
            <View style={{justifyContent:'center'}}><Text>7.6</Text></View>  
          </View>
        </View>

        <View style={{flex:1,flexDirection:'row',margin:10,padding:10,justifyContent:'space-between',borderRadius:10,backgroundColor:'white',height:35,width:340}}>
          <View style={{justifyContent:'center'}}><Text style={{}}>Communication Skills </Text></View>
          <View style={{flexDirection:'row'}}>
            <View style={{justifyContent:'center'}}><Icon style={{marginRight:4}} name='grade' color='#ffd700'/></View>
            <View style={{justifyContent:'center'}}><Text>8.0</Text></View>  
          </View>
        </View>


      </ScrollView>
    </View>
  );
}

export default ProfileRatingScreen;

