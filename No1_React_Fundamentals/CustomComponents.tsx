import React from "react";
import { Image, Text, TextInput, View } from "react-native";

type CatProps = {
    name: string;
}

const Cat1 = (props: CatProps) => {
    return (
    <View>
        <Image
            source={{
                uri: 'https://reactnative.dev/docs/assets/p_cat1.png'
            }}
            style={{
                width: 200,
                height: 200
            }}
         />
        <Text>Hello, I am {props.name}</Text>
        <TextInput
        style={{
            height: 40,
            borderColor: 'gray',
            borderWidth: 1
        }}
        defaultValue="Name me!"
        />
    </View>
    );
}

const Cafe = () => {
    return (<View>
        <Text>Welcome!</Text>
        <Cat1 name="Mèo" />
        <Cat1 name="Méo" />
        <Cat1 name="Meo" />
    </View>);
}

export default Cafe