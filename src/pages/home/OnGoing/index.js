

import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, View, Text } from 'react-native';
import ProgressBar from 'react-native-progress/Bar';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreenOngoingProject from './Projects';
import database from '@react-native-firebase/database';


function HomeScreenOngoing({ navigation }) {

  useEffect(()=>{
    database()
  .ref('/Users/2')
  .set({
    name: 'Ada Lovelace',
    age: 31,
  })
  .then(() => console.log('Data set.'));


    database()
  .ref('/Users/1')
  .once('value')
  .then(snapshot => {
    console.log('User data: ', snapshot.val());
  });
  },[]);
  
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#00B1A0' }}>
      <View style={{ width: '95%', height: '97%', borderRadius: 10, backgroundColor: 'white', margin: 10 }}>
        <ScrollView>
          <View style={{ flex: 1, flexDirection: 'column', flexWrap: 'wrap', alignContent: 'space-between' }}>

            <View style={styles.BoxWrapStyle}>

              <TouchableHighlight style={styles.Touchable} onPress={() => {navigation.navigate('SignIn')}}>
                <View style={styles.BoxStyle}>
                  <View style={styles.HeadViewStyle}>
                    <Text style={styles.HeadTextStyle}>IS Development Project</Text>
                  </View>
                  <View style={{ flex: 1 }}>
                    <ProgressBar style={styles.ProgressBarStyle}
                      color={'#03DAC5'} height={12} borderWidth={0}
                      borderRadius={10} unfilledColor={'white'}
                      progress={0.9} width={130} />
                    <View style={{ paddingTop: 10 }}>
                      <Text style={styles.TimeText}>Start: 14/12/2020</Text>
                      <Text style={styles.TimeText}>End: 28/04/2021</Text>
                    </View>
                  </View>
                </View>
              </TouchableHighlight>

              <TouchableHighlight style={styles.Touchable} onPress={() => {navigation.navigate('SignUp')}}>
                <View style={styles.BoxStyle}>
                  <View style={styles.HeadViewStyle}>
                    <Text style={styles.HeadTextStyle}>Django Web Development</Text>
                  </View>
                  <View style={{ flex: 1 }}>
                    <ProgressBar style={styles.ProgressBarStyle}
                      color={'#03DAC5'} height={12} borderWidth={0}
                      borderRadius={10} unfilledColor={'white'}
                      progress={0.6} width={130} />
                    <View style={{ paddingTop: 10 }}>
                      <Text style={styles.TimeText}>Start: 14/12/2020</Text>
                      <Text style={styles.TimeText}>End: 28/04/2021</Text>
                    </View>
                  </View>
                </View>
              </TouchableHighlight>

            </View>

            <View style={styles.BoxWrapStyle}>

              <TouchableHighlight style={styles.Touchable}  onPress={() => { }}>
                <View style={styles.BoxStyle}>
                  <View style={styles.HeadViewStyle}>
                    <Text style={styles.HeadTextStyle}>Waste Managemnt Sys.</Text>
                  </View>
                  <View style={{ flex: 1 }}>
                    <ProgressBar style={styles.ProgressBarStyle}
                      color={'#03DAC5'} height={12} borderWidth={0}
                      borderRadius={10} unfilledColor={'white'}
                      progress={0.5} width={130} />
                    <View style={{ paddingTop: 10 }}>
                      <Text style={styles.TimeText}>Start: 14/12/2020</Text>
                      <Text style={styles.TimeText}>End: 28/04/2021</Text>
                    </View>
                  </View>
                </View>
              </TouchableHighlight>

              <TouchableHighlight style={styles.Touchable} onPress={() => { }}>
                <View style={styles.BoxStyle}>
                  <View style={styles.HeadViewStyle}>
                    <Text style={styles.HeadTextStyle}>Receipt Generator</Text>
                  </View>
                  <View style={{ flex: 1 }}>
                    <ProgressBar style={styles.ProgressBarStyle}
                      color={'#03DAC5'} height={12} borderWidth={0}
                      borderRadius={10} unfilledColor={'white'}
                      progress={0.2} width={130} />
                    <View style={{ paddingTop: 10 }}>
                      <Text style={styles.TimeText}>Start: 14/12/2020</Text>
                      <Text style={styles.TimeText}>End: 28/04/2021</Text>
                    </View>
                  </View>
                </View>
              </TouchableHighlight>

            </View>

            <View style={styles.BoxWrapStyle}>
              <TouchableHighlight style={styles.Touchable} onPress={() => { }}>
                <View style={styles.BoxStyle}>
                  <View style={styles.HeadViewStyle}>
                    <Text style={styles.HeadTextStyle}>COVID 19 Tracking System</Text>
                  </View>
                  <View style={{ flex: 1 }}>
                    <ProgressBar style={styles.ProgressBarStyle}
                      color={'#03DAC5'} height={12} borderWidth={0}
                      borderRadius={10} unfilledColor={'white'}
                      progress={0.1} width={130} />
                    <View style={{ paddingTop: 10 }}>
                      <Text style={styles.TimeText}>Start: 14/12/2020</Text>
                      <Text style={styles.TimeText}>End: 28/04/2021</Text>
                    </View>
                  </View>
                </View>
              </TouchableHighlight>

              <TouchableHighlight style={styles.Touchable} onPress={() => { }}>
                <View style={styles.BoxStyle}>
                  <View style={styles.HeadViewStyle}>
                    <Text style={styles.HeadTextStyle}>Stress Management</Text>
                  </View>
                  <View style={{ flex: 1 }}>
                    <ProgressBar style={styles.ProgressBarStyle}
                      color={'#03DAC5'} height={12} borderWidth={0}
                      borderRadius={10} unfilledColor={'white'}
                      progress={0.3} width={130} />
                    <View style={{ paddingTop: 10 }}>
                      <Text style={styles.TimeText}>Start: 14/12/2020</Text>
                      <Text style={styles.TimeText}>End: 28/04/2021</Text>
                    </View>
                  </View>
                </View>
              </TouchableHighlight>
            </View>

            <View style={styles.BoxWrapStyle}>

              <TouchableHighlight style={styles.Touchable} onPress={() => { }}>
                <View style={styles.BoxStyle}>
                  <View style={styles.HeadViewStyle}>
                    <Text style={styles.HeadTextStyle}>Medical Report Tracking</Text>
                  </View>
                  <View style={{ flex: 1 }}>
                    <ProgressBar style={styles.ProgressBarStyle}
                      color={'#03DAC5'} height={12} borderWidth={0}
                      borderRadius={10} unfilledColor={'white'}
                      progress={0.5} width={130} />
                    <View style={{ paddingTop: 10 }}>
                      <Text style={styles.TimeText}>Start: 14/12/2020</Text>
                      <Text style={styles.TimeText}>End: 28/04/2021</Text>
                    </View>
                  </View>
                </View>
              </TouchableHighlight>

              <TouchableHighlight style={styles.Touchable} onPress={() => { }}>
                <View style={styles.BoxStyle}>
                  <View style={styles.HeadViewStyle}>
                    <Text style={styles.HeadTextStyle}>Group Research Study</Text>
                  </View>
                  <View style={{ flex: 1 }}>
                    <ProgressBar style={styles.ProgressBarStyle}
                      color={'#03DAC5'} height={12} borderWidth={0}
                      borderRadius={10} unfilledColor={'white'}
                      progress={0.7} width={130} />
                    <View style={{ paddingTop: 10 }}>
                      <Text style={styles.TimeText}>Start: 14/12/2020</Text>
                      <Text style={styles.TimeText}>End: 28/04/2021</Text>
                    </View>
                  </View>
                </View>
              </TouchableHighlight>
            </View>

            <View style={styles.BoxWrapStyle}>

              <TouchableHighlight style={styles.Touchable} onPress={() => { }}>
                <View style={styles.BoxStyle}>
                  <View style={styles.HeadViewStyle}>
                    <Text style={styles.HeadTextStyle}>Mango Project</Text>
                  </View>
                  <View style={{ flex: 1 }}>
                    <ProgressBar style={styles.ProgressBarStyle}
                      color={'#03DAC5'} height={12} borderWidth={0}
                      borderRadius={10} unfilledColor={'white'}
                      progress={0.6} width={130} />
                    <View style={{ paddingTop: 10 }}>
                      <Text style={styles.TimeText}>Start: 14/12/2020</Text>
                      <Text style={styles.TimeText}>End: 28/04/2021</Text>
                    </View>
                  </View>
                </View>
              </TouchableHighlight>

              <TouchableHighlight style={styles.Touchable} onPress={() => { }}>
                <View style={styles.BoxStyle}>
                  <View style={styles.HeadViewStyle}>
                    <Text style={styles.HeadTextStyle}>Accident Alert System</Text>
                  </View>
                  <View style={{ flex: 1 }}>
                    <ProgressBar style={styles.ProgressBarStyle}
                      color={'#03DAC5'} height={12} borderWidth={0}
                      borderRadius={10} unfilledColor={'white'}
                      progress={1} width={130} />
                    <View style={{ paddingTop: 10 }}>
                      <Text style={styles.TimeText}>Start: 14/12/2020</Text>
                      <Text style={styles.TimeText}>End: 28/04/2021</Text>
                    </View>
                  </View>
                </View>
              </TouchableHighlight>

            </View>

            <View style={styles.BoxWrapStyle}>

              <TouchableHighlight style={styles.Touchable} onPress={() => { }}>
                <View style={styles.BoxStyle}>
                  <View style={styles.HeadViewStyle}>
                    <Text style={styles.HeadTextStyle}>Water Management System</Text>
                  </View>
                  <View style={{ flex: 1 }}>
                    <ProgressBar style={styles.ProgressBarStyle}
                      color={'#03DAC5'} height={12} borderWidth={0}
                      borderRadius={10} unfilledColor={'white'}
                      progress={0.8} width={130} />
                    <View style={{ paddingTop: 10 }}>
                      <Text style={styles.TimeText}>Start: 14/12/2020</Text>
                      <Text style={styles.TimeText}>End: 28/04/2021</Text>
                    </View>
                  </View>
                </View>
              </TouchableHighlight>

              <TouchableHighlight style={styles.Touchable} onPress={() => { }}>
                <View style={styles.BoxStyle}>
                  <View style={styles.HeadViewStyle}>
                    <Text style={styles.HeadTextStyle}>OOOOOOOOOOOOOOOOOOOOOOOOOOOOOO</Text>
                  </View>
                  <View style={{ flex: 1 }}>
                    <ProgressBar style={styles.ProgressBarStyle}
                      color={'#03DAC5'} height={12} borderWidth={0}
                      borderRadius={10} unfilledColor={'white'}
                      progress={0.8} width={130} />
                    <View style={{ paddingTop: 10 }}>
                      <Text style={styles.TimeText}>Start: 14/12/2020</Text>
                      <Text style={styles.TimeText}>End: 28/04/2021</Text>
                    </View>
                  </View>
                </View>
              </TouchableHighlight>
            </View>

          </View>
        </ScrollView>
      </View>
    </View>
  );
}
// Maximum number characters of project heading should be 30 charachters. More than that would make it go 4 lines 
const styles = StyleSheet.create({

  Touchable: {
    alignItems:'stretch',
    width:170,
    borderRadius:10,
  },

  BoxStyle: {
    flex: 1,
    borderRadius: 10,
    height: 150,
    margin: 5,
    paddingRight: 10,
    paddingLeft: 10,
    paddingTop: 10,
    backgroundColor: '#333333',
    justifyContent: 'center',
    alignContent: 'center',
  },
  TimeText: {
    justifyContent: 'center',
    alignSelf: 'center',
    color: 'white',
    fontWeight: 'bold'
  },
  BoxWrapStyle: {
    alignContent: 'space-between',
    flexDirection: 'row',
  },
  HeadTextStyle: {
    color: 'white',
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: 20,
    paddingBottom: 10,
    fontWeight: 'normal'
  },
  ProgressBarStyle: {
    justifyContent: 'center',
    alignSelf: 'center',
  },
  HeadViewStyle: {
    flex: 1,
    paddingBottom: 5,
    justifyContent: 'center',
    alignContent: 'center',
  }
});
export default HomeScreenOngoing;
