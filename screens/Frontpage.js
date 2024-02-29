import React, { useLayoutEffect, useState, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import {AntDesign} from '@expo/vector-icons'; //Muista myös FontAwesome vaihtoehtona
import Login from './Login';
import {User, onAuthStateChanged} from 'firebase/auth'
import { FIREBASE_AUTH } from '../firebase/Config';
import { TouchableOpacity } from 'react-native-gesture-handler';


export default function Frontpage({navigation}){

  const [user, setUser] = useState(null) // Tilamuuttuja käyttäjälle

  // Tämä useEffect hoitaa käyttäjän tilan päivityksen
  useEffect(() => {
    onAuthStateChanged(FIREBASE_AUTH, (user) => {
      console.log('User', user)
      setUser(user)
    })
  }, [])

    useLayoutEffect(() => {
        navigation.setOptions({
            headerStyle: {
                backgroundColor: '#0E9494'
            },
          
            headerRight: () => ( 
                <TouchableOpacity
                    style={styles.navButton}
                    onPress={() => navigation.navigate( user ? 'List' : 'Login' )}
                >
                    <AntDesign
                    name ={user ? 'user' : 'login'}
                    size={24}
                    />
                    <Text style={styles.buttonText}>{user ? 'username' : 'Login'}</Text>
                </TouchableOpacity>
            )
        })
    }, [user])

    return(
        <View style={styles.container}>
            <Text style={styles.text}>Tämä on nyt hieno etusivu</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
    },
    text: {
        textAlign: 'center',
        fontSize: 24
    },
    navButton: {
        flexDirection: 'column',
        alignItems: 'center',
        marginRight:5
    },
    buttonText: {
        fontSize: 12,
        textAlign: 'center',
        alignItems: 'center'
     

      
   
    }
})