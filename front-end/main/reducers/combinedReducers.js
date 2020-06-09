import { reducer as formReducer } from 'redux-form'
import { combineReducers } from 'redux'


let conbinedReducers =  combineReducers({
    form: formReducer
})
export default conbinedReducers