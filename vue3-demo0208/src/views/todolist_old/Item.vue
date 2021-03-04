<template>
  <li
    class="todo-item"
    @mouseenter="mouseHandler(true)"
    @mouseleave="mouseHandler(false)"
    :style="{ color: ftColor, background: bgColor }"
  >
    <label>
      <!-- <input type="checkbox" :value="todo.isCompleted" v-model="todo.isCompleted" /> 
      这里报错
      -->
      <input type="checkbox" />
      <span>{{ todo.title }}</span>
    </label>
    <button
      class="btn btn-danger"
      style="display: none"
      v-show="isButtonShow"
      @click="del"
    >
      删除
    </button>
  </li>
</template>

<script lang="ts">
import { ref, defineComponent } from "vue";
import { Todo } from "../types/todo";

export default defineComponent({
  name: "Item",
  // props: ["todo"],
  props: {
    todo: {
      type: Object as () => Todo,
      required: true
    },
    index: {
      type: Number,
      required: true
    },
    deleteTodo: {
      type: Function,
      required: true
    }
  },
  setup(props) {
    const ftColor = ref("black");
    const bgColor = ref("white");
    const isButtonShow = ref(false);
    const mouseHandler = (flag: boolean) => {
      if (flag) {
        ftColor.value = "white";
        bgColor.value = "#ffcc66";
        isButtonShow.value = true;
      } else {
        ftColor.value = "black";
        bgColor.value = "white";
        isButtonShow.value = false;
      }
    };
    const del = (index: number) => {
      props.deleteTodo(index);
    };
    return {
      isButtonShow,
      mouseHandler,
      ftColor,
      bgColor,
      del
    };
  }
});
</script>
<style scoped>
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}
li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relateive;
  top: -1px;
}

li button {
  float: right;
  /* display: none; */
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
</style>
