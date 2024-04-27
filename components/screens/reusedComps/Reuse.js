import React from 'react'
import { Searchbar } from 'react-native-paper'

export default function Reuse() {
  return (

        <Searchbar
        icon='magnify'
        placeholder="Search..."
        placeholderTextColor='grey'
        onChangeText={""}
        value={""} 
        style ={{borderRadius: 10, borderWidth: 1, backgroundColor:"white" }} />
    
  )
}
