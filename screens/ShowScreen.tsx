import { StyleSheet, Text, View } from 'react-native';

import { Routes, NavigationProp } from '../navigation/types';

function numberWithSpaces(x: number): string {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

/**
 * Presents the population of a city to the user.
 * @param param0 Takes a Navigation Prop as defined in Routes
 * @returns Show Screen
 */
export default function ShowScreen({ route }: NavigationProp<Routes.Show>) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{route.params.city.toponymName.toLocaleUpperCase()}</Text>
            <View style={styles.entryContainer}>
                <Text style={styles.entryTitle}>POPULATION</Text>
                <Text style={styles.entryValue}>{numberWithSpaces(route.params.city.population)}</Text>
            </View>
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