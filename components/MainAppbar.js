import React from 'react';
import { Appbar } from 'react-native-paper';
import { StyleSheet } from 'react-native';

export default function MainAppbar(props){
    return(
        <Appbar.Header
        mode='center-aligned' 
        elevated={true}
        style={styles.appbarContainer}
        >
        <Appbar.Content style={styles.appbarContent} title={props.title} />
        </Appbar.Header>
    );
}

const styles = StyleSheet.create({
    appbarContainer: {
        marginTop: 0,
    },
    appbarContent: {
        justifyContent: 'center',
        textAlign: 'center',

    }
});