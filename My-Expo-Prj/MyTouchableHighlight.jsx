import React from "react";
import { StyleSheet, Text, TouchableHighlight, View } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        padding: 40,
        borderRadius: 4,
        backgroundColor: "#e6f542"
    },
    text: {
        fontSize: 14,
        padding: 12
    }
});

export function MyTouchableHighlight() {
    return (
        <View style={styles.container}>
            <TouchableHighlight style={styles.button}
                underlayColor="#89e620"
                onPress={() => {}} >
                <Text style={styles.text}>Press Me!</Text>
            </TouchableHighlight>
        </View>
    );
}