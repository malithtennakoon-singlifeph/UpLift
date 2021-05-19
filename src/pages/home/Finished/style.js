import { StyleSheet } from 'react-native';


export default StyleSheet.create({
    
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