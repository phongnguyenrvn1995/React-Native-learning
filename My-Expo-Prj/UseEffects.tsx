import React, { useEffect, useState } from "react";
import { Button, Text, View } from "react-native";

export function MyUseEffects(): React.JSX.Element {
    const [count, setCount] = useState(1);
    const dependency = Math.floor(count / 3);
    useEffect(() => {
        console.log(dependency);
    }, [dependency]);
    useEffect(() => {
        console.log("I am useEffect with [] dependencies");
    }, []);
    useEffect(() => {
        console.log("I am useEffect with undefined dependencies");
    }, undefined);
    useEffect(() => {
        console.log("I am useEffect with null dependencies");
    }, null);
    return (
        <View>
            <Button
            title={`Count now! ${count}`}
            onPress={() => {
                setCount(count + 1);
            }} />
        </View>
    );
}