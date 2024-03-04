import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import { FIREBASE_AUTH } from '../firebase/Config';
import { StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { FontAwesome } from '@expo/vector-icons';

export default function UserInfo({ navigation }) {

    const user = FIREBASE_AUTH.currentUser
    const displayname = user.displayName
    const [newdisplayName, setNewDisplayName] = useState(" ")
    const [isEditingDisplayName, setIsEditingDisplayName] = useState(false);
    const email = user.email

    //Päivitetään käyttäjä nimi firebasiin
    const handleUpdate = () => {
        updateProfile(user, { displayName: newdisplayName })
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
            <View style={styles.infoContainer}>
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
                        onBlur={handleUpdate}
                        autoFocus
                    />
                )}
            </View>
            <View style = {styles.infoContainer}>
                <View style={styles.textContainer}>
                    <Text style={styles.infoLabel}>Email:</Text>
                    <Text style={styles.info}>{email}</Text>
                </View>
            </View>

        </View>

    )
}

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
        flexDirection: 'row',
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
    infoContainer: {
        marginBottom: 15,
        marginLeft: 20
    },
    info: {
        textAlign: 'Left',
        fontSize: 18,
        marginLeft: 20,
        marginTop: 10
    },
})