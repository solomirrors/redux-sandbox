const reducer = (state = 40, action) => {
    switch (action.type){
        case 'inc':
            return state+1;
        case 'dec':
            return state-1;
        case 'rnd':
            return state + action.payload;

        default:
            return state;
    }
    return 0;
}

export default reducer;