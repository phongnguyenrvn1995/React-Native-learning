import React, { useReducer } from "react";
import { Text, TextInput, View } from "react-native";

type Name = {
    firstName: string,
    lastName: string
};

type DispatchInput = {
    type: string,
    value: string
}

function myReducer(state: Name, action: DispatchInput): Name {
    console.log(action);
    console.log(state);
    switch(action.type) {
        case 'firstName':
            return {...state, firstName: action.value};
        case 'lastName':
            return {...state, lastName: action.value};
    }
}

export function MyUseReducer(): React.JSX.Element {
    const _myName: Name = {firstName: '', lastName: ''};
    const [myName, dispatch] = useReducer(myReducer, _myName)
    console.log(JSON.stringify(myName));
    return (
        <View>
            <TextInput
            onChangeText={(text) => {
                dispatch({type: 'firstName', value: text});
            }}
            placeholder="First name..." />
            <TextInput
            onChangeText={(text) => {
                dispatch({type:'lastName', value: text});
            }}
            placeholder="Last name..." />
            <Text style={{fontSize: 40}}>Hello {myName.firstName} {myName.lastName}</Text>
        </View>
    );
}