import React, { Component } from 'react';
import { View, Text, Button, SafeAreaView, FlatList} from 'react-native';
import MyList from './src/components/MyList';


class App extends Component
{

  render(){

    return(
      <SafeAreaView>
        <MyList/>
      </SafeAreaView>
    );
  }
}

export default App;
