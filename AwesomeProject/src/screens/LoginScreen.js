import React from 'react'
import { View, Text, StyleSheet, TextInput, Button, TouchableOpacity } from 'react-native'
import Header from '../components/Header'

export default function LoginScreen() {
    return (
        <View>
            <Header />
            <View style={styles.textView}>
            <Text style={styles.text1}>Welcome Back !</Text>
            <Text style={styles.text2}>Enter Email & Password To Continue</Text>

            </View>
            
            <View style={styles.inputView}>
                
                <TextInput placeholder="Email" style={styles.input}/>
                <TextInput placeholder="Password" style={styles.input}/>
            </View>
            <View style={{flexDirection:'row',justifyContent:'flex-end',marginHorizontal:20,fontSize:10}}>
            <Text style={{fontWeight: 'bold'}}>Forgot Password?</Text>
            </View>
            <View>
                <TouchableOpacity style={styles.loginBtn}>
                    <Text style={{fontWeight: 'bold'}}>
                        Log In
                    </Text>
                </TouchableOpacity>
                {/* <Button title="Login" style={styles.loginBtn} /> */}
            </View>
            <View style={{marginTop:80, flexDirection:'row',justifyContent:'center'}}>
                <Text style={styles.text3}>Don't have an account? </Text>
                <Text style={styles.text4}>Sign Up</Text>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    textView: {
      marginVertical:20,
      marginHorizontal:20,
      
    },
    text1: {
      fontSize: 18,
      color:'#180c24',
      fontWeight: '600',
    },
    text2: {
        fontSize: 11,
        fontWeight: '400',
        color:'gray',
        marginVertical:5
    },
    input: {
      width:'90%',
      height:45,
      marginHorizontal:25,
      borderWidth:1,
      borderRadius:10,
      borderColor:'gray',
      marginVertical:10,
      paddingVertical:15,
      paddingHorizontal:15,
      
    },
    inputView:{
        justifyContent:'center',
        alignItems:'center'
        
    },
    loginBtn:{
        borderRadius:30,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#fcd41b',
        marginHorizontal:25,
        marginVertical:35,
        height:40,
    },
    text3:{
        fontWeight: '600',
    },
    text4:{
        color:'#fcd41b',
        textDecorationLine:'underline',
        fontWeight: '600',
    }
  });