import { combineReducers } from 'redux'
import memeReducer from './memeReducer'

const rootReduxer = combineReducers({
    meme: memeReducer
});

export default rootReduxer;