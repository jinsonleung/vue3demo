<template>
  <div>
    <h4>这是子组件</h4>
    <p>这是子组件的值(来自父组件)：{{ msgs }}</p>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from "vue";
export default defineComponent({
  name: "Child",
  props: ["msgs"],
  setup() {
    const refData = ref(0);
    return {
      refData
    };
  },
  mounted() {
    console.log("===" + this.msgs);
  }
});
</script>
