import React, { useState } from "react";
import { Button, GestureResponderEvent, SafeAreaView, Text, View } from "react-native";

type CatProps = {
    name: string
}
const Cat = (props: CatProps) => {
    const [isHungry, setHungry] = useState(true)
    return (
        <View>
            <Text>I am {props.name}, and I am {isHungry ? "Hungry" : "Full"}</Text>
            <Button 
                onPress={(event: GestureResponderEvent) => {
                    setHungry(false)
                }} 
                disabled={!isHungry}
                title={isHungry ? "Pour me some milk, please!" : "Thanks"}/>
        </View>
    );
}

const Cafe = () => {
    return (
        <SafeAreaView>
            <Cat name="Mèo"/>
            <Cat name="Méo"/>
            <Cat name="Meo"/>
        </SafeAreaView>
    );
}

export default Cafe;