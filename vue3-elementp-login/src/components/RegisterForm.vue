<template>
  <el-form
    ref="registerForm"
    :model="registerUser"
    :rules="registerRules"
    status-icon
    label-width="100px"
    class="registerForm sign-up-form"
  >
    <el-form-item label="用户名" prop="userName">
      <el-input
        placeholder="Enter user name..."
        v-model="registerUser.userName"
      ></el-input>
    </el-form-item>
    <el-form-item label="邮箱" prop="email">
      <el-input
        placeholder="Enter email..."
        v-model="registerUser.email"
      ></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input
        type="password"
        placeholder="Enter password..."
        v-model="registerUser.password"
      ></el-input>
    </el-form-item>
    <el-form-item label="密码2" prop="password2">
      <el-input
        type="password"
        placeholder="Enter password2..."
        v-model="registerUser.password2"
      ></el-input>
    </el-form-item>
    <el-form-item>
      <el-button
        type="primary"
        class="submit-btn"
        @click="submitForm('registerForm')"
        >提交</el-button
      >
    </el-form-item>
    <!-- 找回密码 -->
    <div class="tiparea">
      <p>忘记密码？<a>立即找回</a></p>
    </div>
  </el-form>
</template>

<script lang="ts">
import { defineComponent, getCurrentInstance } from "vue";
export default defineComponent({
  name: "RegisterForm",
  props: {
    registerUser: {
      type: Object,
      required: true
    },
    registerRules: {
      type: Object,
      required: true
    }
  },
  setup() {
    // const { proxy } = getCurrentInstance();
    //const instance = getCurrentInstance();
    const submitForm = (formName: any) => {
      //报错....
      // console.log(formName);
      // if (instance) {
      //   instance.proxy.$refs[formName].validate((valid: boolean) => {
      //     if (valid) {
      //       alert("submit!");
      //     } else {
      //       console.log("error submit!!");
      //       return false;
      //     }
      //   });
      // }
    };
    return {
      submitForm
    };
  }
});
</script>
<style scoped></style>
