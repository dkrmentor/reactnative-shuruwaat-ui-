import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

export default function Header(props) {
    return (
        <View style={styles.header}>
            <Image
                    style={{width: 250,height:250 }}
                    source={require('../images/logo.png') }

                />
            
            {/* <Text style={styles.headerText}>{props.title}</Text> */}
        </View>
    )
}
const styles = StyleSheet.create({
    header:{
        height:280,
        backgroundColor:'#180c24',
        justifyContent:'center',
        alignItems:'center',
        color:'white',
        borderBottomRightRadius:100,
        marginHorizontal:8
    },
    headerText:{
        color:'white',
        fontWeight:'bold',
        fontSize:30,
    }
  });


  