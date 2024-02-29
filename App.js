import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import { useState, useEffect } from 'react';
import { AppRegistry } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';

import Login from './screens/Login';
import Frontpage from './screens/Frontpage';
//import CreateUser from './screens/CreateUser';
import TestCreateUser2 from './screens/TestCreateUser2';
import { FIREBASE_AUTH, firestore,  } from './firebase/Config';
import List from './screens/List';
import Details from './screens/Details';
import {User, onAuthStateChanged} from 'firebase/auth'


export default function App() {

  const [user, setUser] = useState(null) // Tilamuuttuja käyttäjälle

  // Tämä useEffect hoitaa käyttäjän tilan päivityksen
  useEffect(() => {
    onAuthStateChanged(FIREBASE_AUTH, (user) => {
      console.log('User', user)
      setUser(user)
    })
  }, [])

  // Tässä on nyt nuo navigointi jutut
  const Stack = createStackNavigator();
  const InsideStack = createStackNavigator(); //Tällä saadaan jotekin sisäistä navigointia aikaiseksi

  // Tässä on nyt tuo inside layot, mikä näkyy siis vain kirjautuneelle. 
  function InsideLayot(){
    return(
      <InsideStack.Navigator>
        <InsideStack.Screen name = "My todos" component = {List} />
        <InsideStack.Screen name = "Details" component = {Details} />
      </InsideStack.Navigator>
    )
  }

  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator>
          {user ? (  
          <Stack.Screen
          name="Inside"
          component={InsideLayot}
          options = {{
            headerShown: true,
            title: 'TestCreateUser2',
            headerTitle: 'TestCreateUser2'
            }}
          />) : 
          ( 
          <Stack.Screen
          name="TestCreateUser"
          component={TestCreateUser2}
          options = {{
            title: 'TestCreateUser2',
            headerTitle: 'TestCreateUser2'
              }}
          />) }
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
       
    </Stack.Navigator>
    </NavigationContainer>
    </PaperProvider>
  );
}
