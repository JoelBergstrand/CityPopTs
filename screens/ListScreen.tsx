import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

import { Routes, NavigationProp } from '../navigation/types';

/**
 * Builds the list screen from data fetched from api. Presenting all available entries.
 * @param param0 Takes a Navigation Prop as defined in Routes
 * @returns List Screen
 */
export default function ListScreen({ route, navigation }: NavigationProp<Routes.List>) {
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