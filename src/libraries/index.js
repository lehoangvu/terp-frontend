const actionTypeCreator = (prefix = 'common') => {
	return (type) => {
		return `${prefix}_${type}`;
	}
}

export {
	actionTypeCreator
}