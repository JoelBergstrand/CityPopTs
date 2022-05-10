import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import { Routes, Searches, NavigationProp } from '../navigation/types';

/**
 * Builds HomeScreen elements including search buttons 
 * @param param0 
 * @returns The HomeScreen
 */
export default function HomeScreen({ navigation }: NavigationProp<Routes.Home>): React.ReactElement {

    function SearchButton(searchType: string): React.ReactElement {
        return <TouchableOpacity
            style={styles.button}
            testID={searchType}
            onPress={() => navigation.navigate(Routes.Search, { searchType: searchType })}>
            <Text style={styles.text}>SEARCH BY {searchType.toLocaleUpperCase()}</Text>
        </TouchableOpacity>
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>CityPop</Text>
            {SearchButton(Searches.City)}
            {SearchButton(Searches.Country)}
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