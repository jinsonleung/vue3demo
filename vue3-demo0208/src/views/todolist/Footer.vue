<template>
  <div class="todo-footer">
    <label><input type="checkbox" v-model="isCheckAll"/></label>
    <span
      ><span>已完成 {{ count }} </span> / 全部 {{ todos.length }}
    </span>
    <button class="btn btn-danger" @click="clearAllCheck">
      清除已选中任务
    </button>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent, computed } from "vue";
import { Todo } from "./types/todo";
export default defineComponent({
  name: "Footer",
  props: {
    todos: {
      type: Array as () => Todo[],
      required: true
    },
    checkAll: {
      type: Function,
      required: true
    },
    clearAllCheck: {
      type: Function,
      required: true
    }
  },
  setup(props) {
    const refData = ref(0);
    //计算属性，计算被选中的todo个数
    const count = computed(() => {
      return props.todos.reduce(
        (pre, todo) => pre + (todo.isCompleted ? 1 : 0),
        0
      );
    });
    //计算属性，设置todo全选中或全不选中状态
    const isCheckAll = computed({
      get(){
        return count.value && props.todos.length === count.value
        // console.log(count.value + "," + props.todos.length);
        // if (count.value) {
        //   return true
        // }else{
        //   return false
        // }
      },
      set(val){
        props.checkAll(val);
      }
    });

    return {
      refData,
      count,
      isCheckAll,
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
