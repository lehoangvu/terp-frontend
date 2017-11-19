import c from './const'
import { actionTypeCreator } from './../libraries'
import {request} from './../libraries/request'

const _ = actionTypeCreator(c.MODULE_NAME)

export const getList = (q = '', page = 1, limit = 20) => {
	return dispatch => request({
		url: '/customers',
		params: {
			q,
			page,
			limit
		}
	}).then((response) => {
		dispatch({
			type: _('list_success'),
			data: response.data
		})
	}).catch(() => {

		dispatch({
			type: _('list_fail')			
		})
	});
}