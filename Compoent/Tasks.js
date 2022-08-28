import React from "react";
import { StyleSheet,View,Text,Button,TouchableOpacity } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
function Tasks({text}) {
    return (  
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <TouchableOpacity style={styles.square}></TouchableOpacity>
                <Text style={styles.itemText}>{text}</Text>
            </View>
            <View style={styles.circular}></View>
            {/* <Text>{task}</Text> */}

        </View>
    );
}
const styles=StyleSheet.create({
    item:{
        backgroundColor:"#ebf5f4",
        padding:15,
        borderRadius:10,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        margin:12,
    },
    itemLeft:{
        flexDirection:"row",
        alignItems:"center",
        flexWrap:"wrap",
        
        
    },
    square:{
        height:24,
        width:24,
        backgroundColor:"#55BCF6",
        opacity:0.4,
        borderRadius:5,
        marginRight:15,
    },
    itemText:{
        maxWidth:"80%",
        color:"#000000",
        fontSize:20,
        fontFamily:'WorkSans-VariableFont_wght'
            
    },
    circular:{
        width:12,
        height:12,
        borderColor:"#55BCF6",
        borderWidth:2,
        borderRadius:5,
    }
})

export default Tasks;