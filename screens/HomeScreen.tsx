import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Platform, StyleSheet, Button, Alert } from 'react-native';

import { Text, View } from '../components/Themed';
import { Routes } from '../navigation/routes';
import { NavigationProp } from '../navigation/types';

export default function HomeScreen({ navigation }: NavigationProp<Routes.Home>): React.ReactElement {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>CityPop</Text>
            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
            <Button
                title="Search By City"
                onPress={() => navigation.navigate(Routes.Search, { searchType: "city" })} />
            <Button
                title="Search By Country"
                onPress={() => navigation.navigate(Routes.Search, { searchType: "country" })} />

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
});