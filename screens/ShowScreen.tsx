import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Button, Alert } from 'react-native';

import { Text, View } from '../components/Themed';

export default function ShowScreen({ }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Search By City</Text>
            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
            <Button
                title="Search By City"
                onPress={() => Alert.alert('Search by City')} />
            <Button
                title="Search By Country"
                onPress={() => Alert.alert('Search By Country')} />

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