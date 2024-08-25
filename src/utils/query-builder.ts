export const queryBuilder = (paramsObject: { [key: string]: any }, skipEmptyString: boolean = true) => {
	const params: { [key: string]: any } = {};

	for (const key in paramsObject) {
		if (paramsObject[key] !== undefined && (!skipEmptyString || paramsObject[key] !== '')) {
			params[key] = paramsObject[key];
		}
	}

	const queryString = Object.entries(params)
		.map(([key, value]) => `${key}=${encodeURIComponent(value as any)}`)
		.join('&');

	return queryString;
};
