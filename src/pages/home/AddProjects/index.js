import React, {useState} from 'react';
import {Button,ScrollView, View, Text ,TextInput} from 'react-native';
import ProgressBar from 'react-native-progress/Bar';
import DateTimePicker from '@react-native-community/datetimepicker';
import { TouchableOpacity } from 'react-native';
import { add } from 'react-native-reanimated';

function AddProjects({ navigation }) {
  const [groupProjectName, setgroupProjectName] = React.useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [startShow, setStartShow] = useState(false);
  const [endDate, setEndDate] = useState(new Date());
  const [endShow, setEndShow] = useState(false);
  const [memberEmail, setMemberEmail] = useState([]);
  const [startValue, setStartValue] = useState("");
  const [endValue, setEndValue] = useState("");
  const userNames = [];

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
      alert("Please enter group project name")
    } else if(!startDate){
      alert("Please enter start date")
    } else if(!endDate){
      alert("Please enter end date")
    }
  }

  const addMember= ()=>{
    userNames.push(memberEmail);
    const arrayLength = userNames.length;
    for(var i=0; i < arrayLength; i++){
      console.log("Array works:- "+userNames[i]);
      return(

        <View style={{paddingLeft:20,marginBottom:20, borderColor:'black', width:300, borderRadius:5, borderWidth:1, flex:1, flexDirection:'row'}}>

        <View style={{flex:1, height:50, justifyContent:'center'}} >
          <TextInput style={{width:300}} placeholder={"End Date"}
          placeholder={userNames[i]+""}
          placeholderTextColor={"white"}/>
        </View>
        <View style={{flex:1,alignItems:'flex-end', justifyContent:'center'}}>
          <TouchableOpacity style={{width:40,height:40,borderRadius:5,marginRight:5 ,
            backgroundColor:'green', justifyContent:'center',alignItems:'center'}} onPress={
              userNames.splice(i)
            }>
            <Text style={{fontSize:35}}>+</Text>
          </TouchableOpacity>
        </View>
      </View>

      );
    }
  }


  return (
    <View style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'flex-start', backgroundColor:'#00B1A0' }}>
      <ScrollView style={{ padding:20 , flex:1}}>
        <View style={{paddingTop:20, paddingBottom:20}}>
          <Text style={{fontSize:25}}>Create a Group Project</Text>
        </View>
        <View  style={{paddingTop:20, paddingBottom:20}}>
          <TextInput style={{paddingLeft:20, borderColor:'black', width:300, borderRadius:5, borderWidth:1}} 
          placeholder={"Name of the Group Project"}
          placeholderTextColor={"white"}
          maxLength={30}
          textContentType={'username'} />
        </View>

        <View style={{paddingLeft:20,marginBottom:20, borderColor:'black', width:300, borderRadius:5, borderWidth:1, flex:1, flexDirection:'row'}}>

          <View style={{flex:1, height:50, justifyContent:'center'}} >
            <TextInput style={{width:300}} placeholder={"Start Date"} value={startValue} 
            placeholderTextColor={"white"}
            editable={false}/>
          </View>
          <View style={{flex:1,alignItems:'flex-end', justifyContent:'center'}}>
            <TouchableOpacity style={{width:40,height:40,borderRadius:5,marginRight:5 ,
              backgroundColor:'green', justifyContent:'center',alignItems:'center'}} onPress={showStartDatepicker}>
              <Text style={{fontSize:35}}>+</Text>
            </TouchableOpacity>
          </View>
        </View>  

        <View style={{paddingLeft:20,marginBottom:20, borderColor:'black', width:300, borderRadius:5, borderWidth:1, flex:1, flexDirection:'row'}}>

          <View style={{flex:1, height:50, justifyContent:'center'}} >
            <TextInput style={{width:300}} placeholder={"End Date"} value={endValue} 
            placeholderTextColor={"white"}
            editable={false}/>
          </View>
          <View style={{flex:1,alignItems:'flex-end', justifyContent:'center'}}>
            <TouchableOpacity style={{width:40,height:40,borderRadius:5,marginRight:5 ,
              backgroundColor:'green', justifyContent:'center',alignItems:'center'}} onPress={showEndDatepicker}>
              <Text style={{fontSize:35}}>+</Text>
            </TouchableOpacity>
          </View>
        </View>







      <View style={{paddingLeft:20,marginBottom:20, borderColor:'black', width:300, borderRadius:5, borderWidth:1, flex:1, flexDirection:'row'}}>

        <View style={{flex:1, height:50, justifyContent:'center'}} >
          <TextInput style={{width:300}} placeholder={"End Date"}
          placeholder={"Add a Group Member"}
          placeholderTextColor={"white"}
          textContentType={"emailAddress"}
          onChangeText={text => setMemberEmail(text)}/>
        </View>
        <View style={{flex:1,alignItems:'flex-end', justifyContent:'center'}}>
          <TouchableOpacity style={{width:40,height:40,borderRadius:5,marginRight:5 ,
            backgroundColor:'green', justifyContent:'center',alignItems:'center'}} onPress={addMember()}>
            <Text style={{fontSize:35}}>+</Text>
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
    </View>
  );
}


export default AddProjects;

/*



*/