// import kharacters from '../utils/extra/fixtures/characterArray';

const platformDefaultState = {
    platform: 'default',
    not: ['Z', 'S+', 'S', 'A'],
    KHARACTER: 'scorpion',
    kharacters: [{}],
    token: "", 
    user: undefined
}

const eventState = {
    event: undefined
}

const actions = (state = platformDefaultState, action) => {
    switch(action.type) {
        case "SELECT_CONTROLLER":
            return {
                ...state,
                platform: action.platform
            }
        ;

        case "SELECT_KHARACTER":
            return {
                ...state,
                KHARACTER: action.KHARACTER
            }
        ;

        case "SET_TOKEN":
            return {
                ...state,
                token: action.token,
                user: action.user
            }
        ;

        case "SET_PROFILE":
            return {
                ...state,
                ...action.user,
                user: action.firstName
            }
        ;

        case "ADD_TIER":
            return {
                ...state,
                ...state.not.splice(action.index + 1, 0, action.fill),
                ...state.not
            }
        ;

        case "SET_EDIT_TIER":
            return {
                ...state,
               ...state.not.splice(action.index, 1, action.target),
               ...state.not
            }
        ;

        case "REMOVE_TIER":
            return {
                ...state,
                ...state.not.splice(action.index, 1),
                ...state.not
            }
        ;

        default: 
            return state
        ;
    }
}


export const event = (state = eventState, action) => {
    switch(action.type) {
        
        case "SELECT_EVENT":
            return {
                ...state,
                platform: action.platform
            }
        ;

        default: 
            return state
        ;
    }
}

export default actions