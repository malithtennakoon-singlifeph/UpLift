import * as React from 'react';
import {StyleSheet,ScrollView, View, Text } from 'react-native';
import ProgressBar from 'react-native-progress/Bar';


function HomeScreenFinished({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'#00B1A0' }}>
        <View style={{width:'95%',height:'97%',borderRadius:10,backgroundColor:'white',margin:10}}>
          <ScrollView>
            <View style={{flex:1,flexDirection:'column',flexWrap:'wrap',alignContent:'space-between'}}>

              <View style={styles.BoxWrapStyle}>

                <View style={styles.BoxStyle}>
                  <View style={styles.HeadViewStyle}>
                    <Text style={styles.HeadTextStyle}>Mango Project</Text>
                  </View>
                  <View style={{flex:1}}>
                    <ProgressBar style={styles.ProgressBarStyle} 
                      color={'#03DAC5'} height={12} borderWidth={0}
                      borderRadius={10} unfilledColor={'white'}
                      progress={0.6} width={130} />
                    <View style={{paddingTop:10}}>
                      <Text style={styles.TimeText}>Start: 14/12/2020</Text>
                      <Text style={styles.TimeText}>End: 28/04/2021</Text>
                    </View>
                  </View>          
                </View>

                <View style={styles.BoxStyle}>
                  <View style={styles.HeadViewStyle}>
                    <Text style={styles.HeadTextStyle}>Accident Alert System</Text>
                  </View>
                  <View style={{flex:1}}>
                    <ProgressBar style={styles.ProgressBarStyle} 
                      color={'#03DAC5'} height={12} borderWidth={0}
                      borderRadius={10} unfilledColor={'white'}
                      progress={1} width={130} />
                    <View style={{paddingTop:10}}>
                      <Text style={styles.TimeText}>Start: 14/12/2020</Text>
                      <Text style={styles.TimeText}>End: 28/04/2021</Text>
                    </View>
                  </View>          
                </View>

              </View>

              <View style={styles.BoxWrapStyle}>

                <View style={styles.BoxStyle}>
                  <View style={styles.HeadViewStyle}>
                    <Text style={styles.HeadTextStyle}>Water Management System</Text>
                  </View>
                  <View style={{flex:1}}>
                    <ProgressBar style={styles.ProgressBarStyle} 
                      color={'#03DAC5'} height={12} borderWidth={0}
                      borderRadius={10} unfilledColor={'white'}
                      progress={0.8} width={130} />
                    <View style={{paddingTop:10}}>
                      <Text style={styles.TimeText}>Start: 14/12/2020</Text>
                      <Text style={styles.TimeText}>End: 28/04/2021</Text>
                    </View>
                  </View>          
                </View>

                <View style={styles.BoxStyle}>
                  <View style={styles.HeadViewStyle}>
                    <Text style={styles.HeadTextStyle}>OOOOOOOOOOOOOOOOOOOOOOOOOOOOOO</Text>
                  </View>
                  <View style={{flex:1}}>
                    <ProgressBar style={styles.ProgressBarStyle} 
                      color={'#03DAC5'} height={12} borderWidth={0}
                      borderRadius={10} unfilledColor={'white'}
                      progress={0.8} width={130} />
                    <View style={{paddingTop:10}}>
                      <Text style={styles.TimeText}>Start: 14/12/2020</Text>
                      <Text style={styles.TimeText}>End: 28/04/2021</Text>
                    </View>
                  </View>          
                </View>

              </View>

            </View>
          </ScrollView>
        </View>
      </View>
  );
}

// Maximum number characters of project heading should be 30 charachters. More than that would make it go 4 lines 

const styles = StyleSheet.create({


  BoxStyle: {
    flex:1,
    width:'47%',
    borderRadius:10,
    height:150,
    margin:5,
    paddingRight:10,
    paddingLeft:10,
    paddingTop:10,
    backgroundColor:'#333333',
    justifyContent:'center',
    alignContent:'center',

  },
  TimeText:{
    justifyContent:'center',
    alignSelf:'center',
    color:'white',
    fontWeight:'bold'
  },
  BoxWrapStyle:{
    alignContent:'space-between',
    flexDirection:'row'
  },
  HeadTextStyle:{
    color:'white',
    alignSelf:'center',
    textAlign:'center',
    fontSize:20,
    paddingBottom:10,
    fontWeight:'normal'
  },
  ProgressBarStyle:{
    
    justifyContent:'center',
    alignSelf:'center',
  },
  HeadViewStyle:{
    flex:1,
    paddingBottom:5,
    justifyContent:'center',
    alignContent:'center',
  }

});

export default HomeScreenFinished;

