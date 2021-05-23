import * as React from 'react';
import {ScrollView, View, Text } from 'react-native';
import ProgressBar from 'react-native-progress/Bar';
import styles from './style.js';


function HomeScreenFinished({ navigation }) {

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'#ffffcf' }}>

      <View style={{width:'95%',height:'97%',borderRadius:10,backgroundColor:'black',margin:10}}>
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

export default HomeScreenFinished;

