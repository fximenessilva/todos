import { Reducer, AnyAction } from "redux";
import { v4 as uuidv4 } from "uuid";

import { Todo } from "../../types/Todo";
import { NAMESPACES } from "../../constants";
import { setter, getter } from "../../utils/localStorageHelpers";
import ActionTypes from "../../types/ActionTypes";

const todosFromStorage = getter(NAMESPACES.todos);

const initialState: Todo[] = todosFromStorage
  ? todosFromStorage
  : [
      {
        id: uuidv4(),
        title: "Lavar roupa",
        completed: false,
        backgroundColor: "#ccc",
      },
      {
        id: uuidv4(),
        title: "Fazer tpc",
        completed: false,
        backgroundColor: "#eee",
      },

      {
        id: uuidv4(),
        title: "Fazer jantar",
        completed: true,
        backgroundColor: "#fff",
      },
    ];

const setNewState = (state: Todo[]) => setter(NAMESPACES.todos, state);

const todoReducer: Reducer<Todo[], AnyAction> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case ActionTypes.ADD_TODO:
      const newTodo = {
        id: uuidv4(),
        title: action.payload.title,
        completed: action.payload.completed,
        backgroundColor: action.payload.backgroundColor,
      };
      const newStateAdd = [...state, newTodo];
      setNewState(newStateAdd);
      return newStateAdd;

    case ActionTypes.TOGGLE_TODO:
      const newStateToggle = state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
      setNewState(newStateToggle);

      return newStateToggle;

    case ActionTypes.REMOVE_TODO:
      const newStateRemove = state.filter((todo) => todo.id !== action.payload);
      setNewState(newStateRemove);

      return newStateRemove;

    default:
      return state;
  }
};

export default todoReducer;
