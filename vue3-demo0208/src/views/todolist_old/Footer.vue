<template>
  <div class="todo-footer">
    <label><input type="checkbox"/></label>
    <span><span>已完成111 </span> / 全部</span>
    <button class="btn btn-danger" @click="clearAllCompletedTodos">
      清除已选中任务
    </button>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from "vue";
import { Todo } from "../todolist_old/types/todo";
export default defineComponent({
  name: "Footer",
  props: {
    todos: {
      type: Array as () => Todo[],
      required: true
    },
    clearAllCompletedTodos: {
      type: Function,
      required: true
    }
  },
  setup(props) {
    const refData = ref(0);
    console.log(props.todos);
    // const count = computed(() => {
    //   return props.todos.reduce(
    //     (pre, todo) => pre + (todo.isCompleted ? 1 : 0),
    //     0
    //   );
    // });
    return {
      refData
      // count
    };
  }
});
</script>
<style scoped>
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relateive;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>
