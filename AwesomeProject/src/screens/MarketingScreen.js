import React from 'react'
import { View, Text, StyleSheet, TextInput, Button, TouchableOpacity, Linking } from 'react-native'
import Card from '../components/Card';
import Header from '../components/Header'

export default function MarketingScreen() {
    var phone=+923232525775
    var message="company name"
    var promotional_message="https://tinyurl.com/dkr-portfolio"
    var business_card="https://tinyurl.com/dkr-portfolio"
    function sendSms(message1) {
        url = `sms:${+923232525775}${Platform.OS === "ios" ? "&" : "?"}body=${message1}`
        Linking.openURL(url);
      }
      function sendWhatsapp(message1){
          url='https://api.whatsapp.com/send?phone='+phone+'&text='+message1;
          Linking.openURL(url)
      }
      function sendPromotionMessage(){

      }
    return (
        <View>
            <Header />
            <View style={styles.headingContainer}>


                <Text style={styles.headingText}>Let's Promote</Text>

            </View>
            <View >
                <Card title="Connect People via sms" bigIcon='comments' smallIcon="mobile" onPress={()=>{
                    sendSms(message)
                }} />
                <Card title="Connect People via Whatsapp" bigIcon='whatsapp' smallIcon="whatsapp" onPress={()=>{sendWhatsapp(message)}}  />
                <Card title="Share Buisness Card" bigIcon='id-card' smallIcon="share-alt" onPress={()=>{
                    // sendSms(promotional_message)
                    sendWhatsapp(business_card)
                }} />
                <Card title="Promotions" bigIcon='microphone' smallIcon="share-alt" onPress={()=>{
                    // sendSms(promotional_message)
                    sendWhatsapp(promotional_message)
                }}  />

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headingText: {
        fontWeight: 'bold',
        fontSize: 25,
        color: 'black'
    },
 

    headingContainer: {
        // justifyContent:'center',
        alignItems: 'center',
        marginVertical: 20
    }
});