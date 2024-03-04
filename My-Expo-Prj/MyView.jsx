import React from "react";
import { StyleSheet, Text, View } from "react-native";


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    box: {
        width: 150,
        height: 150,
        backgroundColor: '#3b6cd4',
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 4
    }
});

export function MyView() {
    return (
        <View style={styles.container}>
            <View style={styles.box}></View>
        </View>
    );
}