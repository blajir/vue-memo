const state = {
  todos: [
    {
      id: 1,
      memo: 'スーパーに買い物に行く',
      completed: false,
    },
    {
      id: 2,
      memo: '飛行機のチケットを予約する',
      completed: false,
    },
    {
      id: 3,
      memo: '会議室の予約をする',
      completed: false,
    },
  ],
};

const util = {
  // memos の中から id が一致するメモを返す
  findIndex(memos, id) {
    const targetId = parseInt(id, 10);
    return memos.findIndex((memo) => {
      return memo.id === targetId;
    })
  }
};

const actions = {
  /**
   * Todoをオブジェクト形式でtodosに格納する
   * @param {Object} obj IDとmemoが含まれたオブジェクト
   */
  addMemo(obj) {
    obj.id = state.todos.reduce((id, todo) => {
      return id < todo.id ? todo.id : id;
    }, 0) + 1;
    state.todos.push(obj);
  },
  /**
   * Todoが完了したかどうかを判定するcompletedのブーリン値をトグルさせる
   * @param {Number} n
   */
  changeChecked(n) {
    state.todos[n - 1].completed = !state.todos[n - 1].completed;
  },
  /**
   * Todoを削除する
   * @param {*} id
   */
  removeTodo(id) {
    const index = util.findIndex(state.todos, id);
    state.todos.splice(index, 1);
  },
  /**
   * ローカルストレージにTodoを保存する
   */
  saveTodo() {
    localStorage.setItem('todos', JSON.stringify(state.todos));
  },
  /**
   * ローカルストレージの値を読み込む
   */
  loadTodo() {
    state.todos = JSON.parse(localStorage.getItem('todos'));
    if(!state.todos) {
      state.todos = [
        {
          id: 1,
          memo: 'スーパーに買い物に行く',
          completed: false,
        },
        {
          id: 2,
          memo: '飛行機のチケットを予約する',
          completed: false,
        },
        {
          id: 3,
          memo: '会議室の予約をする',
          completed: false,
        },
      ];
    }
  },
};

export default {
  state,
  actions,
}
