import * as React from 'react';
import {StyleSheet,ScrollView, View, Text } from 'react-native';
import ProgressBar from 'react-native-progress/Bar';

function HomeScreenOngoingProject({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'#00B1A0' }}>
        <View style={styles.box}>

          <View style={{flex:1,backgroundColor:'green',alignItems:'center'}}>
            <Text style={{fontSize:25,alignSelf:'center'}}>IS Development</Text>

            <View style={{backgroundColor:'pink',flexDirection:'row',justifyContent:''}}>
              <View style={{}}>
                <Text>65%</Text>
                <Text>Completed</Text>
              </View>

              <View style={{}}>
                <Text>N/A</Text>
                <Text>Rating</Text>
              </View>
            </View>

          </View>

        </View>
      </View>
    );
}

// Maximum number characters of project heading should be 30 charachters. More than that would make it go 4 lines 

const styles = StyleSheet.create({
  box:{
    flex:1,
    backgroundColor:'white',
    borderRadius:10,
    padding:10,
    marginTop:10,
    marginBottom:10,
    height:'auto',
    width:'95%',
  },

});

export default HomeScreenOngoingProject;




/* 
<Icon
              onPress={() => {navigation.navigate('Settings')}}
              name='add-circle'
              color='#00B1A0'
              size={70}
              style={{alignSelf:'center', justifyContent:'center' }}
              /> */