import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Platform, StyleSheet, Button, Alert, TextInput, Text, View, TouchableOpacity, ActivityIndicator } from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import { Routes, Searches, City } from '../navigation/routes';
import { NavigationProp } from '../navigation/types';
import useFetch from '../hooks/useFetch';

type SearchScreenProp = NavigationProp<Routes.Search>

function isObject(obj: any): boolean {
    return typeof obj[0] === 'object'
}


export default function SearchScreen({ route, navigation }: SearchScreenProp) {
    const { get, buildUrl, isLoading } = useFetch()
    const [query, onChangeQuery] = useState("")

    return (
        <View style={styles.container}>
            <Text style={styles.title}>SEARCH BY {route.params.searchType.toLocaleUpperCase()} </Text>
            <View style={styles.separator} />
            <TextInput
                style={styles.input}
                value={query}
                placeholder={`Enter a ${route.params.searchType}`}
                onChangeText={onChangeQuery}
            />

            {isLoading ?
                <ActivityIndicator size="large" color="#0000ff" /> : <TouchableOpacity
                    onPress={() => {
                        if (query.length > 0) {
                            const url = buildUrl(query, route.params.searchType)
                            if (!url) Alert.alert(`No such country could be found`)
                            else {
                                get<City>(url)
                                    .then(data => {
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
                        }
                    }}
                >
                    <Ionicons name="search-circle-outline" size={50} color="black" />
                </TouchableOpacity>
            }
            <StatusBar style={'dark'} />
        </View >
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
        marginBottom: 40
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