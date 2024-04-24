import React from 'react'
import { Button, ImageBackground, SafeAreaView, StyleSheet, Text, View } from 'react-native'

export default function Welcome() {
  return (
    <SafeAreaView >
        <View style = {styles.main}>
          <ImageBackground source={ require("../images/mainme.jpg")}
            style = {styles.imgs}>
            <View >
              <Text style ={styles.txt}>Let's find work in your area</Text>
              <Text style = {styles.txt}> Lorem ipsum dolor, sit amet consectetur adipisicing elit id consectetur iste? </Text>
              <View>
              <Button
              title='Get Started'
              onPress={() =>{}}
                />
              </View>
           
            </View>
          </ImageBackground>
          </View>
      </SafeAreaView>
  )


}


const styles = StyleSheet.create({
    main: {

      justifyContent: 'center',
      alignContent: 'center',
    },
    txt: {
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center',
      color: 'black',
      
    },
    imgs: {

      resizeMode: 'cover', // or 'stretch', 'contain'
      width: '100%', // Width of the image, you can adjust this
      height: '100%', // Height of the image, you can adjust this
    },
  
  })