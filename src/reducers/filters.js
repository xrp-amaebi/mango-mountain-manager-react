
const reducer = (state = { text: '' }, action) => {
    switch(action.type) {
        case "SET_TEXT_FILTER":
            return {
                ...state,
                text: action.text  
            };

        default:
            return state;
    }
}

export default reducer