import React, { useRef } from "react";
import { Animated, Button, View } from "react-native";

export function MyAnimation() {
    const value = new Animated.Value(0);
    console.log("RENDER!!!");
    return (<View style={{flex: 1, paddingTop: 40}}>
        <Button title="ANIMATE"
            onPress={() => {
                Animated.spring(value, {
                    toValue: 1,
                    useNativeDriver: false
                }).start();
            }} />
        <Animated.Text style={{
            opacity: value, 
            fontSize: value.interpolate({
                inputRange: [0.5, 1],
                outputRange: [1, 100]
            }),
            transform: [
                {translateY: value.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 200]
                })}
            ]
            }}>
            Hello
        </Animated.Text>
    </View>);
}