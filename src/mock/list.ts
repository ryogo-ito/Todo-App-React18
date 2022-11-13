import { ListBase } from '../ui/types';

export let MOCK_LIST: ListBase[] = [];

(() => {
  for (let i = 0; i < 5; i++) {
    const listData: ListBase = {
      id: i + 1,
      title: `タイトル${i + 1}`,
      description: `ディスクリプション${i + 1}`,
    };

    MOCK_LIST.push(listData);
  }
})();
