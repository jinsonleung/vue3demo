<template>
  <div class="not-found">
    <img src="../assets/404.gif" alt="" />
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from "vue";
export default defineComponent({
  name: "404",
  setup() {
    const refData = ref(0);
    return {
      refData
    };
  }
});
</script>
<style scoped>
.not-found {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.not-found img {
  width: 100%;
  height: 100%;
}</style
>>
