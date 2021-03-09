import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import About from '../screens/about'

const { Navigator, Screen } = createStackNavigator();

const AboutNavigator = () => (

    <Navigator screenOptions={{
        headerStyle: {
            backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    }}>

        <Screen
            name="About"
            component={About}
            options={{ title: 'About Web Series' }}
        />
    </Navigator>

);
export default AboutNavigator;