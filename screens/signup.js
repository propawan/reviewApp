import React, { useState } from 'react';
import { View, Button, TextInput, StyleSheet } from 'react-native';
import { globalStyles } from '../styles/global';

export default function Signup({ navigation }) {
    const [text, setText] = useState('');
    const changeHandler = (val) => {
        setText(val)
    };

    return (
        <View style={globalStyles.container}>

            <TextInput style={styles.textInputStyle}
                placeholder='Enter your name'

            />
            <TextInput style={styles.textInputStyle}
                placeholder='Enter your Age'
            />

            <TextInput style={styles.textInputStyle}
                placeholder='Enter your Email-ID'

            />
            <TextInput style={styles.textInputStyle}
                placeholder='Enter your password'
            />

            <Button
                onPress={() => navigation.navigate('Home', { screen: 'Home' })}
                title='Login'
                color='coral'

            />
        </View>
    )
}

const styles = StyleSheet.create({
    textInputStyle: {
        borderColor: 'black',
        borderWidth: 1,
        marginBottom: 10,
        height: 40,
        marginTop: 30,
        paddingLeft: 8
    }
})