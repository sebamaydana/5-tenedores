import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TopRestaurants from '../screens/TopRestaurant';

const Stack = createStackNavigator();

function TopRestaurantsStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="top-restaurant" component={TopRestaurants} options={{ title:"Los Mejores Restaurantes" }}></Stack.Screen>
        </Stack.Navigator>
    );
}

export default TopRestaurantsStack;