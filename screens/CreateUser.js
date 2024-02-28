import React, { useLayoutEffect } from 'react';
import { Button, TextInput} from 'react-native-paper';
import MainAppbar from '../components/MainAppbar';
import { StyleSheet, View, Text, Keyboard } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function CreateUser(){ 

    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerStyle: {
                backgroundColor: '#0E9494'
            }
        })
    }, [navigation])

    const [formData, setFormData] = React.useState({
        name: '',
        email:'',
        membnum:'',
        username: '', 
        password: '', 
        passwordAgain: ''});

    const [showError, setShowError] = React.useState(false);
    const [passwordVisibility, setPasswordVisibility] = React.useState(false); // Tämä on näiden salasana kenttien näkyvyyden hallintaan
    const [passwordAgainVisibility, setPasswordAgainVisibility] = React.useState(false);
    
    const togglePasswordVisibility = () => {
        setPasswordVisibility(!passwordVisibility)
    }

    const togglePasswordAgainVisibility = () => {
        setPasswordAgainVisibility(!passwordAgainVisibility)
    }

    // Tämän function sisään voisi tehdä ehkä sitten oikean API kutsun
    const validateAndSubmit = () => {
        setShowError(true)
        if(formData.username.length > 0 && 
           formData.password.length > 8 &&
           formData.password === formData.passwordAgain) {
            setFormData({
                name: '',
                email:'',
                membnum:'',
                username: '', 
                password: '', 
                passwordAgain: ''
            })
            setShowError(false)
        }
    }

    return(
        <>
        <MainAppbar title="Luo käyttäjä" />
        <View style={styles.container}>
            <TextInput 
            label="Koko nimi" 
            style={styles.input_field} 
            value={formData.name} 
            onChange={event => setFormData({...formData,name: event.nativeEvent.text})} 
            error = {formData.name.length=== 0 && showError}
            onSubmitEditing={Keyboard.dismiss}
            />
             <TextInput 
            label="Sähköposti osoite" 
            style={styles.input_field} 
            value={formData.email} 
            onChange={event => setFormData({...formData,email: event.nativeEvent.text})} 
            error = {formData.email.length=== 0 && showError}
            onSubmitEditing={Keyboard.dismiss}
            />
             <TextInput 
            label="Jäsennumero" 
            style={styles.input_field} 
            value={formData.membnum} 
            onChange={event => setFormData({...formData,membnum: event.nativeEvent.text})} 
            error = {formData.membnum.length=== 0 && showError}
            onSubmitEditing={Keyboard.dismiss}
            />
            <TextInput 
            label="Käyttäjänimi" 
            style={styles.input_field} 
            value={formData.username} 
            onChange={event => setFormData({...formData,username: event.nativeEvent.text})} 
            error = {formData.username.length=== 0 && showError}
            />
            <TextInput 
            label="Salasana" 
            style={styles.input_field} 
            value={formData.password} 
            onChange={event => setFormData({...formData,password:event.nativeEvent.text})}
            secureTextEntry={!passwordVisibility}
            right={
            <TextInput.Icon 
            style={styles.textInputIcon}
                icon ={passwordVisibility ? 'eye-off':'eye'}
                onPress={togglePasswordVisibility}
            />
            }
            error = {formData.password.length < 8 && showError}
            onSubmitEditing={Keyboard.dismiss}
            />
             <TextInput 
            label="Salasana uudestaan" 
            style={styles.input_field} 
            value={formData.passwordAgain} 
            onChange={event => setFormData({...formData,passwordAgain:event.nativeEvent.text})}
            secureTextEntry={!passwordAgainVisibility}
            right={
            <TextInput.Icon 
            style={styles.textInputIcon}
                icon={passwordAgainVisibility ? 'eye-off' : 'eye'} 
                onPress={togglePasswordAgainVisibility} 
            />
            }
            error = {formData.passwordAgain.length < 8 && showError}
            onSubmitEditing={Keyboard.dismiss}
            />
            <Button 
            mode="contained" 
            style={styles.button}
            onPress={validateAndSubmit}>
            Luo käyttäjä</Button>
        </View>
        </>
     
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        margin: 6
        },
        input_field: {
            backgroundColor: '#fcfcfc',
            margin: (16,8,0,8),
            padding: 5,
            marginTop: 5,
            alignContent: 'center'
        },
        button: {
            backgroundColor: '#0E9494',
            margin: (16,8,0,8)
        },
        textInputIcon: {
            color: 'black'
        }
    });