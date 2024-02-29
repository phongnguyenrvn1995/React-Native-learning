import React from "react";
import { Button, Text, View } from "react-native";

export const MyCard = ({title, showButton}) => {
    return (
        <View>
            <Text style={{fontSize: 40}}>{title}</Text>
            {showButton && <Button title="Press me!" />}
        </View>
    );
};

export const MyCard01 = ({title, element}) => {
    return (
        <View>
            <Text style={{fontSize: 40}}>{title}</Text>
            {element || <Button title="Press me!" />}
        </View>
    );
};

export const MyCard02 = ({title, buttonTitle}) => {
    return (
        <View>
            <Text style={{fontSize: 40}}>{title}</Text>
            {buttonTitle ? <Button title={buttonTitle} /> : <Text>NOTHING</Text>}
        </View>
    );
};

export const MyCard03 = ({error, loading, title}) => {
    let content = '';
    if(error) {
        content = <Text style={{fontSize: 24, color: 'red'}}>Error</Text>
    } else if(loading) {
        content = <Text style={{fontSize: 24, color: 'gray'}}>Loading...</Text>
    } else {
        content = <Text style={{fontSize: 60}}>{title}</Text>
    }
    return (
        <View style={{padding:24}}>{content}</View>
    );
};