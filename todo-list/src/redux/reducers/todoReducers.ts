import { Reducer, AnyAction } from 'redux';
import { v4 as uuidv4 } from 'uuid';

import { Todo } from '../../types/Todo';
import { NAMESPACES } from '../../constants';
import { setter, getter } from '../../utils';
import ActionTypes from '../../types/ActionTypes';

const todos = getter(NAMESPACES.todos) || [];

const initialState = {
  todos,
  colors: [],
  loading: false,
  error: null,
};

const setNewState = (state: any, todos: Todo[]) => {
  const newState = { ...state, todos };
  setter(NAMESPACES.todos, todos);
  return newState;
};

const todoReducer: Reducer<any, AnyAction> = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.ADD_TODO:
      const newTodo = {
        id: uuidv4(),
        ...action.payload,
      };
      const newTodos = [...state.todos, newTodo];
      return setNewState({ ...state, todos: newTodos }, newTodos);

    case ActionTypes.TOGGLE_TODO:
      const updatedTodos = state.todos.map((todo: Todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo,
      );
      return setNewState({ ...state, todos: updatedTodos }, updatedTodos);

    case ActionTypes.REMOVE_TODO:
      const filteredTodos = state.todos.filter(
        (todo: Todo) => todo.id !== action.payload,
      );
      return setNewState({ ...state, todos: filteredTodos }, filteredTodos);

    case ActionTypes.FETCH_COLORS_REQUEST:
      return { ...state, loading: true, error: null };

    case ActionTypes.FETCH_COLORS_SUCCESS:
      return { ...state, colors: action.payload, loading: false, error: null };

    case ActionTypes.FETCH_COLORS_FAILURE:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};

export default todoReducer;
