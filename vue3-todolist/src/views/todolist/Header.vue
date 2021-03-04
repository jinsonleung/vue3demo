<template>
  <div class="todo-header">
    <input
      type="text"
      placeholder="请输入任务并按回车确认"
      v-model="todoStr"
      @keyup.enter="add"
    />
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from "vue";
import { Todo } from "./types/todo";
export default defineComponent({
  name: "Header",
  props: {
    addTodo: {
      type: Function,
      required: true
    }
  },
  setup(props) {
    const todoStr = ref("");
    //涛加todo
    const add = () => {
      if (todoStr.value.trim() == "") return;
      const text = todoStr.value;
      const todo: Todo = {
        id: Date.now(),
        title: text,
        isCompleted: false
      };
      props.addTodo(todo);
      todoStr.value = "";
    };
    return {
      todoStr,
      add
    };
  }
});
</script>

<style scoped>
/* header */
.todo-header input {
  width: 560px;
  height: 28px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 7px;
}

.todo-header input:focus {
  outline: none;
  border-color: rgba(82, 168, 236, 0.8);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.75) 0 1px 2px
    rgba(82, 168, 236, 0.6);
}
</style>
