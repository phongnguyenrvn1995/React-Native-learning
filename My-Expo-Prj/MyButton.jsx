import React, { useState } from "react";
import { Button, Text, View } from "react-native";

export function MyButton() {
    const [count, setCount] = useState(0);
    return (
        <View style={{justifyContent: "center", alignItems: 'center', flex: 1}}>
            <Button title="Press Me!"
            onPress={() => {
                setCount(count + 1);
            }} />
            <Text>{count} Times</Text>
        </View>
    );
}