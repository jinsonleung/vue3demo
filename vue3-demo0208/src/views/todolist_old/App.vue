<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <Header :addTodo="addTodo" />
      <List :todos="todos" :deleteTodo="deleteTodo" :updateTodo="updateTodo" />
      <Footer :todos="todos" :clearAllCompletedTodos="clearAllCompletedTodos" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
import Footer from "./views/Footer.vue";
import Header from "./views/Header.vue";
import List from "./views/List.vue";
import { Todo } from "./types/todo";

export default defineComponent({
  name: "App",
  components: { Header, List, Footer },
  //1）数据使用数组来存储，每个数组是一个对象，由id、title、isCompleted组成
  //2）数据定义在父组件当中，子组件很方便即可访问到父组件的数据
  //3）使用接口来防止他人修改todos对象的属性类型
  setup() {
    const state = reactive<{ todos: Todo[] }>({
      todos: [
        { id: 1, title: "宝马", isCompleted: false },
        { id: 2, title: "奔驰", isCompleted: true },
        { id: 3, title: "本田", isCompleted: true },
        { id: 4, title: "奥迪", isCompleted: false },
        { id: 5, title: "中华", isCompleted: true },
        { id: 6, title: "比亚迪", isCompleted: true }
      ]
    });
    //添加todo
    const addTodo = (todo: Todo) => {
      state.todos.unshift(todo);
    };
    const deleteTodo = (index: number) => {
      state.todos.splice(index, 1);
    };
    //修改todo是否完成状态
    const updateTodo = (todo: Todo, isCompleted: boolean) => {
      todo.isCompleted = isCompleted;
    };

    const clearAllCompletedTodos = () => {
      state.todos = state.todos.filter(aa => !aa.isCompleted);
    };
    return {
      ...toRefs(state),
      addTodo,
      deleteTodo,
      updateTodo,
      clearAllCompletedTodos
    };
  }
});
</script>
<style scoped>
.todo-container {
  width: 600px;
  margin: 0 auto;
}

.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
