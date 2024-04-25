import React, { Component } from 'react'
import { PaperProvider } from 'react-native-paper'
import Language from './components/screens/Language'


export default class App extends Component {
  render() {
    return (
      <PaperProvider>
        <Language />
      </PaperProvider>
      
    )
  }
}
