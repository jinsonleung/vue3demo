<template>
  <div class="todo-header">
    <input
      type="text"
      placeholder="请输入任务并按回车确认"
      @keyup.enter="add"
      v-model="todoText"
    />
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from "vue";
export default defineComponent({
  name: "Header",
  props: {
    addTodo: {
      type: Function,
      required: true
    }
  },
  setup(props) {
    const todoText = ref("");
    const add = () => {
      const newTodoText = todoText.value;
      if (!newTodoText.trim()) return;
      const newTodo = {
        id: Date.now(),
        title: newTodoText.trim(),
        isCompleted: false
      };
      props.addTodo(newTodo);
      todoText.value = "";
    };
    return {
      todoText,
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
