/** import react stuff */
    import React from 'react'
    import ReactDOM from 'react-dom'
    import Main from './main/main.jsx'

/** import redux stuff */
    import {createStore,applyMiddleware}  from 'redux'
    import {Provider} from 'react-redux'
    import combinedReducers from './main/reducers/combinedReducers.js'


const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ 
    && window.__REDUX_DEVTOOLS_EXTENSION__();

/** create store */
    let store = applyMiddleware()(createStore)(combinedReducers,devTools)
    window.store = store
/** just render with store */
    ReactDOM.render(
        <Provider store={store}>
            <Main />
        </Provider>
    , document.getElementById("app") )