import React, { useRef } from "react";
import { Animated, View } from "react-native";
import { PanGestureHandler, State } from "react-native-gesture-handler";

export function MyGestureHandler() {
    const transY = useRef(new Animated.Value(0));
    const event = useRef(
        Animated.event([{nativeEvent: {translationY: transY.current}}], {
            useNativeDriver: true
        })
    );

    return (
            <PanGestureHandler 
                onGestureEvent={event.current}
                onHandlerStateChange={(event) => {
                    if(event.nativeEvent.state === State.END) {

                    }
                    console.log("onHandlerStateChange", event.nativeEvent.state);
                }} >
                    <Animated.View style={{
                        height: 100, backgroundColor: 'green',
                        transform: [{translateY: transY.current}]
                    }} />
            </PanGestureHandler>
    );
}