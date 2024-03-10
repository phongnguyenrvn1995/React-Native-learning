import React from "react";
import { Text, View } from "react-native";
import { ComponentThemes } from "../themes/ComponentThemes";

type TitleProps = {
    title: string
}

export default function Title(props: TitleProps): React.JSX.Element {
    return (
        <View style={ComponentThemes.title}>
            <Text style={ComponentThemes.textTitle}>{props.title}</Text>
        </View>
    );
}