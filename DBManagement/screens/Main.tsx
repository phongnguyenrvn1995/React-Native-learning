import React, { useReducer } from "react";
import { SafeAreaView, View } from "react-native";
import { ScreenThemes } from "../themes/ScreenThemes";
import { StatusBar } from "expo-status-bar";
import Title from "../components/Title";
import Input from "../components/Input";
import List from "../components/List";
import { actionCreator, initItems, reducer } from "../repositories/Todo";

export default function Main(): React.JSX.Element {
    const [state, dispatcher] = useReducer(reducer, initItems);
    return (
        <View style={ScreenThemes.container}>
            <Title title="TO DO LIST"/>
            <Input placeHolder="Type a todo, then hit enter"
                onSubmit={(text) => {
                    console.log(text);
                    dispatcher(actionCreator.add(text));
                }} />
            <List items={state}
                onItemPress={(item) => {
                    console.log(item);
                    dispatcher(actionCreator.remove(item.id));
                }} />
            <StatusBar style="auto" />
        </View>
    );
};