import { BUY_MILKSHAKE} from './milkshakeTypes'

const initialState =  {
	numOfMilkshake: 30
}

const milkshakeReducer = (state = initialState, action) => {
	switch(action.type) {
		case BUY_MILKSHAKE: return {
			...state,
			numOfMilkshake: state.numOfMilkshake -1
		}
		default: return state
	}
}

export default milkshakeReducer