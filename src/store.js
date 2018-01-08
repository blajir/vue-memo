const state = {
  todos: [
    {
      id: 1,
      memo: 'hoge',
      completed: false,
    },
    {
      id: 2,
      memo: 'foo',
      completed: false,
    },
    {
      id: 3,
      memo: 'bar',
      completed: false,
    },
  ],
  // idCounter: state.todos.length,
  copyMemo: '',
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
  removeTodo(n) {
    state.todos.splice(n - 1, 1);
  },
};

export default {
  state,
  actions,
}
