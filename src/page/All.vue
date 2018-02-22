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
    <div v-else><p class="tac">表示するTodoがありません</p></div>
    <footer-component @addMemo="addMemo"/>
  </main>
</template>

<script>
// import store from "../store";
import FooterComponent from "../components/Footer";

export default {
  components: {
    FooterComponent,
  },
  created: function () {
    this.$store.commit('loadTodo');
  },
  computed: {
    sharedState() {
      return this.$store.state;
    },
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
      this.$store.commit('addMemo', obj);
      this.$store.commit('saveTodo');
    },
    /**
     * クリックされた要素のIDを引数としてStore.actionに渡し、
     * Todoのcompletedのブーリン値を変更する
     * @param {Number} id
     */
    changeChecked(id) {
      this.$store.commit('changeChecked', id);
    },
    mouseenter(e) {
      // console.log(e.target);
    },
    removeTodo(id) {
      this.$store.commit('removeTodo', id);
      this.$store.commit('saveTodo');
    },
  },
}
</script>

<style lang="scss" scoped>
  .tac {
    text-align: center;
  }
  .completed {
    label {
      text-decoration: line-through;
      color: #d8d8da;
    }
  }
  .todo-list {
    width: 80%;
    max-width: 960px;
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
