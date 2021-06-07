import React from 'react';

import { Container, Button, Form, Label, Input } from './styles';

import { ContactDataProps } from './interfaces';

export const ContactData: React.FC<ContactDataProps> = (props) => {
  const { contact, changeField, randomContact } = props;
  const { name, email, phone, website } = contact;

  return (
    <Container>
      <Button onClick={randomContact}>Загрузить случайного пользователя</Button>
      <Form>
        <Label htmlFor={'inputName'}>Имя пользователя</Label>
        <Input value={name} onChange={(e) => changeField(e, 'name')} id={'inputName'} />
        <Label htmlFor={'inputEmail'}>Адрес e-mail</Label>
        <Input value={email} onChange={(e) => changeField(e, 'email')} id={'inputEmail'} />
        <Label htmlFor={'inputPhone'}>Контактный телефон</Label>
        <Input value={phone} onChange={(e) => changeField(e, 'phone')} id={'inputPhone'} />
        <Label htmlFor={'inputWebsite'}>Основной веб-сайт</Label>
        <Input value={website} onChange={(e) => changeField(e, 'website')} id={'inputWebsite'} />
      </Form>
    </Container>
  );
}