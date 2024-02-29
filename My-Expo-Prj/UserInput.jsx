import React, { useState } from "react";
import { Text, TextInput, View } from "react-native";

export const MyInputText = () => {
    const [text, setText] = useState('');
    return (
        <View>
            <TextInput
            style={{fontSize: 24}}
            text={text}
            placeholder="Type me..."
            onChangeText={(text) => {
                setText(text);
            }} />
            <Text>You entered: {text}</Text>
        </View>
    );
};