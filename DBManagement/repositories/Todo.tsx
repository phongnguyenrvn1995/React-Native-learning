import React from "react";
import { ListItem } from "../components/List";

const randomItem = () => {
    return Math.random()
}

function createItem(text: string): ListItem {
    return {id: randomItem(), text: text};
}

const actionType = {
    ADD: 'ADD',
    REMOVE: 'REMOVE'
}

type actionInputType = {
    type: string, 
    payload: ListItem
}

export const initItems: Array<ListItem> = [
    createItem('Click me 1!!!'),
    createItem('Click me 2!!!'),
    createItem('Click me 3!!!'),
    createItem('Click me 4!!!'),
];

export const actionCreator = {
    add: (text: string): actionInputType => ({type: actionType.ADD, payload: createItem(text)}),
    remove: (id: number): actionInputType => ({type: actionType.REMOVE, payload: {id: id, text: ''}})
}

export function reducer(state: Array<ListItem>, action: actionInputType): Array<ListItem>{
    switch(action.type) {
        case actionType.ADD:
            return [...state, action.payload];
        default:
            return [...state.filter((value: ListItem, index: number, array: ListItem[]) => {
                return value.id != action.payload.id
            })]
    }
}