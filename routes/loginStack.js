import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from './drawer';
import Login from '../screens/login'
import HomeNavigator from './homeStack';

const { Navigator, Screen } = createDrawerNavigator();

export default function LoginNavigator() {
    return (
        <NavigationContainer>
            <Navigator screenOptions={{
                headerStyle: {
                    backgroundColor: '#f4511e',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }}>
                <Screen name="Login" component={Login} />
                <Screen name="HomeNavigator" component={DrawerNavigator} />


            </Navigator>
        </NavigationContainer>
    );
}