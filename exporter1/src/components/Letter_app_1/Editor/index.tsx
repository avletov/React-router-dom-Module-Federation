import React from 'react';

import { Container, TokenGroup, Text, GetToken, EditorArea, Toolbar, Action, ShowArea } from './styles';

import { EditorProps } from './interfaces';

export const Editor: React.FC<EditorProps> = (props) => {
  const {
    editorRef,
    showRef,
    changeEditor,
    changeShow,
    insertToken,
    loadFromLocalStorage,
    saveInLocalStorage
  } = props;

  return (
    <Container>
      <TokenGroup>
        <Text>Вставить токен</Text>
        <GetToken onClick={() => insertToken('name')}>Имя</GetToken>
        <GetToken onClick={() => insertToken('email')}>email</GetToken>
        <GetToken onClick={() => insertToken('phone')}>Телефон</GetToken>
        <GetToken onClick={() => insertToken('website')}>Сайт</GetToken>
      </TokenGroup>
      <EditorArea contentEditable={true} ref={editorRef} onInput={changeEditor}></EditorArea>
      <Toolbar>
        <Action onClick={loadFromLocalStorage}>Загрузить из LocalStorage</Action>
        <Action onClick={saveInLocalStorage}>Сохранить в LocalStorage</Action>
      </Toolbar>
      <ShowArea contentEditable={true} ref={showRef} onInput={changeShow}></ShowArea>
    </Container>
  );
}