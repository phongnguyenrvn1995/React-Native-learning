import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'gray'
    },
    small: {
        width: 200,
        height: 200,
        marginBottom: 10,
        marginRight: 10,
        backgroundColor: 'blue'
    },
    large: {
        width: 300,
        height: 300,
        marginBottom: 10,
        marginRight: 10,
        backgroundColor: 'green'
    }
});

export function MyScrollView() {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.large}></View>
            <ScrollView horizontal>
                <View style={styles.small}></View>
                <View style={styles.small}></View>
                <View style={styles.small}></View>
            </ScrollView>
            <View style={styles.large}></View>
            <View style={styles.small}></View>
            <View style={styles.large}></View>
        </ScrollView>
    );
}