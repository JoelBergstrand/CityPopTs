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
        justifyContent: 'flex-start',
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 120,
        marginBottom: 50
    },
    entry: {
        margin: 1,
        borderWidth: 1,
        padding: 7,
        width: '90%',
    },
    entryText: {
        textAlign: 'center',
    }
});