import React, { useEffect } from 'react';
import { View, Text} from 'react-native';
import { StyleSheet } from 'react-native';
import Profilepicture from '../components/Profilepicture';
import UserInfo from '../components/UserInfo';

const Details = () => {
  return (
    <View>
        <Profilepicture />
        <Text style={styles.header}>User information</Text>
        <UserInfo />
    </View>
  )
}

export default Details;

const styles = StyleSheet.create({
   
    header: {
        textAlign: 'center',
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 20
    }
})
