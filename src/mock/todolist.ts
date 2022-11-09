import { TodoListBase } from '../ui/types';

export let MOCK_TODO_LIST: TodoListBase[] = [];

(() => {
  for (let i = 0; i < 5; i++) {
    const todo: TodoListBase = {
      id: i + 1,
      title: `タイトル${i + 1}`,
      description: `ディスクリプション${i + 1}`,
    };

    MOCK_TODO_LIST.push(todo);
  }
})();
