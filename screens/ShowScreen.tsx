import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Button, Alert, Text, View } from 'react-native';

import { Routes } from '../navigation/routes';
import { NavigationProp } from '../navigation/types';

type ShowScreenProp = NavigationProp<Routes.Show>

function numberWithSpaces(x: number): string {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

export default function ShowScreen({ route, navigation }: ShowScreenProp) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{route.params.city.toponymName.toLocaleUpperCase()}</Text>
            <View style={styles.entryContainer}>
                <Text style={styles.entryTitle}>POPULATION</Text>
                <Text style={styles.entryValue}>{numberWithSpaces(route.params.city.population)}</Text>
            </View>
            <StatusBar style={'dark'} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 120,
        marginBottom: 50
    },
    entryContainer: {
        borderWidth: 1,
        width: '90%',
    },
    entryTitle: {
        fontSize: 10,
        textAlign: 'center',
        margin: 10
    },
    entryValue: {
        fontSize: 30,
        textAlign: 'center',
        marginBottom: 20
    }
});