import React from "react";
import { Platform, SafeAreaView, StyleSheet, Text, View } from "react-native";
import createBigButton from "./BigButton/BigButton";
import createMyContainer from "./NativeSpecific/MyContainer";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        ...Platform.select({
            ios: {
                backgroundColor: 'red'
            },
            android: {
                backgroundColor: 'green'
            },
            default: {
                backgroundColor: 'blue'
            }
        })
    }
})

const MyItem = Platform.select({
    ios: () => {
        return (<SafeAreaView style={styles.container}>
            <Text>{Platform.Version}</Text>
        </SafeAreaView>)
    },
    android: () => {
        return (<View style={styles.container}>
            <Text>SDK = {Platform.Version}</Text>
        </View>)
    },
    default: () => {}
})

const MyItem2 = () => {
    return (<SafeAreaView style={styles.container}>
        <Text>{createBigButton()}</Text>
    </SafeAreaView>)
}

const MyItem3 = createMyContainer

const MyModule = () => {
    return (MyItem3())
}

export default MyModule;