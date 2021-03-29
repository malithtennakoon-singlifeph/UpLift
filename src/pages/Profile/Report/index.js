import * as React from 'react';
import { View, Text,Button } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

function ProfileReportScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'#00B1A0' }}>
        <View style={{borderRadius:10,backgroundColor:'white',margin:10}}>
          <ScrollView style={{borderRadius:10, margin:10,padding:20}}>
            <Text style={{ fontSize:20, fontWeight:'bold'}}>UpLift </Text>
            <Text style={{ textDecorationLine:'underline'}}>Evaluation Report</Text>
            <Text>This report is generated for the purpose of summarizing student's performances over the semester/year.</Text>
            <Text>
            
                    
            </Text>
            <Text>Student Details : Malith Arjuna Tennakoon</Text>
            <Text>CPM : 17780</Text>
            <Text>MC : 875043</Text>
            <Text>Batch : 2016/2017</Text>
            <Text>Degree Program : BIS (special)</Text>
            <Text>.</Text>
            <Text>.</Text>
            <Text>.</Text>
            <Text>.</Text>
            <Text>Student's Overall Statistic of his/her skills</Text>
            <Text>..................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................</Text>
          </ScrollView>
        </View>

    </View>
  );
}

export default ProfileReportScreen;
