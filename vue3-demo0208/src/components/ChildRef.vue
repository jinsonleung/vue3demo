<template>
  <div>
    <h3>这是子组件</h3>
    age:{{ age }}
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from "vue";

export default defineComponent({
  name: "ChildRef",
  setup() {
    const age = ref(0);
    return {
      age
    };
  }
});
</script>
