<template>
  <div>
    <h3>计算属性</h3>
    <fieldset>
      <legend>姓名操作</legend>
      姓氏：<input type="text" placeholder="请输入姓氏" v-model="firstName" />
      <br />
      名字：<input type="text" placeholder="请输入名字" v-model="lastName" />
      <br />
    </fieldset>
    <fieldset>
      <legend>计算属性演示</legend>
      姓名：<input type="text" placeholder="姓名" v-model="fullName1" /> <br />
      姓名：<input type="text" placeholder="请输入姓名" /> <br />
      姓名：<input type="text" placeholder="请输入姓名" /> <br />
    </fieldset>
    <br />
    <button @click="isShow = !isShow">显示子组件</button>
    <child v-if="isShow"></child>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent, computed } from "vue";
import Child from "./components/Child.vue";
export default defineComponent({
  name: "App",
  setup() {
    const firstName = ref("张");
    const lastName = ref("小泉");
    const refData = ref(0);
    const fullName1 = computed(() => {
      return firstName.value + "_" + lastName.value;
    });
    const isShow = ref(true);
    return {
      firstName,
      lastName,
      fullName1,
      isShow,
      refData
    };
  },
  components: {
    Child
  }
});
</script>
