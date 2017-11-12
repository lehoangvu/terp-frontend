import c from './const'
import { actionTypeCreator } from './../libraries'

const _ = actionTypeCreator(c.MODULE_NAME);

const intinalState = {
    products: [],
    
}

export default (state = intinalState, action) => {
    switch(action.type){
    	case _('list_success'): {
    		return {
    			...state,
                products: action.data
    		}
    	}
        default:
            return state;
    }
}
