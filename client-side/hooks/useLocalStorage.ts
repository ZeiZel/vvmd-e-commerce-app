import { useState } from 'react';
import { isNotBrowser } from '../helpers';

export const useLocalStorage = (key: string, initialValue: any) => {
	const [value, setValue] = useState(() => {
		const jsonValue = !isNotBrowser ? localStorage.getItem(key) : null;

		if (jsonValue) return JSON.parse(jsonValue);

		if (typeof initialValue === 'function') {
			return initialValue();
		} else {
			return initialValue;
		}
	});

	const updateValue = (newValue: any) => {
		setValue(newValue);
		localStorage.setItem(key, JSON.stringify(newValue));
	};

	const removeValue = () => {
		setValue(null);
		localStorage.removeItem(key);
	};

	return [value, updateValue, removeValue];
};
