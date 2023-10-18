import React from 'react';
import { useDispatch } from 'react-redux';

import { toggleTodo } from '../../../redux/action/todoActions';
import { NoLength } from '../noLength';
import { Item } from '../item';
import { Todo } from '../../../types/Todo';
import styles from './list.module.scss';

interface ListProps {
  title: string;
  noLengthMessage: string;
  list: Todo[];
  setOpen: (value: boolean, id: string) => void;
}

const List: React.FC<ListProps> = ({
  list,
  title,
  noLengthMessage = 'Empty list...',
  setOpen,
}) => {
  const dispatch = useDispatch();

  const completeTodo = (id: string) => {
    dispatch(toggleTodo(id));
  };

  const deleteHandler = (id: string) => setOpen(true, id);

  return (
    <div className={styles['todos-wrapper']}>
      <h2 className={styles['todos-title']}>{title}</h2>
      {list.length ? (
        list.map((todo: Todo) => (
          <Item.Root key={todo.id} backgroundColor={todo.backgroundColor}>
            <Item.Label title={todo.title} />
            <Item.Checkbox
              onChange={() => completeTodo(todo.id as string)}
              checked={todo.completed}
              label=""
            />
            <Item.Button
              backgroundColor={todo.backgroundColor}
              id={todo.id}
              onClick={() => deleteHandler(todo.id as string)}
            />
          </Item.Root>
        ))
      ) : (
        <NoLength message={noLengthMessage} />
      )}
    </div>
  );
};

export default List;
