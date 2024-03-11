import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { MyInput } from "./MyInput";
import AsyncStorage from "@react-native-async-storage/async-storage";

export function MyAsyncStorage() {
    const [name, setName] = useState('');

    async function loadName() {
        try {
            const savedName = await AsyncStorage.getItem("MY_NAME");
            if(saveName === null) return;
            setName(savedName);
        } catch(ex) {
            console.log(ex);
        }
    }

    async function saveName(name) {
        try {
            await AsyncStorage.setItem("MY_NAME", name);
            setName(name);
        } catch(ex) {
            console.log(ex);
        }
    }

    useEffect(() => {
        loadName(); 
    }, null);

    return (<View style={styles.container}>
        <MyInput placeholder="Type your name..."
            onSubmit={(text) => {
                console.log(text);
                saveName(text);
            }} />
        <Text>{name}</Text>
    </View>);
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20
    }
});