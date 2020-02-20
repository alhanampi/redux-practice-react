import {createStore, applyMiddleware} from 'redux'
import rootReducer from './rootReducer'
//middleware:
import logger from 'redux-logger'

//el middleware se pone como segundo parámetro
const store = createStore(rootReducer, applyMiddleware(logger))

export default store;