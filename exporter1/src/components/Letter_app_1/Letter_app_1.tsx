import React, { useState, useRef, useEffect } from 'react';

import { Container } from './styles';
import { ContactData } from './ContactData';
import { Editor } from './Editor';

import {
    getRandomContactNumber,
    getTokenTemplate,
    setToLocalStorage,
    getFromLocalStorage,
    tokenFormatter
} from './utils';
import { contacts } from './data';
import { IContact } from './interfaces';

export const Letter_app_1: React.FC = () => {
    let [contact, setContact] = useState<IContact>(contacts[0]);
    let editorRef = useRef<HTMLDivElement>(null);
    let showRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        editorRef.current.innerHTML = tokenFormatter(showRef.current.innerHTML, contact);
    }, [contact]);

    const randomContact = (): void => {
        setContact(contacts[getRandomContactNumber(contacts.length)]);
        editorRef.current.innerHTML = null;
        showRef.current.innerHTML = null;
    };

    const changeField = (e: React.ChangeEvent<HTMLInputElement>, fieldName: string): void => {
        const { value } = e.target;

        setContact((prevState) => ({ ...prevState, [fieldName]: value }));
    };

    const insertToken = (tokenType: string): void => {
        editorRef.current.innerHTML += tokenFormatter(getTokenTemplate(tokenType) + '&nbsp;', contact);
        showRef.current.innerHTML += getTokenTemplate(tokenType);
    };

    const changeEditor = (): void => {
        showRef.current.innerHTML = tokenFormatter(editorRef.current.innerHTML, contact, true);
    };

    const changeShow = (): void => {
        editorRef.current.innerHTML = tokenFormatter(showRef.current.innerHTML, contact);
    };

    const loadFromLocalStorage = (): void => {
        const data = getFromLocalStorage(contact.id);

        editorRef.current.innerHTML = typeof data === 'string' ? tokenFormatter(data, contact) : '';
        showRef.current.innerHTML = typeof data === 'string' ? data : '';
    };

    const saveInLocalStorage = (): void => {
        setToLocalStorage(contact.id, showRef.current.innerHTML);
    };

    return (
        <Container>
            <ContactData
                contact={contact}
                randomContact={randomContact}
                changeField={changeField}
            />
            <Editor
                editorRef={editorRef}
                showRef={showRef}
                insertToken={insertToken}
                changeEditor={changeEditor}
                changeShow={changeShow}
                loadFromLocalStorage={loadFromLocalStorage}
                saveInLocalStorage={saveInLocalStorage}
            />
        </Container>
    );
};