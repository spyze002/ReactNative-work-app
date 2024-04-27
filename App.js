import React, { Component } from 'react'
import { PaperProvider } from 'react-native-paper'
import Routes from './components/routes/Routes'


export default class App extends Component {
  render() {
    return (
      <PaperProvider>
        <Routes />
      </PaperProvider>
      
    )
  }
}
