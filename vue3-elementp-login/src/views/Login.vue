<template>
  <div class="login">
    用户名：<br />
    密码：
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from "vue";
export default defineComponent({
  name: "Login",
  setup() {
    const refData = ref(0);
    return {
      refData
    };
  }
});
</script>
<style scoped></style>
