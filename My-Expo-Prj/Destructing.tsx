export const myObject = {
    name: 'PHONG',
    age: 29
}

export let {name, age} = myObject;

export const myArray = [1, 2, 3];
export const [myArray1, myArray2, myArray3, myArray4] = myArray;

export function printMyObject({name, age}) {
    return `${name} ${age}`;
};

export function printMyArray([a1, a2, a3]) {
    return `${a1} ${a2} ${a3}`;
}

const people = {
    name: 'PHONG',
    age: 29,
    hairColor: undefined,
    eyeColor: 'black',
    location: {
        city: 'SG'
    }
};

export const {
    name: name1, // change var name
    hairColor = 'black', // assign default value
    location: { city },
    ...others // the rest other values
} = people;