import { ITodo } from "./interfaces";

const getUnixTime = (): number => {
    return new Date().getTime() / 1000;
}

export const getId = (): string => {
    return `todo${getUnixTime()}`;
}

export function setToLocalStorage(name: string, data: Array<ITodo>): void {
    const json = JSON.stringify(data);
    localStorage.setItem(name, json);
}

export function getFromLocalStorage(name: string): Array<ITodo> {
    const json = localStorage.getItem(name) || '[]';
    return JSON.parse(json);
}