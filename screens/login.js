import React, { useState } from 'react';
import { View, Button, TextInput, StyleSheet } from 'react-native';
import { globalStyles } from '../styles/global';



export default function Login({ navigation }) {
    const [text, setText] = useState('');
    const changeHandler = (val) => {
        setText(val)
    };

    return (
        <View style={globalStyles.container}>

            <TextInput style={styles.textInputStyle}


                placeholder='Enter your name'
                onChangeText={(val) => changeHandler(val)}
            />
            <TextInput style={styles.textInputStyle}

                placeholder='Enter your password'
            />
            <Button
                onPress={() => navigation.navigate('HomeNavigator', { screen: 'Home' })}

                title='Login' color='coral'

            />


        </View>
    )
}

const styles = StyleSheet.create({
    textInputStyle: {
        borderColor: '#9a73ef',
        borderWidth: 1,
        height: 40,
        margin: 20,
        padding: 30,

    }
})