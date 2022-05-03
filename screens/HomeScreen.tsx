import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Platform, StyleSheet, Button, Text, View, TouchableOpacity } from 'react-native';

import { Routes, Searches } from '../navigation/routes';
import { NavigationProp } from '../navigation/types';

export default function HomeScreen({ navigation }: NavigationProp<Routes.Home>): React.ReactElement {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>CityPop</Text>
            <View style={styles.separator} />
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate(Routes.Search, { searchType: Searches.City })}>
                <Text style={styles.text}>Search By City</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate(Routes.Search, { searchType: Searches.Country })}>
                <Text style={styles.text}>Search By Country</Text>
            </TouchableOpacity>
            {/* Use a light status bar on iOS to account for the black space above the modal */}
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
    button: {
        margin: 10,
        borderColor: 'black',
        height: 40,
        width: '90%',
        borderWidth: 1,
        padding: 10,
    },
    text: {
        textAlign: 'center'
    }
});