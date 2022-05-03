import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Platform, StyleSheet, Button, Text, View, TouchableOpacity } from 'react-native';

import { Routes, Searches } from '../navigation/routes';
import { NavigationProp } from '../navigation/types';

export default function HomeScreen({ navigation }: NavigationProp<Routes.Home>): React.ReactElement {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>CityPop</Text>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate(Routes.Search, { searchType: Searches.City })}>
                <Text style={styles.text}>SEARCH BY CITY</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate(Routes.Search, { searchType: Searches.Country })}>
                <Text style={styles.text}>SEARCH BY COUNTRY</Text>
            </TouchableOpacity>
            {/* Use a light status bar on iOS to account for the black space above the modal */}
            <StatusBar style={'dark'} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: 10,
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 120,
        marginBottom: 80
    },
    button: {
        margin: 3,
        borderColor: 'black',
        width: '90%',
        height: '7%',
        borderWidth: 1,
        padding: '4.5%'

    },
    text: {
        textAlign: 'center',
    }
});