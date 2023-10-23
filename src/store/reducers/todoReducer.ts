import {get} from '../../repositories/taskRepository';

interface Todo {
  id: Number;
  title: string;
  completed: boolean;
}

interface TodoState {
  todos: Todo[];
}

type Action = {
  type: string;
  payload: any;
};

const initState: TodoState = {
  todos: [],
};

export default function todoReducer(
  state: TodoState = initState,
  action: Action,
) {
  switch (action.type) {
    case 'loadDefaultTodos': {
      return {
        ...state,
        todos: action.payload,
      };
    }
    case 'updateCompletedTodo': {
      return {
        ...state,
        todos: state.todos.map(todo => {
          if (todo.id !== action.payload.id) {
            return todo;
          }

          return {
            ...todo,
            completed: !todo.completed,
          };
        }),
      };
    }
    case 'add': {
      return {
        ...state,
        todos: state.todos.concat(action.payload),
      };
    }
    default:
      return state;
  }
}
