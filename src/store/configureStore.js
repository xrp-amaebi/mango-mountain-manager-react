import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { persistStore, persistReducer} from "redux-persist"
import storage from "redux-persist/lib/storage"

import platformReducer from '../reducers/platform'
import filtersReducer from '../reducers/filters'



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose

const configure = () => {
    const store = createStore(
        combineReducers({
            platform: platformReducer,
            filters: filtersReducer
        }),
        composeEnhancers(applyMiddleware(thunk))
    )

    return store 
}


export const _configure = () => {
    const persistConfig = {
        key: "root",
        storage
    }

    const persistedReducer = persistReducer(persistConfig, platformReducer)

    let store = createStore(persistedReducer)
    let persistor = persistStore(store)

    return { store, persistor }
}

export default configure