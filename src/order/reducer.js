import c from './const'
import { actionTypeCreator } from './../libraries'

const _ = actionTypeCreator(c.MODULE_NAME);

const intinalState = {
    orders: [],
    customer_searching: {
        fetching: false,
        q: '',
        results: []
    }
}

export default (state = intinalState, action) => {
    switch(action.type){
        case _('list_success'): {
            return {
                ...state,
                products: action.data
            }
        }
    	case _('search_customer_success'): {
    		return {
    			...state,
                customer_searching: {
                    q: action.q,
                    results: action.data.results,
                }
    		}
    	}
        default:
            return state;
    }
}
