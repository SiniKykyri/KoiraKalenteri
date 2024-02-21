import React, { useLayoutEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import {AntDesign} from '@expo/vector-icons'; //Muista myös FontAwesome vaihtoehtona

export default function Frontpage({navigation}){

    useLayoutEffect(() => {
        navigation.setOptions({
            headerStyle: {
                backgroundColor: '#0E9494'
            },
            headerRight: () => (
                <AntDesign 
                style={styles.navButton}
                name = "user"
                size={24}
                onPress={() => navigation.navigate('Login')}
                />
            )
        })
    }, [])



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
        marginRight: 5,
        padding: 5
    }
})