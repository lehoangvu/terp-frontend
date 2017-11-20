import c from './const'
import { actionTypeCreator } from './../libraries'
import {request} from './../libraries/request'

const _ = actionTypeCreator(c.MODULE_NAME)

export const getCustomerByPhone = (q) => {
	return dispatch => request({
		url: '/customers?q=' + q
	}).then((response) => {
		dispatch({
			type: _('search_success'),
			data: response.data
		})
	}).catch(() => {

		dispatch({
			type: _('search_fail')			
		})
	});
}

export const createCustomer = (customer) => {
	return dispatch => request({
		url: '/customers',
		method: 'post',
		data: customer

	}).then((response) => {
		dispatch({
			type: _('create_success'),
			data: response.data
		})
	}).catch(() => {
		dispatch({
			type: _('create_fail')			
		})
	});
}

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

