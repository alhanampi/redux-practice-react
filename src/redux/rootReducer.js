import {combineReducers} from 'redux'

import cakeReducer from './cakes/cakeReducer'
import iceCreamReducer from './iceCream/iceCreamReducer'
import milkshakeReducer from './milkshake/milkshakeReducer'

const rootReducer = combineReducers({
		cake: cakeReducer, 
		iceCream: iceCreamReducer,
		milkshake: milkshakeReducer
	})

export default rootReducer;