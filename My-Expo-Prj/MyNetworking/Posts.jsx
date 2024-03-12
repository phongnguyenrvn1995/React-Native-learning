const type = {
    LOADING: 'LOADING',
    SUCCESS: 'SUCCESS',
    FAILURE: 'FAILURE'
}

export const actionCreator = {
    loading: () => ({type: type.LOADING}),
    success: (posts) => ({type: type.SUCCESS, payload: posts}),
    failure: () => ({type: type.FAILURE})
}

export const initialState = {
    loading: true,
    posts: [],
    error: false
}

export function reducer(state, action) {
    switch(action.type) {
        case type.LOADING: 
            return {posts: [], loading: true, error: false };
        case type.SUCCESS: 
            return {error: false, loading: false, posts: action.payload };
        case type.FAILURE:
            return {posts: [], loading: false, error: true}
    }
}