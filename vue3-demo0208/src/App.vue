<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <Header :addTodo="addTodo" />
      <List :todos="todos" :delTodo="delTodo" :updateState="updateState" />
      <Footer :todos="todos" :checkAll="checkAll" :clearAllCheck="clearAllCheck" />
    </div>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent, reactive, toRefs } from "vue";
import Header from "./views/todolist/Header.vue";
import List from "./views/todolist/List.vue";
import Footer from "./views/todolist/Footer.vue";
import { Todo } from "./views/todolist/types/todo";

export default defineComponent({
  name: "App",
  components: { Header, List, Footer },
  setup() {
    const refData = ref(0);
    //响应式对象数组
    const state = reactive<{ todos: Todo[] }>({
      todos: [
        { id: 1, title: "奔驰", isCompleted: true },
        { id: 2, title: "比亚迪", isCompleted: false },
        { id: 3, title: "奔驰", isCompleted: false },
        { id: 4, title: "奥迪", isCompleted: true },
        { id: 5, title: "宝马", isCompleted: true },
        { id: 6, title: "长安", isCompleted: false },
        { id: 7, title: "福田", isCompleted: true },
        { id: 8, title: "玛莎拉蒂", isCompleted: false },
        { id: 9, title: "法拉利", isCompleted: true }
      ]
    });
    //添加数据
    const addTodo = (todo: Todo) => {
      state.todos.unshift(todo);
    };
    //删除todo
    const delTodo = (index: number) => {
      state.todos.splice(index, 1);
    };

    //更新todo的isCompleted状态
    const updateState = (todo: Todo, isCompleted: boolean) => {
      todo.isCompleted = isCompleted;
    };
    //设置全选与全不选
    const checkAll = (flag:boolean)=>{
      state.todos.forEach(todo => {
        todo.isCompleted = flag;
      });
    }
    //删除被选中的todo
    const clearAllCheck = ()=> {
      state.todos = state.todos.filter((todo)=>(!todo.isCompleted));
    };
    return {
      refData,
      ...toRefs(state),
      addTodo,
      delTodo,
      updateState,
      checkAll,
      clearAllCheck,
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
