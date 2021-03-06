import React from 'react'
import { Entypo } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'

import { Stack, Routes } from './types'
import HomeScreen from '../screens/HomeScreen'
import SearchScreen from '../screens/SearchScreen'
import ListScreen from '../screens/ListScreen'
import ShowScreen from '../screens/ShowScreen'

/**
 * Builds stack navigator for the application and chnages the back button to a bolder arrow
 * @returns React Navigation navigator 
 */
const Navigation = (): React.ReactElement => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={({ navigation }) => ({
                    headerShown: true,
                    headerTitle: "CityPop",
                    headerLeft: () => (
                        <TouchableOpacity
                            style={{ marginRight: 20, marginLeft: 5 }}
                            onPress={() => navigation.goBack()}
                        >
                            <Entypo name="arrow-bold-left" size={24} color="black" />
                        </TouchableOpacity>
                    )
                })}
            >
                <Stack.Screen name={Routes.Home} component={HomeScreen} options={{ headerShown: false }} />
                <Stack.Screen
                    name={Routes.Search}
                    component={SearchScreen}
                    initialParams={{ searchType: "city" }}
                />
                <Stack.Screen name={Routes.List} component={ListScreen} />
                <Stack.Screen name={Routes.Show} component={ShowScreen} />
            </Stack.Navigator>
        </NavigationContainer >
    )
}

export default Navigation

