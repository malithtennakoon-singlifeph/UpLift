import React from 'react';
import { View, ScrollView ,ToastAndroid} from 'react-native';
import {Button, Icon, Text, Input} from 'react-native-elements';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

function SettingsScreen() {
  const user =auth().currentUser
  const db =firestore().collection('Users')
  const [loading, setLoading] = React.useState(false); 

  const [userFirstName, setUserFirstName] = React.useState();
  const [userFamilyName, setUserFamilyName] = React.useState();
  const [userEmail, setUserEmail] = React.useState();
  const [userPhoneNumber, setUserPhoneNumber] = React.useState();
  const [userUniversityName, setUserUniversityName] = React.useState();
  const [userFacultyName, setUserFacultyName] = React.useState();
  const [userDepartmentName, setUserDepartmentName] = React.useState();
  const [userUniBatch, setUserUniBatch] = React.useState();
  const [userRegistrationNumber, setUserRegistrationNumber] = React.useState();

  React.useEffect(()=>{
      setLoading(true)
      db
      .where('email','==',user.email)
      .limit(1)
      .get()
      .then(documentSnapshot => {
        documentSnapshot.docs.forEach((doc)=>{
          setUserFirstName(doc.data().first_name)
          setUserFamilyName(doc.data().last_name)
          setUserEmail(doc.data().email)
          setUserPhoneNumber(doc.data().phone_number)
          setUserUniversityName(doc.data().university)
          setUserFacultyName(doc.data().faculty)
          setUserDepartmentName(doc.data().department)
          setUserUniBatch(doc.data().batch)
          setUserRegistrationNumber(doc.data().Registration_number)
        })
        setLoading(false)
      });
  },[])

  function Save(){
    setLoading(true)    
    db
    .doc(user.uid)
    .set({
      first_name: userFirstName,
      last_name: userFamilyName,
      phone_number: userPhoneNumber,
      university: userUniversityName,
      faculty: userFacultyName,
      department: userDepartmentName,
      batch: userUniBatch,
      Registration_number: userRegistrationNumber,
    })
    .then(() => {
      console.log('User added! in firestore')
      setLoading(false)
      ToastAndroid.show("Profile is Updated", ToastAndroid.LONG)
    });
  }

    return (
      <View style={{ flex: 1, backgroundColor:'#ffffcf' }}>
        <View style={{flex:1, flexDirection:'row', flexWrap:'wrap', justifyContent:'space-evenly', paddingTop:20}}>
          <View >
            <Text h2>Edit Profile</Text>
          </View>
          <Button title=" Save"
          buttonStyle={{width:100, height:40}}
          loading={loading}
            onPress={()=>{Save()}}
            icon={
              <Icon name="save-outline"  type='ionicon'  color="white"  />
            }
          />
        </View>
        <View style={{flex:9, }}>
          <ScrollView style={{padding:10  }}>
            <Input
              defaultValue={userFirstName}
              label='First Name'
              onChangeText={text=>{setUserFirstName(text)}}
            />
            <Input
              defaultValue={userFamilyName}
              label='Last Name'
              onChangeText={text=>{setUserFamilyName(text)}}
            />
            <Input
              defaultValue={userEmail}
              disabled={true}
              label='Email'
              onChangeText={text=>{setUserEmail(text)}}
            />
            <Input
              defaultValue={userPhoneNumber}
              label='Phone Number'
              onChangeText={text=>{setUserPhoneNumber(text)}}
            />
            <Input
              defaultValue={userUniversityName}
              label='University'
              onChangeText={text=>{setUserUniversityName(text)}}
            />
            <Input
              defaultValue={userFacultyName}
              label='Faculty'
              onChangeText={text=>{setUserFacultyName(text)}}
            />
            <Input
              defaultValue={userDepartmentName}
              label='Department'
              onChangeText={text=>{setUserDepartmentName(text)}}
            />
            <Input
              defaultValue={userUniBatch}
              label='Batch'
              onChangeText={text=>{setUserUniBatch(text)}}
            />
            <Input
              defaultValue={userRegistrationNumber}
              label='Registration Number'
              onChangeText={text=>{setUserRegistrationNumber(text)}}
            />
          </ScrollView>
        </View>
        
      </View>
    );
  }

export default SettingsScreen;


            // <Input
            //   placeholder={
            //     userPhoneNumber===''? '+947_ _______' : userPhoneNumber
            //   }
            //   label='Phone Number'
            //   //onChangeText={text=>{setPhoneNumber(text)}}
            // />
            // <Input
            //   placeholder={
            //     userUniversityName===''? 'University of ___' : userUniversityName
            //   }
            //   label='University'
            //   //onChangeText={text=>{setUniversityName(text)}}
            // />
            // <Input
            //   placeholder={
            //     userDepartmentName===''? 'Department of ___' : userDepartmentName
            //   }
            //   label='Department'
            //   //onChangeText={text=>{setDepartmentName(text)}}
            // />
            // <Input
            //   placeholder={
            //     userFacultyName===''? 'Faculty of ___' : userFacultyName
            //   }
            //   label='Faculty'
            //   //onChangeText={text=>{setFacultyName(text)}}
            // />
            // <Input
            //   placeholder="20__"
            //   placeholder={
            //     userUniBatch===''? '20__' : userUniBatch
            //   }
            //   label='Batch'
            //   //onChangeText={text=>{setUniBatch(text)}}
            // />
            // <Input
            //   placeholder={
            //     userRegistrationNumber===''? '0000' : userRegistrationNumber
            //   }
            //   label='Registration Number'
            //   //onChangeText={text=>{setRegistrationNumber(text)}}
            // />