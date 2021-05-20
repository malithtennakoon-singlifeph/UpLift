import * as React from 'react';
import {ScrollView, View, Text,Image, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';

function ProfileRatingScreen({navigation}) {

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'#333333' }}>
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
            <View style={{justifyContent:'center'}}><Image style={styles.image} source={require('./img/star.png')}/></View>
            <View style={{justifyContent:'center'}}><Text>9.0</Text></View>  
          </View>
        </View>

        <View style={{flex:1,flexDirection:'row',margin:10,padding:10,justifyContent:'space-between',borderRadius:10,backgroundColor:'white',height:35,width:340}}>
          <View style={{justifyContent:'center'}}><Text style={{}}>Motivation of memebers </Text></View>
          <View style={{flexDirection:'row'}}>
            <View style={{justifyContent:'center'}}><Image style={styles.image} source={require('./img/star.png')}/></View>
            <View style={{justifyContent:'center'}}><Text>6.0</Text></View>  
          </View>
        </View>

        <View style={{flex:1,flexDirection:'row',margin:10,padding:10,justifyContent:'space-between',borderRadius:10,backgroundColor:'white',height:35,width:340}}>
          <View style={{justifyContent:'center'}}><Text style={{}}>Delegation </Text></View>
          <View style={{flexDirection:'row'}}>
            <View style={{justifyContent:'center'}}><Image style={styles.image} source={require('./img/star.png')}/></View>
            <View style={{justifyContent:'center'}}><Text>8.4</Text></View>  
          </View>
        </View>

        <View style={{flex:1,flexDirection:'row',margin:10,padding:10,justifyContent:'space-between',borderRadius:10,backgroundColor:'white',height:35,width:340}}>
          <View style={{justifyContent:'center'}}><Text style={{}}>Timeliness </Text></View>
          <View style={{flexDirection:'row'}}>
            <View style={{justifyContent:'center'}}><Image style={styles.image} source={require('./img/star.png')}/></View>
            <View style={{justifyContent:'center'}}><Text>9.2</Text></View>  
          </View>
        </View>

        <View style={{flex:1,flexDirection:'row',margin:10,padding:10,justifyContent:'space-between',borderRadius:10,backgroundColor:'white',height:35,width:340}}>
          <View style={{justifyContent:'center'}}><Text style={{}}>Creativity </Text></View>
          <View style={{flexDirection:'row'}}>
            <View style={{justifyContent:'center'}}><Image style={styles.image} source={require('./img/star.png')}/></View>
            <View style={{justifyContent:'center'}}><Text>9.0</Text></View>  
          </View>
        </View>


        <View style={{flex:1,flexDirection:'row',margin:10,padding:10,justifyContent:'space-between',borderRadius:10,backgroundColor:'white',height:35,width:340}}>
          <View style={{justifyContent:'center'}}><Text style={{}}>Responsibility </Text></View>
          <View style={{flexDirection:'row'}}>
            <View style={{justifyContent:'center'}}><Image style={styles.image} source={require('./img/star.png')}/></View>
            <View style={{justifyContent:'center'}}><Text>7.6</Text></View>  
          </View>
        </View>

        <View style={{flex:1,flexDirection:'row',margin:10,padding:10,justifyContent:'space-between',borderRadius:10,backgroundColor:'white',height:35,width:340}}>
          <View style={{justifyContent:'center'}}><Text style={{}}>Activeness </Text></View>
          <View style={{flexDirection:'row'}}>
            <View style={{justifyContent:'center'}}><Image style={styles.image} source={require('./img/star.png')}/></View>
            <View style={{justifyContent:'center'}}><Text>7.6</Text></View>  
          </View>
        </View>

        <View style={{flex:1,flexDirection:'row',margin:10,padding:10,justifyContent:'space-between',borderRadius:10,backgroundColor:'white',height:35,width:340}}>
          <View style={{justifyContent:'center'}}><Text style={{}}>Communication Skills </Text></View>
          <View style={{flexDirection:'row'}}>
            <View style={{justifyContent:'center'}}><Image style={styles.image} source={require('./img/star.png')}/></View>
            <View style={{justifyContent:'center'}}><Text>8.0</Text></View>  
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

