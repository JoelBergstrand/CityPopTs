import React, { useState } from 'react';
import { StyleSheet, Alert, TextInput, Text, View, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useFocusEffect } from '@react-navigation/native';

import { Routes, Searches, City, NavigationProp } from '../navigation/types';
import useFetch from '../hooks/useFetch';
import { getCountryCode } from '../constants/countryCodes';

function isObject(obj: any): boolean {
    return typeof obj[0] === 'object'
}

function prepareQuery(q: string): string {
    return q.trim()
}

function hasNumber(q: string): boolean {
    return /\d/.test(q)
}


/**
 * Dynamically builds the search screen depending on if City or Country is being searched. 
 * Alerts user of errors if country or city is invalied. 
 * @param param0 Takes a Navigation Prop as defined in Routes
 * @returns Search Screen
 */
export default function SearchScreen({ route, navigation }: NavigationProp<Routes.Search>) {
    const { get, buildUrl, isLoading } = useFetch()
    const [query, onChangeQuery] = useState("")

    useFocusEffect(
        React.useCallback(() => {
            console.log("here")
            onChangeQuery("")
        }, [])
    )
    return (
        <View style={styles.container}>
            <Text style={styles.title}>SEARCH BY {route.params.searchType.toLocaleUpperCase()} </Text>
            <TextInput
                style={styles.input}
                value={query}
                placeholder={`Enter a ${route.params.searchType}`}
                onChangeText={onChangeQuery}
            />
            {isLoading ?
                <ActivityIndicator size="large" color="#0000ff" />
                : <TouchableOpacity
                    onPress={() => {
                        var trimmedQuery = prepareQuery(query)
                        if ((trimmedQuery.length > 0) && !hasNumber(trimmedQuery)) {
                            const url = buildUrl(trimmedQuery, route.params.searchType)
                            if (!url) Alert.alert(`No such country could be found`)
                            else {
                                // Checks if input for city search is a known country and prompts user if that is the case
                                if (
                                    (route.params.searchType === Searches.City) &&
                                    getCountryCode(trimmedQuery.toLowerCase())
                                ) {
                                    Alert.alert("It's not possible to search for a country at this screen")
                                    onChangeQuery("")
                                    return
                                }
                                get<City>(url)
                                    .then(data => {
                                        if (isObject(data)) {
                                            if (route.params.searchType == Searches.City) {
                                                navigation.navigate(Routes.Show, { city: data[0] })
                                            }
                                            else {
                                                navigation.navigate(Routes.List, { country: trimmedQuery, cities: data })
                                            }
                                        }
                                        else {
                                            Alert.alert("No such place exists in our database")
                                        }

                                    })
                                    .catch(error => console.log(error))
                            }
                        }
                        else {
                            if (hasNumber(trimmedQuery)) {
                                Alert.alert("Query is invailed - contains numbers")
                                onChangeQuery("")
                            }
                        }
                    }}
                >
                    <Ionicons name="search-circle-outline" size={50} color="black" />
                </TouchableOpacity>
            }
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