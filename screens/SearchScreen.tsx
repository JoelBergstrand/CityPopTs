import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Platform, StyleSheet, Button, Alert, TextInput, Text, View, TouchableOpacity } from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import { Routes, Searches, City } from '../navigation/routes';
import { NavigationProp } from '../navigation/types';
import useFetch from '../hooks/useFetch';

type SearchScreenProp = NavigationProp<Routes.Search>

function capitalize(text: string): string {
    if (text.length < 1) return text
    return text[0].toLocaleUpperCase() + text.slice(1)
}

function isObject(obj: any): boolean {
    return typeof obj[0] === 'object'
}


export default function SearchScreen({ route, navigation }: SearchScreenProp) {
    const { get, buildUrl, isLoading } = useFetch()
    const [query, onChangeQuery] = useState("")

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Search By {capitalize(route.params.searchType)} </Text>
            <View style={styles.separator} />
            <TextInput
                style={styles.input}
                value={query}
                placeholder={`Enter a ${route.params.searchType}`}
                onChangeText={onChangeQuery}
            />
            <TouchableOpacity
                onPress={() => {
                    const url = buildUrl(query, route.params.searchType)

                    if (!url) Alert.alert(`No such country could be found`)
                    else {
                        get<City>(url)
                            .then(data => {
                                console.log(isObject(data))
                                if (isObject(data)) {
                                    if (route.params.searchType == Searches.City) {
                                        navigation.navigate(Routes.Show, { city: data[0] })
                                    }
                                    else {
                                        navigation.navigate(Routes.List, { country: query, cities: data })
                                    }
                                }
                                else {
                                    Alert.alert("No such place exists in our database")
                                }

                            })
                            .catch(error => console.log(error))
                    }
                }}
            >
                <Ionicons name="search-circle-outline" size={50} color="black" />
            </TouchableOpacity>
            {/* Use a light status bar on iOS to account for the black space above the modal */}
            <StatusBar style={'dark'} />
        </View >
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
    input: {
        height: 40,
        width: '90%',
        margin: 12,
        borderWidth: 1,
        padding: 10,
        textAlign: 'center'
    },
    button: {
        width: '30%'
    }
});