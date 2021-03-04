<template>
  <ul class="todo-main">
    <Item
      v-for="(todo, index) in todos"
      :key="index"
      :todo="todo"
      :delTodo="delTodo"
      :index="index"
      :updateState="updateState"
    />
  </ul>
</template>

<script lang="ts">
import { ref, defineComponent } from "vue";
import Item from "../todolist/Item.vue";
export default defineComponent({
  name: "List",
  components: { Item },
  props: ["todos", "delTodo", "updateState"],
  setup() {
    const refData = ref(0);
    return {
      refData
    };
  }
});
</script>

<style scoped>
/* main */
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>
