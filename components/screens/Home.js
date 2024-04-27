import React from 'react'
import { SafeAreaView, ScrollView, View } from 'react-native'
import { Searchbar, Text } from 'react-native-paper'
import CardM from './reusedComps/CardM'
import Reuse from './reusedComps/Reuse'

const Home = () => {



  return (
   <SafeAreaView>
    <View >
    <View style={{marginTop: 10, justifyContent: 'center', alignItems:'center', width: 400, marginLeft: 25,  }}>
     <View style={{marginTop: 10}}></View>
      <Reuse />
      <Searchbar
        icon='magnify'
        placeholder="Search..."
        placeholderTextColor='grey'
        onChangeText={""}
        value={""} 
        style ={{borderRadius: 10, borderWidth: 1, marginTop: 20, backgroundColor:"white"}} />
            </View>

        <View style={{marginTop: 10}}>
        <ScrollView
        horizontal 
        showsHorizontalScrollIndicator ={false}>
      <View style={{ flexDirection: 'row' }}>
        <View style={{ width: 400, height: 150, backgroundColor: 'red', margin: 10, borderRadius: 5 }}>
          <Text>Item 1</Text>
        </View>
        <View style={{ width: 400, height: 150, backgroundColor: 'green', margin: 10, borderRadius: 5 }}>
          <Text>Item 2</Text>
        </View>
        <View style={{ width: 400, height: 150, backgroundColor: 'yellow', margin: 10, borderRadius: 5 }}>
          <Text>Item 3</Text>
        </View>
 
      </View>
    </ScrollView>
   
        <Text style ={{textAlign:'center', marginTop: 20, color: 'linear-gradient(90deg, #add8e6, #fff)', fontWeight: 'bold', fontSize:40}}>  Work Around You</Text>
        </View>

  

   
        <CardM />
    </View>
    
   </SafeAreaView>
  )
}

export default Home;