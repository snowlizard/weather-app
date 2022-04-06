export const historyReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_HISTORY':
            return [ ...state, action.history];
        default:
            return state;
    }
}