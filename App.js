import React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Host} from 'react-native-portalize';

import Home from './src/pages/Home';
import About from './src/pages/About';

const Stack = createNativeStackNavigator();

const App = () => (
  <GestureHandlerRootView style={{flex: 1}}>
    <Host>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              headerShown: false,
              gestureEnabled: false,
            }}
          />
          <Stack.Screen
            name="About"
            component={About}
            options={{
              headerShown: false,
              gestureEnabled: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Host>
  </GestureHandlerRootView>
);

export default App;
