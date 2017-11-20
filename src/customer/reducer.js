import c from './const'
import { actionTypeCreator } from './../libraries'

const _ = actionTypeCreator(c.MODULE_NAME);

const intinalState = {
    customers: {
        data: [],
        paging: null
    },
}

export default (state = intinalState, action) => {
    switch(action.type){
        case _('list_success'): {
            return {
                ...state,
                customers: {
                    data: action.data.results,
                    paging: action.data.paging,
                }
            }
        }
        default:
            return state;
    }
}
