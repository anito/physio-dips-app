import { writable } from "svelte/store";

function createStore() {

	const { subscribe, update } = writable(false);

	return {
		subscribe,
		update: (val) => update(_ => val)
	}
}
export const loginGuard = createStore();