import { IContact } from '../interfaces';

export interface ContactDataProps {
    contact: IContact,
    changeField(e: React.ChangeEvent<HTMLInputElement>, fieldName: string): void,
    randomContact(): void
}