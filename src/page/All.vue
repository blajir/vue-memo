<template>
  <main>
    <ul v-if="sharedState.todos.length !== 0">
      <li
        v-for="todo in sharedState.todos"
        :key="todo.id"
        @mouseenter="mouseenter"
      >
        <input type="checkbox" :checked="todo.completed" @click="changeChecked(todo.id)">
        <span>id:{{todo.id}}</span>
        <span>{{todo.memo}}</span>
        <button @click="removeTodo(todo.id)">削除</button>
      </li>
    </ul>
    <div v-else>表示するTodoがありません</div>
    <footer-component @addMemo="addMemo"/>
  </main>
</template>

<script>
import store from "../store";
import FooterComponent from "../components/Footer";

export default {
  components: {
    FooterComponent,
  },
  data() {
    return {
      sharedState: store.state
    }
  },
  methods: {
    /**
     * 入力されたメモをオブジェクトに格納して、Storeに格納する
     * @param {String} memo
     */
    addMemo(memo) {
      console.log(memo);
      const obj = {
        // 'id': store.state.todos.length + 1,
        'memo': memo,
        'completed': false,
      }
      store.actions.addMemo(obj);
    },
    /**
     * クリックされた要素のIDを引数としてStore.actionに渡し、
     * Todoのcompletedのブーリン値を変更する
     * @param {Number} id
     */
    changeChecked(id) {
      store.actions.changeChecked(id);
    },
    mouseenter(e) {
      // console.log(e.target);
    },
    removeTodo(id) {
      store.actions.removeTodo(id);
    },
  },
}
</script>
