import React from 'react';
import { useState } from 'react';
import { View, Text, Image,Button } from 'react-native';
import { StyleSheet } from 'react-native';
import { FIREBASE_AUTH } from '../firebase/Config';
import { Avatar, TextInput } from 'react-native-paper';
import { updateProfile } from 'firebase/auth';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { FontAwesome } from '@expo/vector-icons';
import Profilepicture from '../components/Profilepicture';



const Details = () => {

    const user = FIREBASE_AUTH.currentUser
    const displayname = user.displayName
    const [newdisplayName,setNewDisplayName] = useState(" ")
    const [isEditingDisplayName, setIsEditingDisplayName] = useState(false);
    const email = user.email
  
    console.log("tämä on nimi:",displayname)
    console.log("tämä on email:",email)


    //Päivitetään käyttäjä nimi firebasiin
    const handleUpdate = () => {
        updateProfile(user, {displayName: newdisplayName})
        .then(() => {
            alert('Profile updated')
            console.log('Profile updated')
        })
        .catch((error) => {
            alert('Error updating profile')
            console.log('Error updating profile', error)
        })
    }
    // Muuttuja käyttäjänimen muokkaamiseen
    const handleEditDisplayName = () => {
        setIsEditingDisplayName(true);
        setNewDisplayName(displayname);
    };

  return (
    <View>
        <Profilepicture />
        <View style = {styles.infoContainer}>
            <Text style={styles.header}>User information</Text>
            <TouchableOpacity onPress={handleEditDisplayName} style={styles.row}>
                    <View style={styles.textContainer}>
                        <Text style={styles.infoLabel}>Username:</Text>
                        <Text style={styles.info}>{displayname}</Text>
                    </View>
                    <FontAwesome name="pencil" size={24} color="black" style={styles.icon} />
            </TouchableOpacity>
            {isEditingDisplayName && (
                <TextInput
                    style={styles.input}
                    value={newdisplayName}
                    onChangeText={setNewDisplayName}
                    onBlur={handleUpdate }
                    autoFocus
                />
            )}
        </View>
        <View style = {styles.infoContainer}>
            <TouchableOpacity onPress={handleEditDisplayName} style={styles.row}>
                    <View style={styles.textContainer}>
                        <Text style={styles.infoLabel}>Email:</Text>
                        <Text style={styles.info}>{email}</Text>
                    </View> 
            </TouchableOpacity>
        </View>
    
    
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    icon: {
        marginRight: 20,
        marginLeft: 20
    },
    textContainer: {
        flexDirection:'row',
    },
    label: {
        fontSize: 18,
        fontWeight: 'bold',
      
    },
    infoLabel: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 10,
        marginRight: 0,
       
    },
    info: {
        fontSize: 18,
        marginTop: 10,
        marginRight: 20,
        marginLeft: 0

    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
 
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
    },
    infoContainer: {
        margin: 20,
    },
    header: {
        textAlign: 'center',
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 20
    },
    info:{
        textAlign: 'Left',
        fontSize: 18,
        marginLeft: 20,
        marginTop: 10
    },
    profilepictureContainer: {
        alignItems: 'center',
        marginTop: 20, 
        border: 1,
        borderColor: 'black'
    },
    profilepicture: {
        width: 150,
        height: 150,
        marginBottom: 20,
    }
})
