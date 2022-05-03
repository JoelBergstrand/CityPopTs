import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Button, Alert, View, Text, Touchable, TouchableOpacity } from 'react-native';
import { Routes } from '../navigation/routes';
import { NavigationProp } from '../navigation/types';

type ListScreenProp = NavigationProp<Routes.List>

export default function ListScreen({ route, navigation }: ListScreenProp) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{route.params.country.toLocaleUpperCase()}</Text>
            {route.params.cities.map((c, index) => {
                return <TouchableOpacity
                    key={index}
                    style={styles.entry}
                    onPress={() => navigation.navigate(Routes.Show, { city: c })}
                >
                    <Text style={styles.entryText}>{c.toponymName}</Text>
                </TouchableOpacity>
            })}
            <StatusBar style={'dark'} />
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
        marginBottom: 80,
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
    entry: {
        margin: 1,
        borderWidth: 1,
        padding: 5,
        width: '80%',
    },
    entryText: {
        textAlign: 'center',
    }
});