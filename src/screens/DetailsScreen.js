import React from 'react';
import { Text, View, Button } from 'react-native';

const DetailsScreen = ({ route, navigation }) => {
    // Extrae los parámetros pasados desde la pantalla anterior
    const { itemId, otherParam } = route.params;

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Details Screen</Text>
            <Text>itemId: {JSON.stringify(itemId)}</Text>
            <Text>otherParam: {JSON.stringify(otherParam)}</Text>
            <Button
                title="Go to Details... again"
                onPress={() => navigation.push('Details', {
                    itemId: Math.floor(Math.random() * 100), // Genera un nuevo itemId aleatorio
                })}
            />
            <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
            <Button title="Go back" onPress={() => navigation.goBack()} />
        </View>
    );
};

export default DetailsScreen;




