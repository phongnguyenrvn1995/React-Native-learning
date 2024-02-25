const add5: (i: number) => number = (i) => {
    return i + 5;
} 

const x = i => { return i + 1; };
const x1 = i => i + 1;

const y = (i, j) => { return i + j; };
const y1 = (i, j) => i + j;

const z = (...i) => i[0] + i[1]

export {z}