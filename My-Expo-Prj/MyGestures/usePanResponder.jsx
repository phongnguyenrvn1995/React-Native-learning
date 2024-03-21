import { useReducer, useRef } from "react";
import { initState, panCreator, reducer } from "./Pan";
import { PanResponder } from "react-native";

export function usePanResponder() {
    const [state, dispatch] = useReducer(reducer, initState);
    const myPan = useRef(PanResponder.create({
        onStartShouldSetPanResponder: () => { return true; },
        onPanResponderGrant: (event, gesture) => {
            dispatch(panCreator.start());
        },
        onPanResponderMove: (event, gesture) => {
            console.log('onPanResponderMove');
            dispatch(panCreator.move(gesture.dx, gesture.dy));
        },
        onPanResponderEnd: (event, gesture) => {
            dispatch(panCreator.end(gesture.dx, gesture.dy));
        }
    }));
    return [state, myPan.current.panHandlers]; // state, pan
}