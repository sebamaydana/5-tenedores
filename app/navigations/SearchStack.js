import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Search from '../screens/Search';

const Stack = createStackNavigator();

function SearchStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="search" component={Search} options={{ title:"Buscar" }}></Stack.Screen>
        </Stack.Navigator>
    );
}

export default SearchStack;