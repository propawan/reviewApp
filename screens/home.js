import React, { useState } from 'react';
import { View, FlatList, TouchableOpacity, Text } from 'react-native';
import { globalStyles } from '../styles/global';


export default function Home({ navigation }) {
    const [reviews, setReviews] = useState([
        { title: 'Friends', rating: 8.5, body: 'lorem ipsum ', key: '1' },
        { title: 'GOT', rating: 9.5, body: 'lorem ipsum ', key: '2' },
        { title: 'B99', rating: 8.0, body: 'lorem ipsum ', key: '3' },
        { title: 'Rick and Morty', rating: 7.0, body: 'lorem ipsum ', key: '4' }
    ])
    return (
        <View style={globalStyles.container}>
            <FlatList
                data={reviews}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', item)}>
                        <Text style={globalStyles.titleText}>{item.title}</Text>
                    </TouchableOpacity>
                )}
            />

        </View>
    )
}