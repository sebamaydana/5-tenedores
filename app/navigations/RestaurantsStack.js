import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Restaurants from '../screens/Restaurants';

const Stack = createStackNavigator();

function RestaurantsStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="restaurants" component={Restaurants} options={{ title:"Restaurantes" }}></Stack.Screen>            
        </Stack.Navigator>
    );
}

export default RestaurantsStack;