import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
    mainContainer: {
        marginTop:20,
        backgroundColor:'black',
        flex:1
    },
    inputContainer: {
        padding:50,
        flex: 0,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#494C4F'
        
    },
    listContainer: {
        padding:20,
        flex: 1,
        backgroundColor:'#2F3032'
    },
    input:{
        backgroundColor:"white",
        borderColor: 'black',
        borderWidth : 2,
        height:40,
        padding:10,
        borderRadius:5
    },
    add:{
        width:270,
        marginTop:10,
        borderColor: 'black',
        borderWidth : 2,
        height:40,
        padding:10,
        borderRadius:5,
        alignItems:'center',
        backgroundColor:'#581845'
    },
    listText:{
        flex:1,
        marginTop:2,
        borderColor: 'black',
        borderWidth : 2,
        height:40,
        padding:10,
        backgroundColor:'white'
        
    
    },
    del:{

        marginTop:2,
        borderColor: 'black',
        borderWidth : 2,
        height:40,
        padding:10,
        backgroundColor:'white'
    }
});
export default styles;
