import React, { useState } from "react";
import { NativeSyntheticEvent, TextInput, TextInputSubmitEditingEventData, View } from "react-native";
import { ComponentThemes } from "../themes/ComponentThemes";

type InputProps = {
    placeHolder: string,
    onSubmit: (text: string) => void
};

export default function Input(props: InputProps): React.JSX.Element {
    const [text, setText] = useState('');
    return (
        <View>
            <TextInput 
                value={text}
                style={ComponentThemes.textInput}
                placeholder={props.placeHolder}
                onChangeText={(text: string) : void => {
                    setText(text);
                }}
                onSubmitEditing={(e: NativeSyntheticEvent<TextInputSubmitEditingEventData>) : void => {
                    props.onSubmit(e.nativeEvent.text);
                    setText('');
                }} />
        </View>
    );
};