import NameStore from './nameStore/name.store';

const nameStore = new NameStore(); // This is our only global store

export const StoresList = { nameStore : nameStore };