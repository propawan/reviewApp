import React, { useState } from 'react';
import { View, Button, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { globalStyles } from '../styles/global';

export default function FrontScreen({ navigation }) {
    return (
        <View style={globalStyles.container}>
            <Text style={styles.front}> Your personal review App</Text>

            <View style={styles.button}>
                <Button
                    title="Login"
                    onPress={() => navigation.navigate('Login', { screen: 'Login' })}
                    color='coral'
                />

                <Button
                    title="Sign Up"
                    onPress={() => navigation.navigate('Signup', { screen: 'Signup' })}
                    color='coral' />
            </View>

        </View>
    )
}
const styles = StyleSheet.create({
    front: {
        padding: 50,
        fontFamily: 'Montserrat-Bold',
        fontSize: 18,
        color: '#333'
    },
    button: {
        margin: 10,
        padding: 20,
        flexDirection: 'column',
        flex: 1
    }
})