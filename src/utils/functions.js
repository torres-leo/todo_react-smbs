export const generateId = () => {
	const random = Math.random().toString(36).substring(2);
	const fecha = Date.now().toString(36);

	return random + fecha;
};

export const setLocalStorage = (key, value) => {
	localStorage.setItem(key, JSON.stringify(value));
};

export const getLocalStorage = (key) => {
	return JSON.parse(localStorage.getItem(key));
};
