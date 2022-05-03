import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Button, Alert, Text, View } from 'react-native';

import { Routes } from '../navigation/routes';
import { NavigationProp } from '../navigation/types';

type ShowScreenProp = NavigationProp<Routes.Show>

export default function ShowScreen({ route, navigation }: ShowScreenProp) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{route.params.city.name}</Text>
            <View>
                <Text>POPULATION</Text>
                <Text>{route.params.city.population}</Text>
            </View>
            <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
});