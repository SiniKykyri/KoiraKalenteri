import React from 'react';
import { View, Button } from 'react-native';
import {FIREBASE_AUTH} from '../firebase/Config';


const List = ({navigation}) => {
  return (
    <View>
      <Button onPress = {() => navigation.navigate('Details')} title = 'Open details' />
      <Button onPress = {() => 
        {FIREBASE_AUTH.signOut()
        navigation.navigate('Frontpage')
        }} 
        title = 'Logout' />
    </View>
  );
};

export default List;
