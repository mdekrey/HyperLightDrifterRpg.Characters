import { Dispatch, SetStateAction, useEffect, useState } from "react";

export function useLocalstorageState<T>(key: string, initialState: T): [T, Dispatch<SetStateAction<T>>] {
	const localStorageRawValue = localStorage.getItem(key);
	const [state, setState] = useState<T>(localStorageRawValue ? JSON.parse(localStorageRawValue) : initialState);
	useEffect(() => {
		localStorage.setItem(key, JSON.stringify(state));
	}, [state, key]);
	return [state, setState];
}
