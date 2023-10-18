import { Todo } from "../../types/Todo";
import ActionTypes from "../../types/ActionTypes";

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

export type AddTodoAction = ReturnType<typeof addTodo>;
export type ToggleTodoAction = ReturnType<typeof toggleTodo>;
export type RemoveTodoAction = ReturnType<typeof removeTodo>;

export type TodoAction = AddTodoAction | ToggleTodoAction | RemoveTodoAction;
