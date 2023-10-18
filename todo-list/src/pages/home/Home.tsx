import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchColors, removeTodo } from '../../redux/action/todoActions';
import { Todo } from '../../types/Todo';
import { Form } from './form';
import { List } from '../../components/common/list';
import { Modal } from '../../components/common/modal';
import styles from './home.module.scss';

const Home = () => {
  const [modal, setModal] = useState({ isOpen: false, id: '' });

  const state = useSelector((state: any) => state.todos);

  const { todos } = state;

  const todosList = todos.filter((el: Todo) => !el.completed);

  const doneList = todos.filter((el: Todo) => el.completed);

  const dispatch = useDispatch();

  const doneListMessage = todosList.length
    ? '💪 Get to work and complete your to-dos'
    : '🏆 Great job! Everything done';

  const setOpen = (value: boolean, id: string) =>
    setModal({ id, isOpen: value });

  const deleteTodo = (id: string) => {
    dispatch(removeTodo(id));
  };

  useEffect(() => {
    dispatch(fetchColors() as any);
  }, [dispatch]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h1 className={styles.title}>Simple TODO list app</h1>
        <Form />

        <List
          title="To-do"
          list={todosList}
          noLengthMessage="✏️ Add a to-do"
          setOpen={setOpen}
        />
        <List
          title="Done"
          list={doneList}
          noLengthMessage={doneListMessage}
          setOpen={setOpen}
        />
      </div>
      <Modal
        onConfirm={() => deleteTodo(modal.id)}
        onClose={() => setOpen(false, '')}
        isOpen={modal.isOpen}
      >
        Are you sure you want to delete this task?
      </Modal>
    </div>
  );
};

export default Home;
