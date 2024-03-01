import React, { useEffect, useState } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { Avatar } from 'react-native-paper';
import { FontAwesome } from '@expo/vector-icons';
import { StyleSheet } from 'react-native';
import { FIREBASE_AUTH } from '../firebase/Config';
import { updateProfile } from 'firebase/auth';
import * as ImagePicker from 'expo-image-picker';

export default function Profilepicture() {
    
    const user = FIREBASE_AUTH.currentUser
    const [image, setImage] = useState(user.photoURL);
    pic = user.photoURL

    // Tarkistetaan onko profiilikuvaa muutettu
    useEffect(() => {
        if(image !== pic){
            handleUpdate()  
            console.log("Kuvat eivät ole samat")
        }
    }, [image])

            //Päivitetään käyttäjän profiilikuva firebasiin
            const handleUpdate = () => {
                updateProfile(user, {photoURL: image})
                .then(() => {
                alert('Profile picture updated')
                console.log('Profile picture updated')
                })
                .catch((error) => {
                alert('Error updating profile picture')
                console.log('Error updating profile picture', error)
                })
            }
            console.log('image:', image)
            console.log('pic:', pic)
       
    // Profiilikuvan valinta puhelimesta ja tallennus image stateen
    const handleEditProfilePicture = async () =>{
        const {status} = await ImagePicker.requestMediaLibraryPermissionsAsync()
        if (status !== 'granted') {
            alert('Sorry, we need camera roll permissions to make this work!')
            return
        }
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4,3],
            quality: 1,
        })
        if (!result.cancelled) {
            setImage(result.assets[0].uri)
        } else {
            console.log('cancelled');
        }
    }

  

   
    return (
        <View style={styles.profilepictureContainer}>
            {image ? (
                <Image source={{uri: image}} style={styles.profilepicture} />
            ) : (
                <Avatar.Icon size={150} icon="account" />
            )}
            <TouchableOpacity onPress={handleEditProfilePicture}>
                <FontAwesome name="pencil" size={28} color="black" style={styles.icon} />
             </TouchableOpacity>
        </View>
    )

}
const styles = StyleSheet.create({
    profilepictureContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    profilepicture: {
        width: 150,
        height: 150,
        borderRadius: 75,
        marginTop: 20,
    },
    icon: {
        position: 'absolute',
        bottom: 0,
        left: 60,
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 50,
    },
})

