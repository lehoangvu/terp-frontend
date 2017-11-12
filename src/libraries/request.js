import axios from 'axios';

export const request = (_options) => {
	const defaultOptions = {
		method: 'get'
	};

	const options = {
		...defaultOptions,
		..._options,
		url: !_options.url.indexOf('http') > -1 ? `${API_URL}${_options.url}` : _options.url
	};

	return axios(options);
}