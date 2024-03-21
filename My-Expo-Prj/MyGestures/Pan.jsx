const type = {
    START: "START",
    MOVE: "MOVE",
    END: "END",
};

export const initState = {
    isDragging: false,
    initX: 10.0,
    initY: 10.0,
    dx: 0.0,
    dy: 0.0
};

export const panCreator = {
    start: () => ({type: type.START, payload: {}}),
    move: (dx, dy) => ({type: type.MOVE, payload: {dx: dx, dy: dy}}),
    end: (dx, dy) => ({type: type.END, payload: {dx: dx, dy: dy}}),
}

export function reducer(state, action) {
    switch(action.type) {
        case type.START:
            return {...state, isDragging: true};
        case type.MOVE:
            return {...state, dx: action.payload.dx, dy: action.payload.dy};
        case type.END:
            return {...initState, initX: state.initX + action.payload.dx, initY: state.initY + action.payload.dy};
    }
}