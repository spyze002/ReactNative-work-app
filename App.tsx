import React, { Component } from 'react'
import { PaperProvider } from 'react-native-paper'
import Welcome from './components/screens/Welcome'


export default class App extends Component {
  render() {
    return (
      <PaperProvider>
        <Welcome />
      </PaperProvider>
      
    )
  }
}
