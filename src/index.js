import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
// import { PersistGate } from "redux-persist/integration/react"
import reportWebVitals from './reportWebVitals'

import Store from "./Global/store"
import { Router } from "./routers/Router"
// import { _configure } from "./store/configureStore"
import configure from "./store/configureStore"

// import "normalize.css"
// import "./styles/styles.scss"

// const { persistor } = _configure()
const store = configure()

const jsx = (
    <Store>
        <Provider store={store}>
            <Router />
        </Provider>
    </Store>
)

ReactDOM.render(jsx, document.getElementById('app'))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

reportWebVitals()