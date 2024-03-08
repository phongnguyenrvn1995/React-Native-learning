import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

const myData = [
    {key: 'k0', id: '0', text: 'View'},
    {key: 'k1', id: '1', text: 'Text'},
    {key: 'k2', id: '2', text: 'Image'},
    {key: 'k3', id: '3', text: 'ScrollView'},
    {key: 'k4', id: '4', text: 'ListView'},
]

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    row: {
        padding: 15,
        marginBottom: 5,
        backgroundColor: 'skyblue'
    }
});

export function MyFlatList() {
    return (
        <FlatList
            data={myData}
            keyExtractor={(item) => { return item.id; }}
            renderItem={({index, item}) => {
                return (<Text style={styles.row}>{item.text}</Text>)
            }} />
    );
}