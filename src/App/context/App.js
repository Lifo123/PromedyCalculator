import { atom } from "nanostores";

export const AppInputStore = atom([
    { Note: 0, id: 1, per: '' },
    { Note: 0, id: 2, per: '' },
    { Note: 0, id: 3, per: '' },
    { Note: 0, id: 4, per: '' }
]);

export const NoPerStore = atom(25);