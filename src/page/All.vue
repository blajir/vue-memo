<template>
  <main class="main">
    <ul
      v-if="sharedState.todos.length !== 0"
      class="todo-list"
    >
      <li
        v-for="todo in sharedState.todos"
        :key="todo.id"
        :class="{completed: todo.completed}"
        @mouseenter="mouseenter"
        class="todo-list-item"
      >
        <input
          v-bind:id="todo.id"
          type="checkbox"
          :checked="todo.completed"
          @click="changeChecked(todo.id)"
        >
        <label v-bind:for="todo.id">
          <span>id:{{todo.id}}</span>
          <span>{{todo.memo}}</span>
        </label>
        <button
          @click="removeTodo(todo.id)"
          class="todo-list-item__button"
        >削除</button>
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
  created: function () {
    store.actions.loadTodo();
  },
  methods: {
    /**
     * 入力されたメモをオブジェクトに格納して、Storeに格納する
     * @param {String} memo
     */
    addMemo(memo) {
      console.log(memo);
      const obj = {
        'memo': memo,
        'completed': false,
      }
      store.actions.addMemo(obj);
      store.actions.saveTodo();
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
      store.actions.saveTodo();
    },
  },
}
</script>

<style lang="scss" scoped>
  .main {
  }
  .completed {
    label {
      text-decoration: line-through;
      color: #d8d8da;
    }
  }
  .todo-list {
    width: 50%;
    margin: 0 auto;
    border-top: 1px solid #e6e6e6;
    border-right: 1px solid #e6e6e6;
    border-left: 1px solid #e6e6e6;
    box-shadow: 0 3px 16px rgba(0, 0, 0, .016);
    &-item {
      position: relative;
      padding: 20px;
      background-color: #fff;
      border-bottom: 1px solid #e6e6e6;
      font-size: 16px;
      &__button {
        position: absolute;
        top: 50%;
        right: 20px;
        height: 22px;
        margin-top: -11px;
        border: 1px solid #e6e6e6;
        background-color: #fff;
        border-radius: 4px;
        box-shadow: 0 1px 8px rgba(0, 0, 0, .06);
      }
    }
  }
</style>
