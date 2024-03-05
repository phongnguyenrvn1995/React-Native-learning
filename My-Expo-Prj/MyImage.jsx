import React from "react";
import { Image, StyleSheet, View } from "react-native";

const styles = StyleSheet.create({
    networkImage: {
        height: 100,
        width: 200
    }
});

export function MyImage() {
    return (
        <View style={{alignItems: "center", flex: 1, justifyContent: 'center'}}>
            <Image source={require('./us.png')} />
            <Image style={styles.networkImage} source={{uri: 'https://cdn.britannica.com/33/4833-004-828A9A84/Flag-United-States-of-America.jpg'}} />
        </View>
    );
}