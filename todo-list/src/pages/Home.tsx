import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { toggleTodo, removeTodo } from '../redux/action/todoActions';
import { Todo } from '../types/Todo';
import { Item } from '../components/common/item';
import styles from './home.module.scss';

const Home = () => {
  const todos = useSelector((state: any) => state.todos);

  const dispatch = useDispatch();

  const completeTodo = (id: string) => {
    dispatch(toggleTodo(id));
  };

  const deleteTodo = (id: string) => {
    dispatch(removeTodo(id));
  };

  console.log(todos);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h1>Simple TODO list app</h1>

        <div className={styles['todos-wrapper']}>
          <h2 className={styles['todos-title']}>List</h2>
          {todos.map((todo: Todo) => (
            <Item.Root key={todo.id} backgroundColor={todo.backgroundColor}>
              <Item.Label title={todo.title} />
              <Item.Checkbox
                id={todo.id}
                onChange={completeTodo}
                checked={todo.completed}
                label=''
              />
              <Item.Button id={todo.id} onClick={deleteTodo} />
            </Item.Root>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;