<template>
  <div>
    <h2>这是父组件</h2>
    <p>这是父组件的值：{{msgs}}</p>
    <button @click="msgs+='=='">+</button>
    <button @click="msgs-='=='"> - </button>
    <hr />
    <child :msgs="msgs"></child>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from "vue";
import Child from "./components/Child.vue";
export default defineComponent({
  components: { Child },
  name: "App",
  setup() {
    const msgs = ref("北京");
    console.log(msgs);
    const refData = ref(0);
    return {
      msgs,
      refData
    };
  }
});
</script>
<style scoped></style>
