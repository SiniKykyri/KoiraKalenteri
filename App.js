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
//import CreateUser from './screens/CreateUser';
import TestCreateUser2 from './screens/TestCreateUser2';
import { firestore,  } from './firebase/Config';


export default function App() {

  const Stack = createStackNavigator();
  const InsideStack = createStackNavigator(); //Tällä saadaan jotekin sisäistä navigointia aikaiseksi

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
          name="TestCreateUser"
          component={TestCreateUser2}
          options = {{
            title: 'TestCreateUser2',
            headerTitle: 'TestCreateUser2'
          }}
          />
    </Stack.Navigator>
    </NavigationContainer>
    </PaperProvider>
  );
}
