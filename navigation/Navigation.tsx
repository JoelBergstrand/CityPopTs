import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

import { Stack, Routes } from './routes'
import HomeScreen from '../screens/HomeScreen'
import SearchScreen from '../screens/SearchScreen'
import ListScreen from '../screens/ListScreen'
import ShowScreen from '../screens/ShowScreen'
import { Alert } from 'react-native'

const Navigation = (): React.ReactElement => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: true,
                    headerTitle: "CityPop",
                }}
            >
                <Stack.Screen name={Routes.Home} component={HomeScreen} />
                <Stack.Screen
                    name={Routes.Search}
                    component={SearchScreen}
                    initialParams={{ searchType: "city" }} />
                <Stack.Screen name={Routes.List} component={ListScreen} />
                <Stack.Screen name={Routes.Show} component={ShowScreen} />
            </Stack.Navigator>
        </NavigationContainer >
    )
}

export default Navigation