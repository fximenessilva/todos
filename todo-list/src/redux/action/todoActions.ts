import { Dispatch } from 'redux';
import axios from 'axios';

import { Todo } from '../../types/Todo';
import ActionTypes from '../../types/ActionTypes';
import { ENDPOINT } from '../../constants';

export const addTodo = ({
  title,
  backgroundColor,
  completed = false,
}: Todo) => ({
  type: ActionTypes.ADD_TODO,
  payload: { title, backgroundColor, completed },
});

export const toggleTodo = (id: string) => ({
  type: ActionTypes.TOGGLE_TODO,
  payload: id,
});

export const removeTodo = (id: string) => ({
  type: ActionTypes.REMOVE_TODO,
  payload: id,
});

export const fetchColors = () => {
  return async (dispatch: any) => {
    dispatch({ type: ActionTypes.FETCH_COLORS_REQUEST });

    try {
      const { data } = await axios.get(ENDPOINT);
      const { colors } = data;

      dispatch({
        type: ActionTypes.FETCH_COLORS_SUCCESS,
        payload: colors,
      });
    } catch (error: any) {
      dispatch({
        type: ActionTypes.FETCH_COLORS_FAILURE,
        payload: error.message,
      });
    }
  };
};

export type AddTodoAction = ReturnType<typeof addTodo>;
export type ToggleTodoAction = ReturnType<typeof toggleTodo>;
export type RemoveTodoAction = ReturnType<typeof removeTodo>;

export type TodoAction = AddTodoAction | ToggleTodoAction | RemoveTodoAction;
