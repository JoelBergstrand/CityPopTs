import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Platform, StyleSheet, Button, Alert, TextInput } from 'react-native';

import { Text, View } from '../components/Themed';
import { Routes } from '../navigation/routes';
import { NavigationProp } from '../navigation/types';

type SearchScreenProp = NavigationProp<Routes.Search>

function capitalize(text: string): string {
    if (text.length < 1) return text
    return text[0].toLocaleUpperCase() + text.slice(1)
}

export default function SearchScreen({ route, navigation }: SearchScreenProp) {
    const [text, onChangeText] = useState("")
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Search By {capitalize(route.params.searchType)} </Text>
            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
            <TextInput
                style={styles.input}
                value={text}
                onChangeText={onChangeText}
            />
            <Button
                title={"Submit"}
                onPress={() => Alert.alert(`In button ${route.params.searchType} searchtype`)}
            />
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
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
});