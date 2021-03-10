import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from './drawer';
import Login from '../screens/login'
import HomeNavigator from './homeStack';
import FrontScreen from '../screens/frontscreen'
import Signup from '../screens/signup'

const { Navigator, Screen } = createStackNavigator();

export default function LoginNavigator() {
    return (
        <NavigationContainer>
            <Navigator >
                <Screen name="Front Screen" component={FrontScreen} options={{ title: 'Login/Register ' }} />
                <Screen name="Login" component={Login} />
                <Screen name="Signup" component={Signup} />
                <Screen name="Home" component={DrawerNavigator} options={{
                    headerStyle: {
                        backgroundColor: '#f4511e',
                    },
                    headerShown: false,
                }} />
            </Navigator>
        </NavigationContainer>
    );
}