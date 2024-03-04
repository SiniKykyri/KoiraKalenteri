import React from 'react';
import { View, Button } from 'react-native';
import { FIREBASE_AUTH } from '../firebase/Config';
import { FontAwesome } from '@expo/vector-icons';
import { StyleSheet } from 'react-native';

const List = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.buttonContainer}>
                <FontAwesome.Button
                    size={24}
                    name="info"
                    backgroundColor="transparent"
                    color={"black"}
                    onPress={() => navigation.navigate('Details')}
                >
                    <Button
                        onPress={() => navigation.navigate('Details')}
                        title="User information"
                        color="black"
                        size={24}
                    />
                </FontAwesome.Button>
            </View>
            <View style={styles.buttonContainer}>
                <FontAwesome.Button
                    size={24}
                    name="sign-out"
                    backgroundColor="transparent"
                    color={"black"}
                    onPress={() => {
                        FIREBASE_AUTH.signOut();
                        navigation.navigate('Frontpage');
                    }}
                >
                    <Button
                        onPress={() => {
                            FIREBASE_AUTH.signOut();
                            navigation.navigate('Frontpage');
                        }}
                        title="Logout"
                        color="black"
                        style={styles.button}
                    />
                </FontAwesome.Button>
            </View>
        </View>
    );
};

export default List;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginLeft: 20,
        marginRight: 20,
        marginTop: 20,
        textAlign: 'center',
    },
    buttonContainer: {
        marginVertical: 10,
        textAlign: 'center',
       
    }
});
