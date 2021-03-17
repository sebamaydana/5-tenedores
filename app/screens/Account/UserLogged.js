import React from 'react';
import { View, Text} from 'react-native';
import * as firebase from 'firebase';
import { Button } from 'react-native';

function UserLogged() {

    return (
        <View>
            <Text>UserLogged...</Text>
            <Button title="Cerrar Sesión" onPress={()=> firebase.auth().signOut()}></Button>
        </View>
    );

}

export default UserLogged;