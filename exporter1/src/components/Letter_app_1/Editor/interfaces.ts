import { MutableRefObject } from 'react';

export interface EditorProps {
    editorRef: MutableRefObject<HTMLDivElement>,
    showRef: MutableRefObject<HTMLDivElement>,
    changeEditor(e: React.FormEvent<HTMLDivElement>): void,
    changeShow(e: React.FormEvent<HTMLDivElement>): void,
    insertToken(tokenType: string): void,
    loadFromLocalStorage(): void,
    saveInLocalStorage(): void
}