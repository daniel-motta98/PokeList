import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';

import FlashMessage from 'react-native-flash-message';
import {NavigationContainer} from '@react-navigation/native';

import Routes from './src/routes';

const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaView style={{backgroundColor: '#1a1a1a', flex: 1}}>
        <Routes />
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default App;
