import React, { useState } from "react";
import { TextInput, View } from "react-native";

export function MyInput({placeholder, onSubmit}) {
    const [text, setText] = useState('');
    return (
        <TextInput
            style={{padding: 10}}
            value={text}
            placeholder={placeholder}
            onChangeText={(text) => setText(text)}
            onSubmitEditing={(e) => {
                onSubmit(e.nativeEvent.text);
                setText('');
            }} />
    );
}