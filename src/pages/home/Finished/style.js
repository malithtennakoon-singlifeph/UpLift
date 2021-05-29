import { StyleSheet,Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


export default StyleSheet.create({
    OuterTile:{
    },
    Touchable: {
        flex:1,
        width:((windowWidth/100)*45),
        height:((windowHeight/100)*23),
        borderRadius:10,
        marginLeft:6,
      },
      BoxStyle: {
        flex: 1,
        borderRadius: 10,
        height: 150,
        margin: 5,
        paddingRight: 10,
        paddingLeft: 10,
        paddingTop: 0,
        backgroundColor: '#ffffcf',
        justifyContent: 'center',
        alignContent: 'center',
      },
      TimeText: {
        justifyContent: 'center',
        alignSelf: 'center',
        color: 'black',
        fontWeight: 'bold'
      },
      BoxWrapStyle: {
        alignContent: 'space-between',
        flexDirection: 'row',
      },
      HeadTextStyle: {
        color: 'black',
        alignSelf: 'center',
        textAlign: 'center',
        fontSize: 20,
        paddingBottom: 0,
        fontWeight: 'normal'
      },
      ProgressBarStyle: {
        justifyContent: 'center',
        alignSelf: 'center',
      },
      HeadViewStyle: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
      },
      mView:{
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center', 
        backgroundColor: '#ffffcf',
      },
      mmView:{
        flex:1, 
        width: '95%', 
        height: '97%', 
        borderRadius: 10, 
        backgroundColor: 'black', 
        margin: 10, 
        paddingTop:5,
        alignItems:'center'
      },
      addBtn:{
        borderRadius:5, 
        height:35, 
        width:'95%',
        marginTop:10, 
        marginBottom:5,
        backgroundColor:'#ffffcf',
        color:'#8F8F8F',
        justifyContent:'center',
        alignItems:'center',
      }

});