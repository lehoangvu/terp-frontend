import c from './const'
import { actionTypeCreator } from './../libraries'
import {request} from './../libraries/request'

const _ = actionTypeCreator(c.MODULE_NAME)

export const getList = () => {
	return dispatch => request({
		url: '/products'
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

export const getCustomerByPhone = (q) => {
	return dispatch => request({
		url: '/customers?q=' + q
	}).then((response) => {
		dispatch({
			type: _('search_customer_success'),
			data: response.data,
			q: q
		})
	}).catch(() => {

		dispatch({
			type: _('search_fail')			
		})
	});
}