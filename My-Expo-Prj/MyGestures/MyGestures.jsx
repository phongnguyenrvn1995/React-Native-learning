import React from "react";
import { PanResponder, StyleSheet, Text, View } from "react-native";
import { usePanResponder } from "./usePanResponder";


export function MyGestures() {
    const [state, myPan] = usePanResponder();
    const {isDragging, initX, initY, dx, dy} = state;

    const style = {
        backgroundColor: isDragging ? 'skyblue' : 'blue',
        transform: [{translateX: initX + dx}, {translateY: initY + dy}]
    }
    return (
        <View style={styles.container}>
            <View style={[styles.square, style]}
                {...myPan}  >
                <Text style={styles.text}>Drag me!</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    square: {
        width: 100,
        height: 100,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    }
});