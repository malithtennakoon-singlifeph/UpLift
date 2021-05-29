
import React, {useState} from 'react';
import {ScrollView, View, Text ,TextInput,ToastAndroid, TouchableOpacity } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import firestore from '@react-native-firebase/firestore';
import { Icon } from 'react-native-elements';

function AddProjects({ navigation }) {


  const [groupProjectName, setgroupProjectName] = React.useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [startShow, setStartShow] = useState(false);
  const [endDate, setEndDate] = useState(new Date());
  const [endShow, setEndShow] = useState(false);

  const [startValue, setStartValue] = useState("");
  const [endValue, setEndValue] = useState("");
  const [memberEmail, setMemberEmail] = useState("");
  const [memberArray, setMemberArray] = useState([]);
  let textInputMember;
  let textMem = false;

  const onChangeStart = (event, selectedDate) => {
    const currentStartDate = selectedDate;
    setStartShow(Platform.OS === 'ios');
    setStartDate(currentStartDate);
    setStartValue((1900+currentStartDate.getYear())+"-"+currentStartDate.getMonth()+"-"+currentStartDate.getDate());
    console.log("date is:- "+ currentStartDate);
  };

  const showStartDatepicker = () => {
    setStartShow(true);
  };

  const onChangeEnd = (event, selectedDate) => {
    const currentEndDate = selectedDate;
    setEndShow(Platform.OS === 'ios');
    setEndDate(currentEndDate);
    setEndValue((1900+currentEndDate.getYear())+"-"+currentEndDate.getMonth()+"-"+currentEndDate.getDate());
    console.log("date is:- "+ currentEndDate);
  };

  const showEndDatepicker = () => {
    setEndShow(true);
  };

  const checkEmptyFeilds = () =>{
    if(!groupProjectName){
      console.log("pname")
      alert("Please enter group project name")
    } else if(startValue==""){

      alert("Please enter start date")
    } else if(endValue==""){

      alert("Please enter end date")
    }else{
      //uploadToFirebase();
      uploadToFirestore();
    }
  }
  function makeid(length) {
    var result           = [];
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result.push(characters.charAt(Math.floor(Math.random() * 
      charactersLength)));
    }
    return result.join('');
  }


  function uploadToFirestore(){
    const tempArray=memberArray;
    tempArray.push(auth().currentUser.email);
    setMemberArray(tempArray);
    firestore()
    .collection('Projects')
    .doc(groupProjectName)
    .set({
      project_id: makeid(6),
      project_name: groupProjectName,
      project_admin: auth().currentUser.email,
      project_start_date: startValue,
      project_end_date: endValue,
      project_members: memberArray,
      project_Ongoing_status: true,
      project_created_time: Date.now()
    })
    .then(() => 
      console.log('project is registered in firestore'),
      ToastAndroid.show(groupProjectName+" is created", ToastAndroid.LONG),
      navigation.navigate('OngoinProjectsScreen')
    );
  }


  function ReturnMembers (){

      const listMembers = memberArray.map((member) =>
      <View key={member} style={{paddingLeft:20,marginBottom:20, borderColor:'grey', width:300, borderRadius:5, borderWidth:1, flex:1, flexDirection:'row'}}>
      <View style={{flex:1, height:50, justifyContent:'center'}} >
        <TextInput style={{width:300, color:'black'}} placeholder={member}
        placeholderTextColor={"grey"}/>
      </View>
      <View style={{flex:1,alignItems:'flex-end', justifyContent:'center'}}>
        <TouchableOpacity style={{width:40,height:40,borderRadius:5,marginRight:5 ,
          backgroundColor:'#fff176', justifyContent:'center',alignItems:'center'}} onPress={() => deleteItem(member)}>
          <Text style={{fontSize:40}}>-</Text>
        </TouchableOpacity>
      </View>
  </View>
      );
      return (
        <View>{listMembers}
        </View>);
    
  }

  function deleteItem(name){
    console.log(name);
    setMemberArray(list => list.filter(item => item !== name));
  }

  function addMember(){
    if(memberEmail==""){
      alert("Please enter a mamber user name")
    }else{
      setMemberArray(oldArray => [...oldArray, memberEmail]);
    }
    
  }


  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start', backgroundColor:'#ffffcf' }}>
      <ScrollView style={{ padding:20 , marginBottom:35, }}>
        <View style={{paddingTop:20, paddingBottom:20}}>
          <Text style={{fontSize:30, textAlign:'center',color:'black', fontWeight:'bold'}}>Create a Group Project</Text>
        </View>
        <View  style={{paddingTop:20, paddingBottom:20}}>
          <TextInput style={{paddingLeft:20,color:'black', borderColor:'grey', width:300, borderRadius:5, borderWidth:1}} 
          placeholder={"Name of the Group Project"}
          placeholderTextColor={"grey"}
          maxLength={30}
          textContentType={'username'}
          onChangeText={text => setgroupProjectName(text)} />
        </View>

        <View style={{paddingLeft:20,marginBottom:20, borderColor:'grey', width:300, borderRadius:5, borderWidth:1, flex:1, flexDirection:'row'}}>

          <View style={{flex:1, height:50, justifyContent:'center'}} >
            <TextInput style={{width:300,color:'black'}} placeholder={"Start Date"} value={startValue} 
            placeholderTextColor={"grey"}
            editable={false}
            onChangeText={text => setStartDate(text)}/>
          </View>
          <View style={{flex:1,alignItems:'flex-end', justifyContent:'center'}}>
            <TouchableOpacity style={{width:40,height:40,borderRadius:5,marginRight:5 ,
              backgroundColor:'#fff176', justifyContent:'center',alignItems:'center'}} onPress={showStartDatepicker}>
              <Icon name='calendar-outline' type='ionicon' color='black' />
            </TouchableOpacity>
          </View>
        </View>  

        <View style={{paddingLeft:20,marginBottom:20, borderColor:'grey', width:300, borderRadius:5, borderWidth:1, flex:1, flexDirection:'row'}}>

          <View style={{flex:1, height:50, justifyContent:'center'}} >
            <TextInput style={{width:300, color:'black'}} placeholder={"End Date"} value={endValue} 
            placeholderTextColor={"grey"}
            editable={false}
            onChangeText={text => setEndDate(text)}/>
          </View>
          <View style={{flex:1,alignItems:'flex-end', justifyContent:'center'}}>
            <TouchableOpacity style={{width:40,height:40,borderRadius:5,marginRight:5 ,
              backgroundColor:'#fff176', justifyContent:'center',alignItems:'center'}} onPress={showEndDatepicker}>
              <Icon name='calendar-outline' type='ionicon' color='black' />
            </TouchableOpacity>
          </View>
        </View>

              
        <ReturnMembers/>


        <View style={{paddingLeft:20,marginBottom:20, borderColor:'grey', width:300, borderRadius:5, borderWidth:1, flex:1, flexDirection:'row'}}>

          <View style={{flex:1, height:50, justifyContent:'center'}} >
            <TextInput style={{width:300,color:'black'}} placeholder={"End Date"}
            ref={(ref) => { textInputMember = ref; }}
            placeholder={"Add a Group Member"}
            placeholderTextColor={"grey"}
            textContentType={"emailAddress"}
            onChangeText={text => setMemberEmail(text)}
            clearTextOnFocus={textMem}/>
          </View>
          <View style={{flex:1,alignItems:'flex-end', justifyContent:'center'}}>
            <TouchableOpacity style={{width:40,height:40,borderRadius:5,marginRight:5 ,
              backgroundColor:'#fff176', justifyContent:'center',alignItems:'center'}} onPress={()=>{
                textInputMember.clear();
                addMember();
              }}>
              <Icon name='person-add-outline' type='ionicon' color='black' />
            </TouchableOpacity>
          </View>
        </View>



        {startShow && (
          <DateTimePicker
            testID="dateTimePicker"
            value={startDate}
            mode="date"
            display="default"
            onChange={onChangeStart}
          />
        )}

        {endShow && (
          <DateTimePicker
            testID="dateTimePicker"
            value={endDate}
            mode="date"
            display="default"
            onChange={onChangeEnd}
          />
        )}


      </ScrollView>

      <TouchableOpacity title={'Sing In'} style={{
        backgroundColor: '#fff176',
        borderRadius: 30,
        width: 100,
        height: 40,
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
        marginBottom:30,
      }}
        onPress={() => {checkEmptyFeilds()}}>
        <Text style={{ color: 'black', fontSize: 20 }}>Create</Text>
      </TouchableOpacity>

    </View>
  );
}


export default AddProjects;

/**
 * 
 * 
import React, {useState} from 'react';
import {ScrollView, View, Text ,TextInput, TouchableOpacity } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import { Icon } from 'react-native-elements';

function AddProjects({ navigation }) {


  const [groupProjectName, setgroupProjectName] = React.useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [startShow, setStartShow] = useState(false);
  const [endDate, setEndDate] = useState(new Date());
  const [endShow, setEndShow] = useState(false);
  const [startValue, setStartValue] = useState("");
  const [endValue, setEndValue] = useState("");
  const [memberEmail, setMemberEmail] = useState("");
  const [memberArray, setMemberArray] = useState([]);
  let textInputMember;
  let textMem = false;

  const onChangeStart = (event, selectedDate) => {
    const currentStartDate = selectedDate;
    setStartShow(Platform.OS === 'ios');
    setStartDate(currentStartDate);
    setStartValue((1900+currentStartDate.getYear())+"-"+currentStartDate.getMonth()+"-"+currentStartDate.getDate());
    console.log("date is:- "+ currentStartDate);
  };

  const showStartDatepicker = () => {
    setStartShow(true);
  };

  const onChangeEnd = (event, selectedDate) => {
    const currentEndDate = selectedDate;
    setEndShow(Platform.OS === 'ios');
    setEndDate(currentEndDate);
    setEndValue((1900+currentEndDate.getYear())+"-"+currentEndDate.getMonth()+"-"+currentEndDate.getDate());
    console.log("date is:- "+ currentEndDate);
  };

  const showEndDatepicker = () => {
    setEndShow(true);
  };

  const checkEmptyFeilds = () =>{
    if(!groupProjectName){
      console.log("pname")
      alert("Please enter group project name")
    } else if(startValue==""){

      alert("Please enter start date")
    } else if(endValue==""){

      alert("Please enter end date")
    }else{
      uploadToFirebase();
    }
  }

  function uploadToFirebase(){
      const tempArray=memberArray;
      tempArray.push(auth().currentUser.email);
      setMemberArray(tempArray);
      database()
      .ref('/Projects/'+groupProjectName)
      .set({
        project_name: groupProjectName,
        project_admin: auth().currentUser.email,
        project_start_date: startValue,
        project_end_date: endValue,
        project_members: memberArray,
        project_status: "ongoing",
      })
      .then(() => 
      console.log('project is registered in firebase'),
      alert(groupProjectName+" is created"),
      navigation.goBack()
      );
  }

  function ReturnMembers (){

      const listMembers = memberArray.map((member) =>
      <View key={member} style={{paddingLeft:20,marginBottom:20, borderColor:'grey', width:300, borderRadius:5, borderWidth:1, flex:1, flexDirection:'row'}}>
      <View style={{flex:1, height:50, justifyContent:'center'}} >
        <TextInput style={{width:300, color:'black'}} placeholder={member}
        placeholderTextColor={"grey"}/>
      </View>
      <View style={{flex:1,alignItems:'flex-end', justifyContent:'center'}}>
        <TouchableOpacity style={{width:40,height:40,borderRadius:5,marginRight:5 ,
          backgroundColor:'#fff176', justifyContent:'center',alignItems:'center'}} onPress={() => deleteItem(member)}>
          <Text style={{fontSize:40}}>-</Text>
        </TouchableOpacity>
      </View>
  </View>
      );
      return (
        <View>{listMembers}
        </View>);
    
  }

  function deleteItem(name){
    console.log(name);
    setMemberArray(list => list.filter(item => item !== name));
  }

  function addMember(){
    if(memberEmail==""){
      alert("Please enter a mamber user name")
    }else{
      setMemberArray(oldArray => [...oldArray, memberEmail]);
    }
    
  }


  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start', backgroundColor:'#ffffcf' }}>
      <ScrollView style={{ padding:20 , marginBottom:35, }}>
        <View style={{paddingTop:20, paddingBottom:20}}>
          <Text style={{fontSize:30, textAlign:'center',color:'black', fontWeight:'bold'}}>Create a Group Project</Text>
        </View>
        <View  style={{paddingTop:20, paddingBottom:20}}>
          <TextInput style={{paddingLeft:20,color:'black', borderColor:'grey', width:300, borderRadius:5, borderWidth:1}} 
          placeholder={"Name of the Group Project"}
          placeholderTextColor={"grey"}
          maxLength={30}
          textContentType={'username'}
          onChangeText={text => setgroupProjectName(text)} />
        </View>

        <View style={{paddingLeft:20,marginBottom:20, borderColor:'grey', width:300, borderRadius:5, borderWidth:1, flex:1, flexDirection:'row'}}>

          <View style={{flex:1, height:50, justifyContent:'center'}} >
            <TextInput style={{width:300,color:'black'}} placeholder={"Start Date"} value={startValue} 
            placeholderTextColor={"grey"}
            editable={false}
            onChangeText={text => setStartDate(text)}/>
          </View>
          <View style={{flex:1,alignItems:'flex-end', justifyContent:'center'}}>
            <TouchableOpacity style={{width:40,height:40,borderRadius:5,marginRight:5 ,
              backgroundColor:'#fff176', justifyContent:'center',alignItems:'center'}} onPress={showStartDatepicker}>
              <Icon name='calendar-outline' type='ionicon' color='black' />
            </TouchableOpacity>
          </View>
        </View>  

        <View style={{paddingLeft:20,marginBottom:20, borderColor:'grey', width:300, borderRadius:5, borderWidth:1, flex:1, flexDirection:'row'}}>

          <View style={{flex:1, height:50, justifyContent:'center'}} >
            <TextInput style={{width:300, color:'black'}} placeholder={"End Date"} value={endValue} 
            placeholderTextColor={"grey"}
            editable={false}
            onChangeText={text => setEndDate(text)}/>
          </View>
          <View style={{flex:1,alignItems:'flex-end', justifyContent:'center'}}>
            <TouchableOpacity style={{width:40,height:40,borderRadius:5,marginRight:5 ,
              backgroundColor:'#fff176', justifyContent:'center',alignItems:'center'}} onPress={showEndDatepicker}>
              <Icon name='calendar-outline' type='ionicon' color='black' />
            </TouchableOpacity>
          </View>
        </View>

              
        <ReturnMembers/>


        <View style={{paddingLeft:20,marginBottom:20, borderColor:'grey', width:300, borderRadius:5, borderWidth:1, flex:1, flexDirection:'row'}}>

          <View style={{flex:1, height:50, justifyContent:'center'}} >
            <TextInput style={{width:300,color:'black'}} placeholder={"End Date"}
            ref={(ref) => { textInputMember = ref; }}
            placeholder={"Add a Group Member"}
            placeholderTextColor={"grey"}
            textContentType={"emailAddress"}
            onChangeText={text => setMemberEmail(text)}
            clearTextOnFocus={textMem}/>
          </View>
          <View style={{flex:1,alignItems:'flex-end', justifyContent:'center'}}>
            <TouchableOpacity style={{width:40,height:40,borderRadius:5,marginRight:5 ,
              backgroundColor:'#fff176', justifyContent:'center',alignItems:'center'}} onPress={()=>{
                textInputMember.clear();
                addMember();
              }}>
              <Icon name='person-add-outline' type='ionicon' color='black' />
            </TouchableOpacity>
          </View>
        </View>



        {startShow && (
          <DateTimePicker
            testID="dateTimePicker"
            value={startDate}
            mode="date"
            display="default"
            onChange={onChangeStart}
          />
        )}

        {endShow && (
          <DateTimePicker
            testID="dateTimePicker"
            value={endDate}
            mode="date"
            display="default"
            onChange={onChangeEnd}
          />
        )}


      </ScrollView>

      <TouchableOpacity title={'Sing In'} style={{
        backgroundColor: '#fff176',
        borderRadius: 30,
        width: 100,
        height: 40,
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
        marginBottom:30,
      }}
        onPress={() => {checkEmptyFeilds()}}>
        <Text style={{ color: 'black', fontSize: 20 }}>Create</Text>
      </TouchableOpacity>

    </View>
  );
}


export default AddProjects;

 */