import React, {useEffect} from 'react';
import { View, Text, ToastAndroid } from 'react-native';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';
import { Icon, Input, Button } from 'react-native-elements';
import firestore from '@react-native-firebase/firestore';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';


function CustomDrawer({navigation}){

  return(
      <View style={{ flex:1, backgroundColor:'#ffffcf'}}>
          <View style={{height:'20%', padding:20,justifyContent:'center', alignItems:'center'}}>
              <Text style={{ fontSize:30}}>Profile Info</Text>
          </View>

          <ScrollView style={{flex:15, height:'70%'}} sc indica showsVerticalScrollIndicator={true}  >


          </ScrollView>

          

          <View style={{height:'10%', flexDirection:'row', alignItems:'center', justifyContent:'space-around'}}>

                <Button
                type='outline'
                icon={
                  <Icon name="log-out-outline"  type='ionicon'  color="black"  />
                }
                onPress={() => {auth().signOut().then(() => console.log('User signed out!'))}}
                titleStyle={{color:'black'}}
                title=" Logout"
              />

              <Button
              type='outline'
              icon={
                <Icon
                name='save-outline'
                type='ionicon'
                color='black'
              />
              }
              //onPress={UpdateProfile}
              titleStyle={{color:'black'}}
              title=" save"
            />
          </View>
      </View>

  )
}

export default CustomDrawer;


/*
import React, {useEffect} from 'react';
import { View, Text, ToastAndroid } from 'react-native';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';
import { Icon, Input, Button } from 'react-native-elements';
import firestore from '@react-native-firebase/firestore';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';


function CustomDrawer({navigation}){
  const userId = auth().currentUser.uid;
  const [userFirstName, setUserFirstName] = React.useState("");
  const [userFamilyName, setUserFamilyName] = React.useState("");
  const [userEmail, setUserEmail] = React.useState("");
  const [userPhoneNumber, setUserPhoneNumber] = React.useState("");
  const [userUniversityName, setUserUniversityName] = React.useState("");
  const [userFacultyName, setUserFacultyName] = React.useState("");
  const [userDepartmentName, setUserDepartmentName] = React.useState("");
  const [userUniBatch, setUserUniBatch] = React.useState("");
  const [userRegistrationNumber, setUserRegistrationNumber] = React.useState("");

  useEffect(()=>{

    firestore()
    .collection('Users')
    .doc(userId)
    .get()
    .then(documentSnapshot => {
      console.log('User profile exists: ', documentSnapshot.data());
      var d= documentSnapshot.data();
      if (documentSnapshot.exists) {
        setUserFirstName(d.first_name);
        setUserFamilyName(d.last_name);
        setUserEmail(d.email);
        setUserPhoneNumber(d.phone_number);
        setUserUniversityName(d.university);
        setUserFacultyName(d.faculty);
        setUserDepartmentName(d.department);
        setUserUniBatch(d.batch);
        setUserRegistrationNumber(d.Registration_number);
      }else{
        console.log('user does not exist')
      }
    })
    // database()
    // .ref('/Users/'+userId)
    // .on('value',snapshot =>{
    //   var data=snapshot.val();
    //   setUserFirstName(data.first_name);
    //   setUserFamilyName(data.last_name);
    //   setUserEmail(data.email);
    //   setUserPhoneNumber(data.phone_number);
    //   setUserUniversityName(data.university);
    //   setUserFacultyName(data.faculty);
    //   setUserDepartmentName(data.department);
    //   setUserUniBatch(data.batch);
    //   setUserRegistrationNumber(data.Registration_number);
    // });
   },[]);
  


  const [FirstName, setFirstName] = React.useState(userFirstName);
  const [FamilyName, setFamilyName] = React.useState(userFamilyName);
  const [Email, setEmail] = React.useState(userEmail);
  const [PhoneNumber, setPhoneNumber] = React.useState(userPhoneNumber);
  const [UniversityName, setUniversityName] = React.useState(userUniversityName);
  const [FacultyName, setFacultyName] = React.useState(userFacultyName);
  const [DepartmentName, setDepartmentName] = React.useState(userDepartmentName);
  const [UniBatch, setUniBatch] = React.useState(userUniBatch);
  const [RegistrationNumber, setRegistrationNumber] = React.useState(userRegistrationNumber);



  console.log("Fname is ",FirstName)
  console.log("Lname is ",FamilyName)
  console.log("Email is ",Email)
  console.log("Pnumber is ",PhoneNumber)
  console.log("faculty name is ",FacultyName)
  console.log("Uni name is ",UniversityName)





  function UpdateProfile(){
    firestore()
    .collection('Users')
    .doc(userId)
    .set({
      Registration_number: RegistrationNumber,
      batch: UniBatch,
      department: DepartmentName,
      email: Email,
      faculty: FacultyName,
      first_name: FirstName,
      last_name: FamilyName,
      phone_number: PhoneNumber,
      university: UniversityName,
    })
    .then(() => {
      ToastAndroid.show("Your profile has been Updated!", ToastAndroid.LONG)
      console.log('PRofile is updated');
    });


    // database()
    // .ref('/Users/'+userId)
    // .update({
    //   Registration_number: RegistrationNumber,
    //   batch: UniBatch,
    //   department: DepartmentName,
    //   email: Email,
    //   faculty: FacultyName,
    //   first_name: FirstName,
    //   last_name: FamilyName,
    //   phone_number: PhoneNumber,
    //   university: UniversityName,

    // })
    // .then(() => 
    // ToastAndroid.show("Your profile has been Updated!", ToastAndroid.LONG),
    // console.log('PRofile is updated'));
  }

  return(
      <View style={{ flex:1, backgroundColor:'#ffffcf'}}>
          <View style={{height:'20%', padding:20,justifyContent:'center', alignItems:'center'}}>
              <Text style={{ fontSize:30}}>Profile Info</Text>
          </View>

          <ScrollView style={{flex:15, height:'70%'}} sc indica showsVerticalScrollIndicator={true}  >

          <Input
            placeholder={userFirstName}
            label='First Name'
            onChangeText={text=>{setFirstName(text)}}
          />

          <Input
            placeholder={userFamilyName}
            label='Last Name'
            onChangeText={text=>{setFamilyName(text)}}
          />
          <Input
            placeholder={
              userEmail===''? 'email@address.com' : userEmail
            }
            label='Email'
            onChangeText={text=>{setEmail(text)}}
          />
          <Input
            placeholder={
              userPhoneNumber===''? '+947_ _______' : userPhoneNumber
            }
            label='Phone Number'
            onChangeText={text=>{setPhoneNumber(text)}}
          />
          <Input
            placeholder={
              userUniversityName===''? 'University of ___' : userUniversityName
            }
            label='University'
            onChangeText={text=>{setUniversityName(text)}}
          />
          <Input
            placeholder={
              userDepartmentName===''? 'Department of ___' : userDepartmentName
            }
            label='Department'
            onChangeText={text=>{setDepartmentName(text)}}
          />
          <Input
            placeholder={
              userFacultyName===''? 'Faculty of ___' : userFacultyName
            }
            label='Faculty'
            onChangeText={text=>{setFacultyName(text)}}
          />
          <Input
            placeholder="20__"
            placeholder={
              userUniBatch===''? '20__' : userUniBatch
            }
            label='Batch'
            onChangeText={text=>{setUniBatch(text)}}
          />
          <Input
            placeholder={
              userRegistrationNumber===''? '0000' : userRegistrationNumber
            }
            label='Registration Number'
            onChangeText={text=>{setRegistrationNumber(text)}}
          />

          </ScrollView>

          

          <View style={{height:'10%', flexDirection:'row', alignItems:'center', justifyContent:'space-around'}}>

                <Button
                type='outline'
                icon={
                  <Icon name="log-out-outline"  type='ionicon'  color="black"  />
                }
                onPress={() => {auth().signOut().then(() => console.log('User signed out!'))}}
                titleStyle={{color:'black'}}
                title=" Logout"
              />

              <Button
              type='outline'
              icon={
                <Icon
                name='save-outline'
                type='ionicon'
                color='black'
              />
              }
              onPress={UpdateProfile}
              titleStyle={{color:'black'}}
              title=" save"
            />
          </View>
      </View>

  )
}

export default CustomDrawer;
*/