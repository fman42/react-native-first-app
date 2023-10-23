import axios from 'axios';
import TaskInterface from '../interfaces/Task';

const BASE_URI: string = 'https://jsonplaceholder.typicode.com/todos';

export async function getAsync(): Promise<TaskInterface[]> {
  const response = await axios.get(BASE_URI);

  let _items: TaskInterface[] = [];
  const _max: Number = 10;

  for (let i: number = 0; i < _max; i++) {
    const item = response.data[i];

    _items.push({
      id: item.id,
      title: item.title,
      completed: item.completed,
    });
  }

  return _items;
}

export async function updateCompletedFlagAsync(
  task: TaskInterface,
): Promise<boolean> {
  const response = await axios.put(BASE_URI + '/' + task.id, task);
  return response.data.completed;
}

export async function createTaskAsync(task: {
  title: string;
  completed: boolean;
}): Promise<TaskInterface> {
  const response = await axios.post(BASE_URI, task);
  return response.data;
}
