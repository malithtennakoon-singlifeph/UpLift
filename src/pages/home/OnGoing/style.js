import { StyleSheet,Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


export default StyleSheet.create({
    OuterTile:{
        flexDirection: 'row',
        flexWrap: "wrap",
    },
    Touchable: {
        flex:1,
        width:((windowWidth/100)*45),
        height:((windowHeight/100)*21),
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
        paddingBottom: 0,
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
      },
      mView:{
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center', 
        backgroundColor: '#302F2F',
      },
      mmView:{
        flex:1, 
        width: '95%', 
        height: '97%', 
        borderRadius: 10, 
        backgroundColor: 'white', 
        margin: 10, 
        alignItems:'center'
      },
      addBtn:{
        borderRadius:5, 
        height:35, 
        width:'95%',
        marginTop:10, 
        marginBottom:5,
        backgroundColor:'#302F2F',
        color:'#8F8F8F',
        justifyContent:'center',
        alignItems:'center',
      }

});