import React, { useEffect, useRef, useState } from 'react';
import { ITodo, IConfirm } from './interfaces';
import { getId, getFromLocalStorage, setToLocalStorage } from './utils';

import {
    Container,
    Header,
    Form,
    Input,
    List,
    Item,
    Check,
    Label,
    Task,
    Delete,
    ConfirmContainer,
    Confirm,
    ConfirmText,
    ButtonGroup,
    ButtonDanger,
    ButtonNeutral
} from './styles';

export const Application_2: React.FC = () => {
    const todo = useRef<HTMLInputElement>(null)
    const [todoList, setTodoList] = useState<ITodo[]>([]);
    const [confirm, setConfirm] = useState<IConfirm>({ isShow: false, id: null });

    useEffect(() => {
        const data = getFromLocalStorage('todoList');
        setTodoList(data);
    }, []);

    useEffect(() => {
        setToLocalStorage('todoList', todoList);
    }, [todoList]);

    const addNewTodo = (e: React.KeyboardEvent<HTMLInputElement>): void => {
        const { value } = todo.current;

        if (e.keyCode === 13 && value) {
            e.preventDefault();

            todo.current.value = '';

            setTodoList([{
                id: getId(),
                checked: false,
                task: value
            }, ...todoList]);
        }
    }

    const checkToggle = (e: React.ChangeEvent<HTMLInputElement>, elementId: string): void => {
        const newTodoList = todoList.map((item) => {
            if (item.id === elementId) {
                item.checked = !item.checked;
            }

            return item;
        });

        setTodoList(newTodoList);
    }

    const showConfirm = (isShow: boolean, id?: string): void => {
        setConfirm({ isShow, id });
    }

    const deleteTodo = (elementId: string): void => {
        const newTodoList = todoList.filter(({ id }) => {
            return id !== elementId;
        });

        setTodoList(newTodoList);
    }

    return (
        <Container>
            <Header>To Do List</Header>
            <Form>
                <Input
                    ref={todo}
                    placeholder={'Новая задача'}
                    onKeyDown={(e) => addNewTodo(e)}
                />
            </Form>
            <List>
                {todoList.map(({ id, checked, task }, i) => {
                    return (
                        <Item key={id}>
                            <Check
                                type={'checkbox'}
                                checked={checked}
                                onChange={(e) => checkToggle(e, id)}
                                id={id}
                            />
                            <Label for={id} checked={checked}></Label>
                            <Task checked={checked}>{task}</Task>
                            <Delete
                                onClick={(e) => showConfirm(true, id)}
                            />
                        </Item>
                    );
                })}
            </List>
            {confirm.isShow ?
                <ConfirmContainer>
                    <Confirm>
                        <ConfirmText>Вы действительно хотите удалить данную задачу?</ConfirmText>
                        <ButtonGroup>
                            <ButtonDanger onClick={() => { showConfirm(false); deleteTodo(confirm.id) }}>Удалить</ButtonDanger>
                            <ButtonNeutral onClick={() => showConfirm(false)}>Отмена</ButtonNeutral>
                        </ButtonGroup>
                    </Confirm>
                </ConfirmContainer>
                : ''}
        </Container>
    )
};