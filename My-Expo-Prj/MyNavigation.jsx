import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Button, SafeAreaView, StyleSheet, Text } from "react-native";

const Root = createNativeStackNavigator();

const styles = StyleSheet.create({
    screen: {
      marginTop: 40,
      alignItems: 'center',
    },
    title: {
      padding: 20,
      fontSize: 42,
    },
  })

const Screen1 = (param) => {
    console.log(param);
    return (
        <SafeAreaView style={styles.screen}>
            <Text style={styles.title}>Screen 1</Text>
            <Button title="Go to Screen 2"
                onPress={() => {
                    param.navigation.navigate('Screen 2');
                }}
            />
        </SafeAreaView>
    );
}

const Screen2 = ({navigation, route}) => {
    return (
        <SafeAreaView style={styles.screen}>
            <Text style={styles.title}>Screen 2</Text>
            <Button title="Go back"
                onPress={() => {
                    navigation.push('Screen 1');
                }}
            />
        </SafeAreaView>
    );
}

export function MyNavigation() {
    return (
        <NavigationContainer>
            <Root.Navigator>
                <Root.Screen name="Screen 1"
                    component={Screen1} />
                <Root.Screen name="Screen 2"
                    component={Screen2} />
            </Root.Navigator>
        </NavigationContainer>
    );
}