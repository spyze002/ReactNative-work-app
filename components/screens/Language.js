import React, { useState } from 'react'
import { SafeAreaView, View } from 'react-native'
import { Searchbar, Text } from 'react-native-paper'

const Language = () => {
const [country, setCountry] = useState([
    {
        id: 1,
        name: 'English',
        code: 'en'
    },
    {
        id: 2,
        name: 'French',
        code: 'fr'
    },
    {
        id: 3,
        name: 'German',
        code: 'de'
    },
    {
        id: 4,
        name: 'Spanish',
        code: 'es'
    },
    {
        id: 5,
        name: 'Italian',
        code: 'it'
    }
])



  return (
   <SafeAreaView>
    <View style ={{display:'flex'}}>
    <View style={{marginTop: 10, justifyContent: 'center', alignItems:'center', width: 400, marginLeft: 25, }}>
      <Text variant='displaySmall'  style={{fontWeight: 'bold'}}>Select a Language </Text>
      <Searchbar
      icon='search'
      placeholder="Search"
      onChangeText={setCountry}
      value={country}

    />
    <Text variant='displayMedium' style={{fontWeight: 'bold'}}>
        {country.map(({id, name, code}) => {
            return (
                <View variant ='displaySmall' key={id} style ={{display: 'flex', flexDirection: 'column'}}>
                    <Text>{name}</Text>
                    <Text>{code}</Text>
                </View>
            )
        })}
    </Text>
    </View>
    </View>
    
   </SafeAreaView>
  )
}

export default Language;