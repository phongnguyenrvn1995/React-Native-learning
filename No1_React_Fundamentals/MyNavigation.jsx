import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Button, Text } from "react-native";

const Stack = createNativeStackNavigator();

const HomeScreen = ({navigation}) => {
    // console.log(navigation.navigate);
    return (<Button
            title="Go to my Profile"
            onPress={() => {
                navigation.navigate('Profile', {myName: 'PHONG'})
            }} />);
}

const ProfileScreen = ({navigation, route}) => {
    console.log(route.params.myName);
    return <>
        <Text>{route.params.myName}</Text>
        <Button title="Back"
            onPress={() => {navigation.pop()}} />
    </>
}

export default function MyNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home"
                    component={HomeScreen}
                    options={{title: "Welcome"}} /> 
                <Stack.Screen name="Profile"
                    component={ProfileScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}