<template>
  <li
    class="todo-item"
    @mouseenter="switchBgColor(true)"
    @mouseleave="switchBgColor(false)"
    :style="{ color: newColor, background: newBgColor }"
  >
    <label>
      <input type="checkbox" v-model="isCompleted" />
      <span>{{ todo.title }}</span>
    </label>
    <button class="btn btn-danger" v-show="isShow" @click="del">删除</button>
  </li>
</template>

<script lang="ts">
import { ref, defineComponent, computed } from "vue";
import { Todo } from "./types/todo";
export default defineComponent({
  name: "Item",
  // props: ["todo","index"],
  props: {
    todo: {
      type: Object as () => Todo,
      required: true
    },
    index: {
      type: Number,
      required: true
    },
    delTodo: {
      type: Function,
      required: true
    },
    updateState: {
      type: Function,
      required: true
    }
  },
  setup(props) {
    const refData = ref(0);
    const newColor = ref("black");
    const newBgColor = ref("white");
    const isShow = ref(false);
    const switchBgColor = (flag: boolean) => {
      if (flag) {
        newColor.value = "white";
        newBgColor.value = "#ff6633";
        isShow.value = true;
      } else {
        newColor.value = "black";
        newBgColor.value = "white";
        isShow.value = false;
      }
    };
    //删除数据
    const del = () => {
      console.log(props.index);
      props.delTodo(props.index);
    };
    //选中/不选中计算属性
    const isCompleted = computed({
      get() {
        return props.todo.isCompleted;
      },
      set(val: boolean) {
        props.updateState(props.todo, val);
      }
    });

    return {
      refData,
      switchBgColor,
      newColor,
      newBgColor,
      isShow,
      del,
      isCompleted
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
