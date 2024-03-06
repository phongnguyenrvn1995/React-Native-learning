import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        padding: 40,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: 'green',
        backgroundColor: 'lightgreen'
    },
    text: {
        fontSize: 18,
        padding: 12
    }
});

export function MyTouchableOpacity() {
    const [count, setCount] = useState(0);
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button}
                onPress={() => {setCount(count + 1);}}
                activeOpacity={0.7}>
                <Text style={styles.text}>Press Me!</Text>
            </TouchableOpacity>
            <Text style={styles.text}>{count}</Text>
        </View>
    );
}