export const selectController = ({ platform } = {}) => ({
    type: 'SELECT_CONTROLLER',
    platform
})


export const selectKharacter = ({ KHARACTER } = {}) => ({
    type: 'SELECT_KHARACTER',
    KHARACTER
})

export const tokenize = ({ token, profile } = {}) => ({
    type: 'SET_TOKEN',
    user: profile,
    token
})

export const profiler = ({ profile } = {}) => {
    console.log( "action", { profile })

    return ({
        type: 'SET_PROFILE',
        user: profile,
        ...profile
    })
}

export const addTier = ({ index }) => ({
    type: 'ADD_TIER',
    fill: "",
    index
})

export const editTier = ({ not } = {}) => ({
    type: 'EDIT_TIER',
    not
})

export const editFilter = ({ target, index }) => ({
    type: "SET_EDIT_TIER",
    index,
    target: target.value
})

export const removeTier = ({ index }) => ({
    type: 'REMOVE_TIER',
    index
})