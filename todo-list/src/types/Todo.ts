export interface Todo {
  id: string;
  title: string;
  completed: boolean;
  backgroundColor: string;
}

export interface TodoState {
  todos: Todo[];
}
