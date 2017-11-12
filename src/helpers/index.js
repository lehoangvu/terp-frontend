export const currency = val => {
	return val.toLocaleString('vi-VN', {
	  style: 'currency',
	  currency: 'VND',
	});
}