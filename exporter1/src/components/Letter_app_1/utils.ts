import { tokenTypes } from './data';
import { IContact } from './interfaces';

export function getRandomContactNumber(length: number): number {
    return Math.floor(Math.random() * length);
}

export function getToken(token: string): string {
    return `<span contenteditable="false" style="border: 1px dashed green; padding: 0px 3px;">${token}</span>`;
}

export function getTokenTemplate(tokenType: string): string {
    return `<span contenteditable="false">[[[${tokenType}]]]</span>`;
}

export function tokenFormatter(text: string, contact: IContact, reverse: boolean = false): string {
    if (!text) {
        return '';
    }

    tokenTypes.forEach(tokenType => {
        if (!reverse) {
            text = text.split(getTokenTemplate(tokenType)).join(getToken(contact[tokenType]));
        } else {
            text = text.split(getToken(contact[tokenType])).join(getTokenTemplate(tokenType));
        }

    });

    return text;
}

export function setToLocalStorage(name: string, data: string): void {
    const json = JSON.stringify(data);
    localStorage.setItem(name, json);
}

export function getFromLocalStorage(name: string): Array<string | []> {
    const json = localStorage.getItem(name) || '[]';
    return JSON.parse(json);
}