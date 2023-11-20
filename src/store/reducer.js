import { combineReducers } from 'redux';
import useReducer from './slices/userReducer'

const rootReducer = combineReducers({
    userStore: useReducer
})

export default rootReducer;