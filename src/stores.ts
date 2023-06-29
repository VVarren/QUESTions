import { writable } from "svelte/store";
type Card = {
    title: string,
    backContent: string,
    clicked: boolean,
};
export const cardInfo = writable<Card[]>([]);
