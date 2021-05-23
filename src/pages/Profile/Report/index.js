import React, {  useEffect } from 'react';
import { View, Text,Button } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler'
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';

function ProfileReportScreen({navigation}) {
  const userId = auth().currentUser.uid;
  const [userFirstName, setUserFirstName] = React.useState();
  const [userFamilyName, setUserFamilyName] = React.useState();
  const [userAddress, setUserAddress] = React.useState();
  const [userEmail, setUserEmail] = React.useState();
  const [userPhoneNumber, setUserPhoneNumber] = React.useState();
  const [userUniversityName, setUserUniversityName] = React.useState();
  const [userFacultyName, setUserFacultyName] = React.useState();
  const [userDepartmentName, setUserDepartmentName] = React.useState();
  const [userUniBatch, setUserUniBatch] = React.useState();
  const [userRegistrationNumber, setUserRegistrationNumber] = React.useState();
  
  useEffect(()=>{
    

    database()
    .ref('/Users/'+userId)
    .once('value')
    .then(snapshot => {
      var data=snapshot.val();
      //console.log('User data: ', snapshot.val());
      setUserFirstName(data.first_name);
      setUserFamilyName(data.last_name);
      setUserAddress(data.address);
      setUserEmail(data.email);
      setUserPhoneNumber(data.phone_number);
      setUserUniversityName(data.university);
      setUserFacultyName(data.faculty);
      setUserDepartmentName(data.department);
      setUserUniBatch(data.batch);
      setUserRegistrationNumber(data.Registration_number);
    });



  },[]);


  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'#ffffcf' }}>
        <View style={{borderRadius:10,backgroundColor:'white',margin:10}}>
          <ScrollView style={{borderRadius:10, margin:10,padding:20}}>
            <Text style={{ fontSize:20, fontWeight:'bold'}}>UpLift </Text>
            <Text style={{ textDecorationLine:'underline'}}>Evaluation Report</Text>
            <Text>This report is generated for the purpose of summarizing student's performances over the semester/year.</Text>
            <Text>
            
                    
            </Text>
            <Text>Student Details : {userFirstName} {userFamilyName}</Text>
            <Text>Address : {userAddress}</Text>
            <Text>Phone Number : {userPhoneNumber}</Text>
            <Text>Email : {userEmail}</Text>
            <Text>University : {userUniversityName}</Text>
            <Text>Faculty : {userFacultyName}</Text>
            <Text>Department : {userDepartmentName}</Text>
            <Text>CPM : {userRegistrationNumber}</Text>
            <Text>**MC : 875043**</Text>
            <Text>Batch : {userUniBatch}</Text>
            <Text>**Degree Program : BIS (special)**</Text>
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



/* 
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
 */