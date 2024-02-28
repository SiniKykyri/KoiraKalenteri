import {View, Text, StyleSheet, Button, KeyboardAvoidingView} from 'react-native';
import React from 'react';
import { useState } from 'react';
import { FIREBASE_AUTH } from '../firebase/Config';
import { ActivityIndicator, TextInput } from 'react-native-paper';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';

const testCreateUser2 = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const auth = FIREBASE_AUTH

    const singIn = async () => {
        setLoading(true)
        try {
            const response = await signInWithEmailAndPassword(auth, email, password)
            console.log(response)
        } catch (error) {
            console.log(error)
            alert('Something went wrong')
        }finally{
            setLoading(false)
        }
    }

    const singUp = async () => {
        setLoading(true)
        try {
            const response = await createUserWithEmailAndPassword(auth, email, password)
            console.log(response)
            alert('Check your email for verification')
        } catch (error) {
            console.log(error)
            alert('Something went wrong creating user')
        }finally{
            setLoading(false)
        }
    }

    return(
        <View style={styles.container}>
            <KeyboardAvoidingView behavior='padding'> 
            {/* Tämä on tärkeä jotta näppäimistö ei peitä input kenttiä */}
            <TextInput value={email} style = {styles.input} placeholder='Email' autoCapitalize='none' onChangeText={(text)=> setEmail(text)}></TextInput>
            <TextInput secureTextEntry = {true} value={password} style = {styles.input} placeholder='Password' autoCapitalize='none' onChangeText={(text)=> setPassword(text)}></TextInput>
            {loading ? (
            <ActivityIndicator size='large' color='blue'/>
            ): (
            <>
                <Button title = 'Login' onPress = {singIn}></Button>
                <Button title = 'Create account' onPress = {singUp}></Button>
            </>
            )}
            </KeyboardAvoidingView>
        </View>
    )
}

export default testCreateUser2;

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
        flex: 1,
        justifyContent: 'center',
     
    },
    input: {
        marginVertical: 4,
        height: 50,
        borderWidth: 1,
        borderRadius: 4,
        padding: 10,
        backgroundColor: 'white'
   
     
    }
})