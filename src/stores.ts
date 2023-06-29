import { writable } from "svelte/store";
type Card = {
    title: string,
    backContent: string,
    clicked: boolean,
    setName:string,
};
export const cardInfo = writable<Card[]>([]);
