import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Accounts from '../screens/Account/Accounts';
import Login from '../screens/Account/Login';
import Register from '../screens/Account/Register';

const Stack = createStackNavigator();

function AccountsStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="accounts" component={Accounts} options={{ title:"Mi Cuenta" }}></Stack.Screen>
            <Stack.Screen name="login" component={Login} options={{ title:"Iniciar sesión" }}></Stack.Screen>
            <Stack.Screen name="register" component={Register} options={{ title:"Registro" }}></Stack.Screen>
        </Stack.Navigator>
    );
}

export default AccountsStack;