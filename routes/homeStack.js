import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';

const { Navigator, Screen } = createStackNavigator();

const HomeNavigator = () => (

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
            name="Home"
            component={Home}
            options={{ title: 'Web Series' }}

        />
        <Screen
            name="ReviewDetails"
            component={ReviewDetails}
            options={{ title: 'Review Details' }}
        />

    </Navigator>

);

export default HomeNavigator;
