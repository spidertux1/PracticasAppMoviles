import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';  // Importa HomeScreen
import DetailsScreen from './src/screens/DetailsScreen'; // Importa DetailsScreen

const Stack = createNativeStackNavigator();

function StackScreen() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    title: 'Home',
                    headerStyle: { backgroundColor: 'blue' }, // Cambia el color de la barra
                    headerTintColor: '#fff', // Cambia el color del texto en la barra
                }}
            />
            <Stack.Screen
                name="Details"
                component={DetailsScreen}
                options={{
                    title: 'Details',
                    headerStyle: { backgroundColor: 'orange' }, // Mismo color para la barra
                    headerTintColor: '#fff', // Color del texto
                }}
            />
        </Stack.Navigator>
    );
}

export default function App() {
    return (
        <NavigationContainer>
            <StackScreen />
        </NavigationContainer>
    );
}
