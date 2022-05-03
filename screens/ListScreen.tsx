import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Button, Alert, View, Text, Touchable, TouchableOpacity } from 'react-native';
import { Routes } from '../navigation/routes';
import { NavigationProp } from '../navigation/types';

type ListScreenProp = NavigationProp<Routes.List>

export default function ListScreen({ route, navigation }: ListScreenProp) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{route.params.country}</Text>
            {route.params.cities.map((c, index) => {
                return <TouchableOpacity
                    key={index}
                    onPress={() => navigation.navigate(Routes.Show, { city: c })}
                >
                    <Text style={styles.entry}>{c.name}</Text>
                </TouchableOpacity>
            })}
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
        margin: 20,
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
    entry: {
        margin: 5,
        borderWidth: 1,
        padding: 5,
        width: '80%'
    }
});