import React, { useState } from "react";
import { NativeSyntheticEvent, Text, TextInput, TextInputSubmitEditingEventData, View } from "react-native";

const PizzaTranslator = () => {
    const [text, setText] = useState('')
    return (
        <View>
            <TextInput
                placeholder="type here to translate..."
                style={{height: 40, borderWidth: 1}}
                onChangeText={(newStr: string) => {
                    setText(newStr)
                }}
                onSubmitEditing={(event: NativeSyntheticEvent<TextInputSubmitEditingEventData>) => {
                    console.log('submit ', event.nativeEvent.text)
                }}
             />
             <Text style={{padding: 10, fontSize: 20}}>
                {text.split(' ').map((value: string, index: number, array: string[]) => {
                    if(value) {
                        return 'PIZZA'
                    }
                    return ''
                }).join(' ')}
             </Text>
        </View>
    );
}

export default PizzaTranslator;