import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
    mainContainer: {
        flex:1,
        borderColor: 'black',
        borderWidth : 2,
        backgroundColor: 'white'
    },
    inputContainer: {
        borderColor: 'black',
        borderWidth : 2,
        padding:50,
        flex: 0,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    listContainer: {
        borderColor: 'black',
        borderWidth : 2,
        padding:20,
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        // backgroundColor: 'white'
    },
    input:{
        borderColor: 'black',
        borderWidth : 2,
        height:40,
        padding:10,
        borderRadius:5
    },
    add:{

        marginTop:2,
        borderColor: 'black',
        borderWidth : 2,
        height:40,
        padding:10,
        borderRadius:5
    },
    listText:{
        flex:1,
        marginTop:2,
        borderColor: 'black',
        borderWidth : 2,
        height:40,
        padding:10,
        borderRadius:5
    },
    del:{

        marginTop:2,
        borderColor: 'black',
        borderWidth : 2,
        height:40,
        padding:10,
        borderRadius:5
    }
});
export default styles;
