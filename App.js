import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import { AppRegistry } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';

import Login from './screens/Login';
import Frontpage from './screens/Frontpage';
import CreateUser from './screens/CreateUser';


export default function App() {

  const Stack = createStackNavigator();

  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
          name="Frontpage"
          component={Frontpage}
          options = {{
            title: 'Frontpage',
            headerTitle: 'Frontpage',
           
          }}
          />
          <Stack.Screen
          name="Login"
          component={Login}
          options = {{
            title: 'Login',
            headerTitle: 'Login',
          }}
          />
          <Stack.Screen
          name="CreateUser"
          component={CreateUser}
          options = {{
            title: 'CreateUser',
            headerTitle: 'CreateUser'
          }}
          />
    </Stack.Navigator>
    </NavigationContainer>
    </PaperProvider>
  );
}
