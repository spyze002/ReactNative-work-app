import React from 'react'
import { ImageBackground, SafeAreaView, StyleSheet, View } from 'react-native'
import { Button, Text } from 'react-native-paper'

export default function Welcome() {
  return (
    <SafeAreaView >
          <ImageBackground source={ require("../images/mainme.jpg")}
            style = {styles.imgs}>
              <View style ={{
                marginTop: 600,
                justifyContent:'space-evenly',
                height: '30%',
                width: 400,
                alignItems: 'center',
                marginLeft: 20
              }} >
              <Text variant='displaySmall' style ={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                color: '#fff',
                fontWeight: 'bold',
                width:'100%',

              }}>Let's find work in your local area!</Text>
                <Text style = {styles.txt}> Lorem ipsum dolor, sit amet consectetur adipisicing elit id consectetur iste? </Text>
                <Button style={{
                  display: 'flex',
                  justifyContent: 'center',
                  height: 50,
                  marginLeft: 50,
                  alignItems: 'center',
                  marginRight: 50,
                  width:'100%'
                
                  
                  
                }} 
                mode="contained" 
                buttonColor='white'
                textColor='black'
                onPress={() => console.log('Pressed')}
                
                >
                  Get Started
  </Button>
              </View>
    
          </ImageBackground>
      </SafeAreaView>
  )


}


const styles = StyleSheet.create({

    txt: {
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center',
      color: '#84878C',

      
    },
    imgs: {

      resizeMode: 'cover', // or 'stretch', 'contain'
      width: '100%', // Width of the image, you can adjust this
      height: '100%', // Height of the image, you can adjust this
    },
  
  })