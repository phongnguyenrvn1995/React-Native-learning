import React from "react";
import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        backgroundColor: 'whitesmoke',
        color: '#4a90e2',
        fontSize: 24,
        padding: 10
    }
});

export function MyText() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Hello!</Text>
        </View>
    );
}