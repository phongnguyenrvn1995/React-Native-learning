import React from "react";
import { Image, Text, View } from "react-native";
let baz = 'PHONG';
export const element = React.createElement(View, 
    {foo: 'hello', bar: baz},
    React.createElement(Text),
    React.createElement(Image)
    );

let child = <Image />;
export const element01 = (
    <View foo='hello' bar={baz}>
        <Text/>
        <Image/>
        {child}
    </View>
);