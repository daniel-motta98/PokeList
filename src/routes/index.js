import React from 'react';
import {StyleSheet} from 'react-native';

import {createStackNavigator} from '@react-navigation/stack';

import Home from '../pages/Home';
import InfoPokemon from '../pages/InfoPokemon';

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyle: {
          backgroundColor: '#333',
        },
      }}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="InfoPokemon"
        component={InfoPokemon}
        options={{
          headerShown: true,
          headerStyle: styles.headerStackStyle,
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
          headerTitle: 'Info Poke',
        }}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  headerStackStyle: {
    backgroundColor: '#333',
    elevation: 0,
    borderWidth: 0,
    borderColor: 'transparent',
  },
});

export default Routes;
